import { useState } from "react";
import { useDispatch } from "react-redux";
import { flavoursActions } from "../../../store/slice/flavours.slice";

import toast from "react-hot-toast";
import Modal from "../../ui/Modal";
import axios from "../../../utils/axios";
import { Typography, Button } from "@material-tailwind/react";

const DeleteFlavour = ({ slug, open, setOpen }) => {
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
            const response = await axios.delete(`/flavours/${slug}`);
            const data = await response.data;

            dispatch(flavoursActions.deleteFlavour(data.flavour.slug));
            toast.success(data.message);
            closeModal();
        } catch (error) {
            toast.error(error?.message || error || "Something went wrong!");
        }

        setIsLoading(false);
    };

    return (
        <Modal isOpen={open} closeModal={closeModal}>
            <div className="px-8 py-10">
                <div>
                    <Typography variant="h5" className="text-xl font-bold text-gray-800">
                        Delete Flavour
                    </Typography>
                    <Typography variant="paragraph" className="mt-2 text-gray-700">
                        Are you sure you want to Delete this flavour? All of the data will be permanently removed. This
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
export default DeleteFlavour;
