import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Spinner from "../ui/Spinner";
import Modal from "../ui/Modal";
import { toast } from "react-hot-toast";
import axios from "../../utils/axios";

const ChangePassword = ({ open, setOpen }) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError,
    } = useForm();

    function closeModal() {
        setOpen(false);
        setValue("oldPassword", "");
        setValue("newPassword", "");
        setValue("confirmPassword", "");

        setError("oldPassword", "");
        setError("newPassword", "");
        setError("confirmPassword", "");
    }

    const submitHandler = async ({ oldPassword, newPassword, confirmPassword }) => {
        if (isLoading) return;
        toast.dismiss();

        const body = { oldPassword, newPassword, confirmPassword };

        setIsLoading(true);

        try {
            const response = await axios.post("/auth/seller/changepassword", body);
            const data = await response.data;
            toast.success(data.message);
            closeModal();
        } catch (error) {
            if (error.type) {
                if (error.type === "oldPassword") {
                    setError(error.type, { type: error?.type, message: error.message });
                } else if (error.type === "passwords") {
                    setError("newPassword", { type: error?.type, message: error.message });
                } else if (error.type === "confirmPassword") {
                    setError("confirmPassword", { type: error?.type, message: error.message });
                } else {
                    setError(error.type, { type: error?.type, message: error.message });
                }
            } else {
                if (error.response) toast.error(error.response.data.message);
                else toast.error(error.message);
            }
        }

        setIsLoading(false);
    };

    return (
        <>
            <Modal isOpen={open} closeModal={closeModal}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="bg-white p-6 sm:p-6  space-y-4">
                        <Input
                            type="password"
                            placeholder="Current Password"
                            name="oldPassword"
                            error={errors.oldPassword?.message}
                            register={register}
                            required={{ required: "Current Password is required!" }}
                        />
                        <Input
                            type="password"
                            placeholder="New Password"
                            name="newPassword"
                            error={errors.newPassword?.message}
                            register={register}
                            required={{ required: "New Password is required!" }}
                        />
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            error={errors.confirmPassword?.message}
                            register={register}
                            required={{ required: "Confirm Password is required!" }}
                        />
                    </div>

                    <div className="bg-gray-100 p-4 sm:px-6 flex justify-center sm:flex-row sm:justify-end gap-2">
                        <Button variant="primary" size="md" width="8rem" type="submit" disabled={isLoading}>
                            {isLoading ? <Spinner /> : "Update"}
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

export default ChangePassword;
