import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../ui/Button";
import CheckBoxInput from "../ui/CheckBoxInput";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Spinner from "../ui/Spinner";
import UploadImage from "./UploadImage";

function EditCategory() {
    let [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const submitHandler = async () => {};

    return (
        <>
            <button className="text-xs lg:text-sm font-medium text-gray-800  whitespace-nowrap" onClick={openModal}>
                Edit
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="p-6">
                    <form className="" onSubmit={handleSubmit()}>
                        <h2 className="font-bold px-2 text-xl">Edit Category</h2>

                        <div className="mt-4 flex flex-col gap-2 ">
                            <UploadImage />

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
                                    <CheckBoxInput label="Enabled" name="enabled" defaultChecked={true} />
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

export default EditCategory;
