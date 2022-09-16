import { useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../ui/Spinner";
import { toast } from "react-hot-toast";
import axios from "../../utils/axios";
import { Button, Input } from "@material-tailwind/react";
import { BiKey } from "react-icons/bi";
import Modal from "../ui/Modal";

const ChangePassword = () => {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm();

    const handleOpen = () => {
        reset();
        setOpen((prev) => !prev);
    };

    const submitHandler = async ({ oldPassword, newPassword, confirmPassword }) => {
        if (isSubmitting) return;
        toast.dismiss();

        const body = { oldPassword, newPassword, confirmPassword };

        try {
            const response = await axios.post("/auth/seller/changepassword", body);
            const data = await response.data;
            toast.success(data.message);
            handleOpen();
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
            <Button
                variant="filled"
                size="md"
                color="pink"
                className="flex h-11 w-52 items-center justify-center gap-2 capitalize"
                onClick={handleOpen}
            >
                <BiKey className="text-xl" />
                <span className="text-xs sm:text-sm">Change Password</span>
            </Button>

            <Modal isOpen={open} closeModal={handleOpen}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="space-y-4 bg-white p-6  sm:p-6">
                        <div>
                            <Input
                                size="lg"
                                label="Current Password"
                                type="password"
                                name="oldPassword"
                                color="green"
                                error={!!errors.oldPassword}
                                {...register("oldPassword", { required: "Current Password is required!" })}
                            />
                            {errors.oldPassword && (
                                <p className="mt-1 px-0.5 text-xs font-medium text-error-main">
                                    {errors.oldPassword.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Input
                                size="lg"
                                label="New Password"
                                type="password"
                                name="newPassword"
                                color="green"
                                error={!!errors.newPassword}
                                {...register("newPassword", { required: "New Password is required!" })}
                            />
                            {errors.newPassword && (
                                <p className="mt-1 px-0.5 text-xs font-medium text-error-main">
                                    {errors.newPassword.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Input
                                size="lg"
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                color="green"
                                error={!!errors.confirmPassword}
                                {...register("confirmPassword", { required: "Confirm Password is required!" })}
                            />
                            {errors.confirmPassword && (
                                <p className="mt-1 px-0.5 text-xs font-medium text-error-main">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 bg-gray-100 p-4 sm:flex-row sm:justify-end sm:px-6">
                        <Button
                            variant="filled"
                            color="green"
                            type="submit"
                            className="flex w-32 items-center justify-center text-sm capitalize"
                            disabled={isSubmitting}
                        >
                            Update
                        </Button>

                        <Button
                            variant="filled"
                            color="red"
                            className="flex w-32 items-center justify-center text-sm capitalize"
                            size="md"
                            onClick={handleOpen}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ChangePassword;
