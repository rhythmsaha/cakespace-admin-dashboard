import { useState } from "react";
import Modal from "../ui/Modal";
import { Typography, Button } from "@material-tailwind/react";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axios";

const DeleteProduct = ({ id, isOpen, setIsOpen, onDelete }) => {
    const [isLoading, setIsLoading] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    const deleteHandler = async () => {
        if (isLoading) return;
        toast.dismiss();

        setIsLoading(true);
        try {
            const response = await axiosInstance.delete(`/products/${id}`);
            const data = await response.data;

            onDelete(data?.data);
            toast.success(data.message);

            closeModal();
        } catch (error) {
            toast.error(error?.message || error || "Something went wrong!");
        }

        setIsLoading(false);
    };

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="px-8 py-10">
                <div>
                    <Typography variant="h5" className="font-bold text-gray-800">
                        Delete Category
                    </Typography>

                    <Typography variant="paragraph" className="mt-2 text-gray-700">
                        Are you sure you want to Delete this category? All of the data will be permanently removed. This
                        action cannot be undone.
                    </Typography>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
                    <Button variant="outlined" size="md" color="red" className="w-24" onClick={closeModal}>
                        Cancel
                    </Button>

                    <Button variant="filled" size="md" color="red" className="w-24" onClick={deleteHandler}>
                        Delete
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
export default DeleteProduct;
