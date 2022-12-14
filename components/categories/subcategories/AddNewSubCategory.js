import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MdOutlineAdd } from "react-icons/md";
import { categoriesActions } from "../../../store/slice/categories.slice";
import toast from "react-hot-toast";
import axios from "../../../utils/axios";
import Modal from "../../ui/Modal";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";

const AddNewSubCategory = ({ categoryId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm();

    function closeModal() {
        setIsOpen(false);
        reset();
    }

    function openModal() {
        setIsOpen(true);
    }

    const submitHandler = async ({ name, enabled }) => {
        if (isSubmitting) return;
        toast.dismiss();

        try {
            const response = await axios.post(`/subcategories`, { name, enabled, categoryId });
            const data = await response.data;

            dispatch(categoriesActions.addSubCategory(data?.subCategory));
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
        }
    };

    return (
        <>
            <Button onClick={openModal} variant="filled" size="sm" color="green">
                <div className="flex items-center gap-2 whitespace-nowrap">
                    <MdOutlineAdd className="text-xl" />
                    <span>Add New</span>
                </div>
            </Button>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <form className="p-6" onSubmit={handleSubmit(submitHandler)}>
                    <Typography className="px-2 text-xl font-bold">New Subcategory</Typography>

                    <div className="mt-4 space-y-3 py-1">
                        <div>
                            <Input
                                type="text"
                                label="Sub Category"
                                color="green"
                                size="lg"
                                name="name"
                                error={!!errors.name}
                                {...register("name", { required: "Name is required!" })}
                            />
                            {!!errors.name && (
                                <Typography className="px-2 text-xs text-red-600">{errors.name?.message}</Typography>
                            )}
                        </div>

                        <div className="px-2 ">
                            <Checkbox
                                label="Enabled"
                                name="enabled"
                                color="green"
                                defaultChecked={true}
                                {...register("enabled")}
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
            </Modal>
        </>
    );
};
export default AddNewSubCategory;
