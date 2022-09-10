import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import CheckBoxInput from "../ui/CheckBoxInput";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Spinner from "../ui/Spinner";
import axios from "../../utils/axios";
import { categoriesActions } from "../../store/slice/categories.slice";
import { toast } from "react-hot-toast";
import { MdOutlineAdd } from "react-icons/md";

const AddNewSubCategory = ({ categoryId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

        setError("name", {});
        setError("enabled", {});
    }

    function openModal() {
        setIsOpen(true);
    }

    const submitHandler = async ({ name, enabled }) => {
        if (isLoading) return; // does nothing if isloading is true
        toast.dismiss(); // dismiss any other toasts
        setIsLoading(true); // set the loading state to true

        try {
            const response = await axios.post(`/subcategories`, { name, enabled, categoryId });
            const data = await response.data;

            dispatch(categoriesActions.addSubCategory(data?.subCategory));
            setIsLoading(false);
            toast.success(data.message);
            closeModal();
        } catch (error) {
            if (error.response) toast.error(error.response.data.message);
            else toast.error(error.message);
            setIsLoading(false);
        }
    };

    //
    return (
        <>
            <Button onClick={openModal} variant="primary" size="md">
                <div className="flex items-center gap-4 whitespace-nowrap">
                    <MdOutlineAdd className="text-xl" />
                    Add New
                </div>
            </Button>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <form className="p-6" onSubmit={handleSubmit(submitHandler)}>
                    <h2 className="px-2 text-xl font-bold">New Subcategory</h2>

                    <div className="mt-4 space-y-3 py-1">
                        <Input
                            type="text"
                            placeholder="Sub Category"
                            name="name"
                            register={register}
                            required={{ required: "Name is required!" }}
                            error={errors.name?.message}
                        />

                        <div className="px-2 ">
                            <CheckBoxInput register={register} label="Enabled" name="enabled" defaultChecked={true} />
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
            </Modal>
        </>
    );
};
export default AddNewSubCategory;
