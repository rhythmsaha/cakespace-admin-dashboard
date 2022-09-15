import { Button, Typography } from "@material-tailwind/react";
import Image from "next/future/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import IllustrationUpload from "../../assets/illustrations/IllustrationUpload";

const ImageForm = () => {
    const imageChangeHandler = (e) => {
        console.log(e.target.files);
    };

    return (
        <div className="">
            <label className="max-w-full flex flex-col lg:flex-row items-center justify-center gap-4 border-dashed border bg-grey-200 rounded-xl p-10 cursor-pointer hover:opacity-75">
                <IllustrationUpload />

                <div className="text-center lg:text-left space-y-2">
                    <Typography variant="h5" className="text-base lg:text-lg font-bold text-gray-800">
                        Drop or Select file
                    </Typography>

                    <Typography variant="small" className="">
                        Drop files here or click <span className="text-green-500 underline">browse</span> thorough your
                        machine
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

            <div className="mt-2 space-y-4">
                <div className="flex items-center gap-2 py-4">
                    <div className="relative">
                        <button className="absolute right-1.5 top-1.5 rounded-full bg-black text-white bg-opacity-60 h-5 w-5 flex items-center justify-center">
                            <AiOutlineClose className="text-xs" />
                        </button>

                        <Image
                            src="https://res.cloudinary.com/desihzeid/image/upload/v1663253292/CakeSpace/ym3iv7onb5o1gys7f8qu.jpg"
                            height={80}
                            width={80}
                            className="min-w-min w-20 h-20 rounded-lg object-cover"
                            alt="image"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-2">
                    <Button variant="text" size="sm" color="red" className="capitalize">
                        Remove All
                    </Button>

                    <Button variant="filled" size="sm" color="green" className="capitalize">
                        Upload Files
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default ImageForm;
