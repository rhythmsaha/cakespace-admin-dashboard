import { useState } from "react";
import Modal from "../ui/Modal";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { categoriesActions } from "../../store/slice/categories.slice";

const DeleteItem = ({ slug, isOpen, setIsOpen }) => {
    const [isLoading, setIsLoading] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    const dispatch = useDispatch();

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="p-10 ">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Delete Category</h2>
                    <p className="mt-2 text-gray-700">
                        Are you sure you want to Delete this category? All of the data will be permanently removed. This
                        action cannot be undone.
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
                    <Button variant="error-outlined" size="md" width="6rem" onClick={closeModal}>
                        Cancel
                    </Button>

                    <Button variant="error" size="md" width="6rem" onClick={closeModal}>
                        Delete
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
export default DeleteItem;
