/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion } from "framer-motion";
import { MdAddAPhoto } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const UploadImage = ({ avatarUrl, setAvatarUrl }) => {
    const [image, setImage] = useState(avatarUrl);
    const [hoverState, setHoverState] = useState(false);

    const suppoertedTypes = ["image/png", "image/jpeg", "image/jpg"];
    const maxSize = 2 * 1024 * 1024; //2 MB

    const uploadToCloudinary = (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "cakespace");
        data.append("cloud_name", "desihzeid");

        fetch("https://api.cloudinary.com/v1_1/desihzeid/image/upload", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setImage(data.url);
                setAvatarUrl(data.url);
            })
            .catch((err) => {
                setImage(avatarUrl);
            });
    };

    const createImageBlob = (e) => {
        try {
            const file = e.target.files[0];

            if (!file) return console.log("No file selected");
            if (!suppoertedTypes.includes(file.type)) return;
            if (file.size > maxSize) return;

            const imageBlob = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            setImage(imageBlob.preview);
            uploadToCloudinary(imageBlob);
        } catch (error) {
            return;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 py-14 md:py-10">
            <label
                htmlFor="test"
                className="cursor-pointer border border-dashed rounded-full p-2 flex items-center justify-center relative h-36 w-36 overflow-hidden"
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
            >
                {hoverState && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, type: "just" }}
                        className="flex flex-col items-center justify-center gap-2 bg-grey-900 bg-opacity-70 rounded-full text-grey-300 absolute inset-2"
                    >
                        <MdAddAPhoto className="text-2xl" />
                        <p className="text-xs">Update Photo</p>
                    </motion.span>
                )}

                {image ? (
                    <img src={image} className="object-cover h-full w-full rounded-full border" alt="" />
                ) : (
                    <FaUser className="text-grey-500 border h-full w-full rounded-full p-10" />
                )}

                <input id="test" type="file" onChange={(e) => createImageBlob(e)} className="hidden" />
            </label>

            <h2 className="text-sm mt-2 font-bold text-grey-600">Profile Picture</h2>

            <p className="text-center text-xs text-grey-500 font-medium mt-5">
                Allowed *.jpeg, *.jpg, *.png <br /> max size of 2 MB
            </p>
        </div>
    );
};
export default UploadImage;
