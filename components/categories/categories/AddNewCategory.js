import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import Modal from "../../ui/Modal";
import UploadImage from "../UploadImage";
import uploadToCloudinary from "../../../utils/uploadToCloudinary";
import axios from "../../../utils/axios";
import toast from "react-hot-toast";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { categoriesActions } from "../../../store/slice/categories.slice";

const AddNewCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        reset();
    }

    const submitHandler = async ({ name, enabled }) => {
        if (isSubmitting) return;
        toast.dismiss();

        try {
            const body = { name, enabled };
            if (image) body.icon = await uploadToCloudinary(image);

            const response = await axios.post(`/categories`, body);
            const data = await response.data;

            dispatch(categoriesActions.addCategory(data?.category));
            setImage(null);

            toast.success(data.message);
            closeModal();
        } catch (error) {
            if (error?.fields && error.fields.length > 0) {
                error.fields.forEach((field) => {
                    setError(field.path, { type: field.type, message: field.message });
                });
            } else {
                toast.error(error?.message || error || "Something went wrong!");
            }

            setImage(null);
        }
    };

    return (
        <>
            <Button onClick={openModal} variant="filled" size="md" color="green">
                <div className="flex items-center gap-2 whitespace-nowrap">
                    <MdOutlineAdd className="text-xl" />
                    <span>Add New</span>
                </div>
            </Button>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="p-6">
                    <form className="" onSubmit={handleSubmit(submitHandler)}>
                        <Typography className="px-2 text-xl font-bold text-gray-700">New Category</Typography>

                        <div className="mt-4 flex flex-col gap-2 ">
                            <UploadImage setFile={setImage} />

                            <div className="flex-1 space-y-1 py-1">
                                <div>
                                    <Input
                                        label="Category Name"
                                        color="green"
                                        size="lg"
                                        name="name"
                                        error={!!errors.name}
                                        {...register("name", { required: "Name is required!" })}
                                    />
                                    {!!errors.name && (
                                        <span className="px-2 text-xs text-red-600">{errors.name?.message}</span>
                                    )}
                                </div>

                                <Checkbox
                                    label="Enabled"
                                    name="enabled"
                                    defaultChecked={true}
                                    {...register("enabled")}
                                    color="green"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center gap-2 sm:flex-row sm:justify-end sm:px-6">
                            <Button
                                variant="filled"
                                size="md"
                                type="submit"
                                disabled={isSubmitting}
                                className="w-28"
                                color="green"
                            >
                                Save
                            </Button>

                            <Button variant="filled" size="md" className="w-28" color="red" onClick={closeModal}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default AddNewCategory;
