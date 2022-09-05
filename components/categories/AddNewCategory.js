import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../ui/Button";
import CheckBoxInput from "../ui/CheckBoxInput";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Spinner from "../ui/Spinner";
import UploadImage from "./UploadImage";
import toast from "react-hot-toast";
import axios from "../../utils/axios";

import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "../../store/slice/categories.slice";

function AddNewCategory() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
    } = useForm();

    function closeModal() {
        setIsOpen(false);

        setValue("name", "");
        setValue("enabled", true);
        setError("name", "");
        setError("enabled", "");
    }

    function openModal() {
        setIsOpen(true);
    }

    const submitHandler = async ({ name, enabled }) => {
        if (isLoading) return; // does nothing if isloading is true
        toast.dismiss(); // dismiss any other toasts
        setIsLoading(true); // set the loading state to true

        const body = { name, enabled };

        if (imageUrl) body.icon = imageUrl;

        try {
            const response = await axios.post(`/categories`, body);
            const data = await response.data;
            dispatch(categoriesActions.addCategory(data));
            toast.success(data.message);
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
        }

        setIsLoading(false);
    };

    return (
        <>
            <Button onClick={openModal} variant="primary" size="md" width="6rem">
                Add New
            </Button>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="p-6">
                    <form className="" onSubmit={handleSubmit(submitHandler)}>
                        <h2 className="font-bold px-2 text-xl">New Category</h2>

                        <div className="mt-4 flex flex-col gap-2 ">
                            <UploadImage setImageUrl={setImageUrl} />

                            <div className="space-y-3 flex-1 py-1">
                                <Input
                                    type="text"
                                    placeholder="Category Name"
                                    name="name"
                                    register={register}
                                    required={{ required: "Name is required!" }}
                                    error={errors.name?.message}
                                />

                                <div className="px-2">
                                    <CheckBoxInput
                                        label="Enabled"
                                        name="enabled"
                                        defaultChecked={true}
                                        register={register}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 sm:px-6 flex justify-center sm:flex-row sm:justify-end gap-2">
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
        </>
    );
}

export default AddNewCategory;
