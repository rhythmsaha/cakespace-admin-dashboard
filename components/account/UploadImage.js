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
                className="relative flex h-36 w-36 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-dashed p-2"
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
            >
                {hoverState && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, type: "just" }}
                        className="absolute inset-2 flex flex-col items-center justify-center gap-2 rounded-full bg-grey-900 bg-opacity-70 text-grey-300"
                    >
                        <MdAddAPhoto className="text-2xl" />
                        <p className="text-xs">Update Photo</p>
                    </motion.span>
                )}

                {image ? (
                    <img src={image} className="h-full w-full rounded-full border object-cover" alt="" />
                ) : (
                    <FaUser className="h-full w-full rounded-full border p-10 text-grey-500" />
                )}

                <input id="test" type="file" onChange={(e) => createImageBlob(e)} className="hidden" />
            </label>

            <h2 className="mt-2 text-sm font-bold text-grey-600">Profile Picture</h2>

            <p className="mt-5 text-center text-xs font-medium text-grey-500">
                Allowed *.jpeg, *.jpg, *.png <br /> max size of 2 MB
            </p>
        </div>
    );
};
export default UploadImage;
