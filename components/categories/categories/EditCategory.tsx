import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "../../ui/Modal";
import UploadImage from "../UploadImage";
import axios from "../../../utils/axios";
import { categoriesActions } from "../../../store/slice/categories.slice";
import uploadToCloudinary from "../../../utils/uploadToCloudinary";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";

function EditCategory({ category, isOpen, setIsOpen }) {
    const [image, setImage] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm();

    const dispatch = useDispatch();

    function closeModal() {
        setIsOpen(false);
        reset();
    }

    const submitHandler = async ({ name, enabled }) => {
        if (isSubmitting) return;
        toast.dismiss();

        const body = { name, enabled };

        try {
            if (image) body.icon = await uploadToCloudinary(image);

            const response = await axios.patch(`/categories/${category.slug}`, body);
            const data = await response.data;

            dispatch(categoriesActions.updateCategory(data.category));

            toast.success(data.message);

            setImage(null);
            closeModal(data.category);
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
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="p-6">
                <form className="" onSubmit={handleSubmit(submitHandler)}>
                    <Typography className="px-2 text-xl font-bold text-gray-700">Edit Category</Typography>

                    <div className="mt-4 flex flex-col gap-2">
                        <UploadImage imageUrl={category?.icon} setFile={setImage} />
                        <div className="flex-1 space-y-1 py-1">
                            <div>
                                <Input
                                    label="Category Name"
                                    color="green"
                                    size="lg"
                                    name="name"
                                    defaultValue={category.name}
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
                                defaultChecked={category.enabled}
                                {...register("enabled")}
                                color="green"
                            />
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center gap-2 sm:flex-row sm:justify-end sm:px-6">
                        <Button variant="filled" size="md" type="submit" className="w-28" color="green">
                            Save
                        </Button>

                        <Button variant="filled" size="md" className="w-28" color="red" onClick={closeModal}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default EditCategory;
