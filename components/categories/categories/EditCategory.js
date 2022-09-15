import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import CheckBoxInput from "../../ui/CheckBoxInput";
import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import UploadImage from "../UploadImage";

import axios from "../../../utils/axios";
import { categoriesActions } from "../../../store/slice/categories.slice";
import uploadToCloudinary from "../../../utils/uploadToCloudinary";

function EditCategory({ category, isOpen, setIsOpen }) {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const dispatch = useDispatch();

    function closeModal() {
        setIsOpen(false);
    }

    const submitHandler = async ({ name, enabled }) => {
        if (isLoading) return;
        toast.dismiss();

        const body = { name, enabled };
        console.log(body);

        try {
            setIsLoading(true);

            if (image) {
                body.icon = await uploadToCloudinary(image);
            }

            const response = await axios.patch(`/categories/${category.slug}`, body);
            const data = await response.data;

            dispatch(categoriesActions.updateCategory(data.category));

            toast.success(data.message);
            setIsLoading(false);
            setImage(null);
            closeModal(data.category);
        } catch (error) {
            if (error?.fields) {
                error.fields.forEach(({ field, message }) => {
                    setError(field, { type: field, message: message });
                });
                return;
            } else {
                if (error.response) toast.error(error.response.data.message);
                else toast.error(error.message);
            }
            setImage(null);
            setIsLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="p-6">
                <form className="" onSubmit={handleSubmit(submitHandler)}>
                    <h2 className="px-2 text-xl font-bold">Edit Category</h2>

                    <div className="mt-4 flex flex-col gap-2 ">
                        <UploadImage imageUrl={category?.icon} setFile={setImage} />

                        <div className="flex-1 space-y-3 py-1">
                            <Input
                                type="text"
                                placeholder="Category Name"
                                name="name"
                                register={register}
                                value={category.name}
                                required={{ required: "Name is required!" }}
                                error={errors.name?.message}
                            />

                            <div className="px-2">
                                <CheckBoxInput
                                    register={register}
                                    label="Enabled"
                                    name="enabled"
                                    defaultChecked={category.enabled}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center gap-2 sm:flex-row sm:justify-end sm:px-6">
                        <Button variant="primary" size="md" width="8rem" type="submit" disabled={isLoading}>
                            {isLoading ? <Spinner /> : "Save"}
                        </Button>

                        <Button variant="error" size="md" width="8rem" onClick={closeModal}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default EditCategory;
