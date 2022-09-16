import { Button, Typography } from "@material-tailwind/react";
import Image from "next/future/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import IllustrationUpload from "../../assets/illustrations/IllustrationUpload";
import uploadToCloudinary from "../../utils/uploadToCloudinary";

const suppoertedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
const maxSize = 2 * 1024 * 1024; //2 MB

const ImageForm = ({ links, setLinks }) => {
    const [uploading, setUploading] = useState(false);
    const [images, setImages] = useState(links || []);
    const [imageFiles, setImageFiles] = useState([]);

    const createImageBlob = (file) => {
        try {
            if (!file) return console.log("No file selected");
            if (!suppoertedTypes.includes(file.type)) return;
            if (file.size > maxSize) return;

            const imageBlob = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            return imageBlob;
        } catch (error) {
            toast.error(error.message);
            return file;
        }
    };

    const imageChangeHandler = (e) => {
        const selectedFiles = e.target.files;
        const filesArr = Object.values(selectedFiles);
        const files = [];
        const imgArr = [];
        filesArr.forEach((file) => {
            const image = createImageBlob(file);
            if (!image?.preview) return;
            files.push(image);
            imgArr.push(image.preview);
        });

        setImages((prev) => [...prev, ...imgArr]);
        setImageFiles((prev) => [...prev, ...files]);
    };

    const uploadImageHandler = async () => {
        if (uploading) return;

        setUploading(true);
        const response = await Promise.all(
            imageFiles.map((file) => uploadToCloudinary(file).catch((err) => toast.error("Failed to upload")))
        ).catch((err) => console.log(err));

        setUploading(false);

        setLinks((prev) => [...prev, ...response]);
        setImageFiles([]);
    };

    const removeAllHandler = () => {
        setImages([]);
        setImageFiles([]);
        setLinks([]);
    };

    const removeSingleHandler = (url) => {
        const filteredImages = images.filter((img) => img !== url);
        const filteredLinks = links.filter((img) => img !== url);
        const filteredFiles = imageFiles.filter((img) => img?.preview !== url);
        setImages(filteredImages);
        setImageFiles(filteredFiles);
        setLinks(filteredLinks);
    };

    return (
        <div className="">
            <label className="flex max-w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border border-dashed bg-grey-200 p-10 hover:opacity-75 lg:flex-row">
                <IllustrationUpload />

                <div className="space-y-2 text-center lg:text-left">
                    <Typography variant="h5" className="text-base font-bold text-gray-800 lg:text-lg">
                        Select file
                    </Typography>

                    <Typography variant="small" className="">
                        click <span className="text-green-500 underline">browse</span> thorough your machine
                    </Typography>
                </div>

                <input
                    type="file"
                    accept="image/*"
                    multiple="multiple"
                    className="hidden"
                    onChange={imageChangeHandler}
                />
            </label>

            {images.length > 0 && (
                <div className="mt-2 space-y-4">
                    <div className="flex flex-wrap items-center justify-center gap-2 py-4 sm:justify-start">
                        {images.map((img) => (
                            <div className="relative" key={img || img.preview}>
                                <button
                                    type="button"
                                    onClick={() => removeSingleHandler(img || img.preview)}
                                    className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black bg-opacity-60 text-white"
                                >
                                    <AiOutlineClose className="text-xs" />
                                </button>

                                <Image
                                    src={img}
                                    height={80}
                                    width={80}
                                    className="h-20 w-20 min-w-[80px] rounded-lg object-cover"
                                    alt="image"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-end gap-2">
                        <Button
                            onClick={removeAllHandler}
                            variant="text"
                            size="sm"
                            color="red"
                            className="capitalize"
                            type="button"
                        >
                            Remove All
                        </Button>

                        {imageFiles.length > 0 && (
                            <Button
                                variant="filled"
                                size="sm"
                                type="button"
                                color="green"
                                className="capitalize"
                                disabled={uploading}
                                onClick={uploadImageHandler}
                            >
                                Upload Files
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
export default ImageForm;
