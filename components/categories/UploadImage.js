/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

function UploadImage({ setImageUrl }) {
    const [image, setImage] = useState();
    const [hoverState, setHoverState] = useState(false);

    const suppoertedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const maxSize = 1 * 1024 * 1024; //2 MB

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
                setImageUrl(data.url);
            })
            .catch((err) => {
                setImage(null);
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
            console.log(error);
            return;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 p-4">
            <label
                htmlFor="test"
                className="cursor-pointer border border-dashed rounded-full p-2 flex items-center justify-center relative h-28 w-28 overflow-hidden"
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
            >
                {image && hoverState && (
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
                    <span className="rounded-full border h-full w-full flex items-center justify-center p-7">
                        <MdAddAPhoto className="text-grey-500 h-full w-full" />
                    </span>
                )}

                <input id="test" type="file" onChange={createImageBlob} className="hidden" />
            </label>

            <h2 className="text-sm mt-2 font-bold text-grey-600">Category Image</h2>

            <p className="text-center text-xs text-grey-500 font-medium mt-1">
                Allowed *.jpeg, *.jpg, *.png <br /> max size of 1 MB
            </p>
        </div>
    );
}

export default UploadImage;
