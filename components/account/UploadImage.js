/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

function UploadImage({ user }) {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState(user?.avatar);
    const [hoverState, setHoverState] = useState(false);

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
            .then((data) => setUrl(data.url))
            .catch((err) => {
                setImage(null);
            });
    };

    const createImageBlob = (e) => {
        if (!e.target.files.length !== 0) {
            const imageBlob = Object.assign(e.target.files[0], {
                preview: URL.createObjectURL(e.target.files[0]),
            });

            setImage(imageBlob.preview);
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
                        className="top-2 bottom-2 left-2 right-2 flex flex-col items-center justify-center gap-2 bg-black bg-opacity-70 rounded-full text-gray-300 absolute "
                    >
                        <MdAddAPhoto className="text-2xl " />
                        <p className="text-xs">Update Photo</p>
                    </motion.span>
                )}

                <img src={image || url} className="object-contain h-full w-full rounded-full border" alt="" />

                <input id="test" type="file" onChange={createImageBlob} className="hidden" />
            </label>

            <h2 className="text-sm mt-2 font-bold text-gray-500">Profile Picture</h2>

            <p className="text-center text-xs text-gray-400 font-medium mt-5">
                Allowed *.jpeg, *.jpg, *.png, *.gif <br /> max size of 3.1 MB
            </p>
        </div>
    );
}
export default UploadImage;
