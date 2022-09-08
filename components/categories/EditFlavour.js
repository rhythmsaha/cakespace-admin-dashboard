import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { flavoursActions } from "../../store/slice/flavours.slice";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import CheckBoxInput from "../ui/CheckBoxInput";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Spinner from "../ui/Spinner";
import axios from "../../utils/axios";

const EditFlavour = ({ flavour, open, setOpen }) => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    function closeModal() {
        setOpen(false);
    }

    const submitHandler = async ({ name, enabled }) => {
        if (isLoading) return;
        toast.dismiss();

        setIsLoading(true);

        try {
            const response = await axios.patch(`/flavours/${flavour.slug}`, { name, enabled });
            const data = await response.data;

            dispatch(flavoursActions.updateFlavour(data.flavour));

            toast.success(data.message);

            setIsLoading(false);

            closeModal();
        } catch (error) {
            if (error.response) toast.error(error.response.data.message);
            else toast.error(error.message);

            setIsLoading(false);
        }
    };

    return (
        <Modal isOpen={open} closeModal={closeModal}>
            <form className="p-6" onSubmit={handleSubmit(submitHandler)}>
                <h2 className="px-2 text-xl font-bold">Edit Flavour</h2>

                <div className="mt-4 space-y-3 py-1">
                    <Input
                        type="text"
                        placeholder="Flavour Name"
                        name="name"
                        register={register}
                        required={{ required: "Name is required!" }}
                        error={errors.name?.message}
                        value={flavour.name}
                    />

                    <div className="px-2 ">
                        <CheckBoxInput
                            register={register}
                            label="Enabled"
                            name="enabled"
                            defaultChecked={flavour.enabled}
                        />
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
    );
};

export default EditFlavour;
