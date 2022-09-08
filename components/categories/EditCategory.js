import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Button from "../ui/Button";
import CheckBoxInput from "../ui/CheckBoxInput";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Spinner from "../ui/Spinner";
import UploadImage from "./UploadImage";

import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { categoriesActions } from "../../store/slice/categories.slice";

function EditCategory({ category, isOpen, setIsOpen }) {
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const dispatch = useDispatch();

    function closeModal(category = category) {
        setIsOpen(false);
    }

    const submitHandler = async ({ name, enabled }) => {
        
        if (isLoading) return
        toast.dismiss();

        const body = { name, enabled };
        if (imageUrl) body.icon = imageUrl;

        try {
            setIsLoading(true);
            const response = await axios.patch(`/categories/${category.slug}`, body);
            const data = await response.data;
            console.log(data);
            dispatch(categoriesActions.updateCategory(data.category));
            toast.success(data.message);
            setIsLoading(false);
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

            setIsLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="p-6">
                <form className="" onSubmit={handleSubmit(submitHandler)}>
                    <h2 className="px-2 text-xl font-bold">Edit Category</h2>

                    <div className="mt-4 flex flex-col gap-2 ">
                        <UploadImage imageUrl={category?.icon} setImageUrl={setImageUrl} />

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
                                <CheckBoxInput label="Enabled" name="enabled" defaultChecked={category.enabled} />
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
