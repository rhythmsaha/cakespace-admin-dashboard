import { useState } from "react";
import Modal from "../ui/Modal";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { categoriesActions } from "../../store/slice/categories.slice";

const DeleteSubCateory = ({ _id, open, setOpen }) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    function closeModal() {
        setOpen(false);
    }

    const deleteHandler = async () => {
        if (isLoading) return;
        toast.dismiss();

        setIsLoading(true);
        try {
            const response = await axios.delete(`/subcategories/${_id}`);
            const data = await response.data;

            dispatch(categoriesActions.deleteSubCategory(data.subCategory));
            toast.success(data.message);
            setIsLoading(false);
            setOpen(false);
        } catch (error) {
            if (error.response) toast.error(error.response.data.message);
            else toast.error(error.message);
            setIsLoading(false);
        }
    };

    return (
        <Modal isOpen={open} closeModal={closeModal}>
            <div className="p-10 ">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Delete Subcategory</h2>
                    <p className="mt-2 text-gray-700">
                        Are you sure you want to Delete this SubCategory? All of the data will be permanently removed.
                        This action cannot be undone.
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
                    <Button variant="error-outlined" size="md" width="6rem" onClick={closeModal}>
                        Cancel
                    </Button>

                    <Button variant="error" size="md" width="6rem" onClick={deleteHandler} disabled={isLoading}>
                        {isLoading ? <Spinner /> : "Delete"}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteSubCateory;
