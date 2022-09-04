import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";

function ChangePassword({ open, setOpen }) {
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

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur transition" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                <form
                                    onSubmit={handleSubmit(() => {
                                        console.log("done");
                                    })}
                                >
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 space-y-4">
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

                                    <div className="bg-gray-100 px-4 py-3 sm:px-6 flex items-center justify-center sm:flex-row sm:justify-end gap-2">
                                        <Button variant="primary" size="md" width="8rem" type="submit">
                                            Update
                                        </Button>

                                        <Button variant="error" size="md" width="8rem" onClick={closeModal}>
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default ChangePassword;
