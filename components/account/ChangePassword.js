import { useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../ui/Spinner";
import { toast, Toaster } from "react-hot-toast";
import axios from "../../utils/axios";
import { Button, Input, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { BiKey } from "react-icons/bi";
import Portal from "../hoc/Portal";

const ChangePassword = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError,
    } = useForm();

    const handleOpen = () => setOpen((prev) => !prev);

    // function closeModal() {
    //     setOpen(false);
    //     setValue("oldPassword", "");
    //     setValue("newPassword", "");
    //     setValue("confirmPassword", "");
    // }

    const submitHandler = async ({ oldPassword, newPassword, confirmPassword }) => {
        toast.success("Hello world");
        // if (isLoading) return;
        // toast.dismiss();

        // const body = { oldPassword, newPassword, confirmPassword };

        // setIsLoading(true);

        // try {
        //     const response = await axios.post("/auth/seller/changepassword", body);
        //     const data = await response.data;
        //     toast.success(data.message);
        //     handleOpen();
        // } catch (error) {
        //     if (error.type) {
        //         if (error.type === "oldPassword") {
        //             setError(error.type, { type: error?.type, message: error.message });
        //         } else if (error.type === "passwords") {
        //             setError("newPassword", { type: error?.type, message: error.message });
        //         } else if (error.type === "confirmPassword") {
        //             setError("confirmPassword", { type: error?.type, message: error.message });
        //         } else {
        //             setError(error.type, { type: error?.type, message: error.message });
        //         }
        //     } else {
        //         if (error.response) toast.error(error.response.data.message);
        //         else toast.error(error.message);
        //     }
        // }

        // setIsLoading(false);
    };

    return (
        <>
            <Button
                variant="filled"
                size="md"
                color="pink"
                className="flex items-center justify-center gap-2 capitalize h-11 w-52"
                onClick={handleOpen}
            >
                <BiKey className="text-xl" />
                <span className="text-xs sm:text-sm">Change Password</span>
            </Button>

            <Dialog open={open} handler={handleOpen} className="w-10/12 max-w-lg">
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
                                <p className="px-0.5 text-xs font-medium text-error-main mt-1">
                                    {errors?.oldPassword?.message}
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
                            {errors.oldPassword && (
                                <p className="px-0.5 text-xs font-medium text-error-main mt-1">
                                    {errors?.newPassword?.message}
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
                            {errors.oldPassword && (
                                <p className="px-0.5 text-xs font-medium text-error-main mt-1">
                                    {errors?.confirmPassword?.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 bg-gray-100 p-4 sm:flex-row sm:justify-end sm:px-6">
                        <Button
                            variant="filled"
                            color="green"
                            type="submit"
                            className="flex items-center justify-center w-32 capitalize text-sm"
                            disabled={isLoading}
                        >
                            {isLoading ? <Spinner /> : "Update"}
                        </Button>

                        <Button
                            variant="filled"
                            color="red"
                            className="flex items-center justify-center w-32 capitalize text-sm"
                            size="md"
                            onClick={handleOpen}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Dialog>
        </>
    );
};

export default ChangePassword;

{
    /* <form onSubmit={handleSubmit(submitHandler)}>
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
            <p className="px-0.5 text-xs font-medium text-error-main mt-1">
                {errors?.oldPassword?.message}
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
        {errors.oldPassword && (
            <p className="px-0.5 text-xs font-medium text-error-main mt-1">
                {errors?.newPassword?.message}
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
        {errors.oldPassword && (
            <p className="px-0.5 text-xs font-medium text-error-main mt-1">
                {errors?.confirmPassword?.message}
            </p>
        )}
    </div>
</div>

<div className="flex justify-center gap-2 bg-gray-100 p-4 sm:flex-row sm:justify-end sm:px-6">
    <Button
        variant="filled"
        color="green"
        type="submit"
        className="flex items-center justify-center w-32 capitalize text-sm"
        disabled={isLoading}
    >
        {isLoading ? <Spinner /> : "Update"}
    </Button>

    <Button
        variant="filled"
        color="red"
        className="flex items-center justify-center w-32 capitalize text-sm"
        size="md"
        onClick={closeModal}
    >
        Cancel
    </Button>
</div>
</form> */
}
