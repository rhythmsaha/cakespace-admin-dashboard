import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { flavoursActions } from "../../../store/slice/flavours.slice";
import toast from "react-hot-toast";
import Modal from "../../ui/Modal";
import axios from "../../../utils/axios";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";

const EditFlavour = ({ flavour, open, setOpen }) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm();

    function closeModal() {
        setOpen(false);
        reset();
    }

    const submitHandler = async ({ name, enabled }) => {
        if (isSubmitting) return;
        toast.dismiss();

        try {
            const response = await axios.patch(`/flavours/${flavour.slug}`, { name, enabled });
            const data = await response.data;

            dispatch(flavoursActions.updateFlavour(data.flavour));
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
        <Modal isOpen={open} closeModal={closeModal}>
            <form className="p-6" onSubmit={handleSubmit(submitHandler)}>
                <Typography className="px-2 text-xl font-bold">Edit Flavour</Typography>

                <div className="mt-4 space-y-3 py-1">
                    <div>
                        <Input
                            type="text"
                            label="Flavour Name"
                            name="name"
                            color="green"
                            size="lg"
                            defaultValue={flavour.name}
                            error={!!errors.name}
                            {...register("name", { required: "Name is required!" })}
                        />

                        {!!errors.name && (
                            <Typography className="px-2 text-xs text-red-600">{errors.name?.message}</Typography>
                        )}
                    </div>

                    <div>
                        <Checkbox
                            label="Enabled"
                            name="enabled"
                            defaultChecked={flavour.enabled}
                            color="green"
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
    );
};

export default EditFlavour;
