/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

function UploadImage({ imageUrl, setImageUrl }) {
    const [image, setImage] = useState(imageUrl);
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
        } catch (error) {
            console.log(error);
            return;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 p-4">
            <label
                htmlFor="test"
                className="relative flex h-28 w-28 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-dashed p-2"
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
            >
                {image && hoverState && (
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
                    <span className="flex h-full w-full items-center justify-center rounded-full border p-7">
                        <MdAddAPhoto className="h-full w-full text-grey-500" />
                    </span>
                )}

                <input id="test" type="file" onChange={createImageBlob} className="hidden" />
            </label>

            <h2 className="mt-2 text-sm font-bold text-grey-600">Category Image</h2>

            <p className="mt-1 text-center text-xs font-medium text-grey-500">
                Allowed *.jpeg, *.jpg, *.png <br /> max size of 1 MB
            </p>
        </div>
    );
}

export default UploadImage;
