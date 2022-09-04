import { useState } from "react";
import { BiKey } from "react-icons/bi";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import CardHeading from "./CardHeading";
import ChangePassword from "./ChangePassword";
import UploadImage from "./UploadImage";
import { useForm } from "react-hook-form";
import axios from "../../utils/axios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

function PersonalInfo() {
    const [passwordModal, setPasswordModal] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const { update, user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError,
    } = useForm();

    const submitHandler = async ({ fullName, email }) => {
        if (isLoading) return; // does nothing if isloading is true
        toast.dismiss(); // dismiss any other toasts
        setIsLoading(true); // set the loading state to true

        const body = { fullName };
        if (avatarUrl) body.avatar = avatarUrl;

        try {
            const response = await axios.post("/auth/seller/updateinfo", body);
            const data = await response.data;
            update(data?.user);
            toast.success(data.message);
        } catch (error) {
            if (error?.fields) {
                error.fields.forEach(({ field, message }) => {
                    setError(field, { type: field, message: message });
                });

                return;
            }
        }

        setIsLoading(false);
    };

    return (
        <>
            <Card>
                <CardHeading heading="Personal Information" desc="Use a permanent email where you can receive mail." />

                <section className="grid lg:grid-cols-12 gap-10 items-start mt-8  ">
                    <section className="border rounded-xl lg:col-span-6 xl:col-span-5">
                        <UploadImage avatarUrl={user?.avatar} setAvatarUrl={setAvatarUrl} />
                    </section>

                    <section className="lg:col-span-6 xl:col-span-7">
                        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
                            <Input
                                label="Full Name"
                                name="fullName"
                                error={errors.fullName?.message}
                                value={user?.fullName}
                                register={register}
                                required={{ required: "Name is required!" }}
                            />

                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                disabled={true}
                                value={user?.email}
                                register={register}
                            />

                            <div className="flex gap-4">
                                <Button variant="primary" size="lg" width="10rem" type="submit" disabled={isLoading}>
                                    Save
                                </Button>

                                <Button variant="error-outlined" size="md" onClick={() => setPasswordModal(true)}>
                                    <BiKey className="text-xl" /> Change Password
                                </Button>
                            </div>
                        </form>
                    </section>
                </section>
            </Card>

            <ChangePassword open={passwordModal} setOpen={setPasswordModal} />
        </>
    );
}
export default PersonalInfo;
