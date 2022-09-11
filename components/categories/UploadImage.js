/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import toast from "react-hot-toast";

function UploadImage({ imageUrl, setFile }) {
    const [image, setImage] = useState(imageUrl);
    const [hoverState, setHoverState] = useState(false);

    const suppoertedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const maxSize = 2 * 1024 * 1024; //2 MB

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
            setFile(imageBlob);
        } catch (error) {
            toast.error(error.message);
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
