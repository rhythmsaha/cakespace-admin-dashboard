import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import CardHeading from "./CardHeading";
import UploadImage from "./UploadImage";
import ChangePassword from "./ChangePassword";
// import Button from "../ui/Button";
import { Button } from "@material-tailwind/react";
import Card from "../ui/Card";
import { Input } from "@material-tailwind/react";
import Spinner from "../ui/Spinner";
import { BiKey } from "react-icons/bi";
import { toast } from "react-hot-toast";
import axios from "../../utils/axios";
import uploadToCloudinary from "../../utils/uploadToCloudinary";

const PersonalInfo = () => {
    const [passwordModal, setPasswordModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [avatar, setAvatar] = useState();

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
        if (avatar) body.avatar = await uploadToCloudinary(avatar);

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
            } else {
                if (error.response) toast.error(error.response.data.message);
                else toast.error(error.message);
            }
        }

        setIsLoading(false);
    };

    return (
        <>
            <Card>
                <CardHeading heading="Personal Information" desc="Use a permanent email where you can receive mail." />

                <section className="mt-8 grid items-start gap-10 lg:grid-cols-12  ">
                    <section className="rounded-xl border lg:col-span-6 xl:col-span-5">
                        <UploadImage imageUrl={user?.avatar} setFile={setAvatar} />
                    </section>

                    <section className="lg:col-span-6 xl:col-span-7">
                        <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
                            <Input
                                size="lg"
                                label="Full Name"
                                name="fullName"
                                defaultValue={user?.fullName}
                                color="green"
                                error={errors.fullName}
                                {...register("fullName", {
                                    required: "Name is required!",
                                })}
                            />

                            <Input
                                size="lg"
                                label="Email Address"
                                name="email"
                                type="email"
                                color="green"
                                // disabled={true}
                                error={errors.email}
                                value={user?.email}
                                {...register("email", {
                                    required: "Please enter a valid email address!",
                                })}
                            />

                            <div className="grid gap-4 items-center">
                                <Button
                                    size="md"
                                    variant="fill"
                                    fullWidth
                                    color="green"
                                    className="bg-primary-main flex items-center justify-center h-11"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? <Spinner /> : "Save"}
                                </Button>

                                <Button
                                    variant="gradient"
                                    size="md"
                                    color="pink"
                                    fullWidth
                                    className="flex items-center justify-center gap-2 capitalize h-11"
                                    onClick={() => setPasswordModal(true)}
                                >
                                    <BiKey className="text-xl" />
                                    <span className="text-xs sm:text-sm">Change Password</span>
                                </Button>
                            </div>
                        </form>
                    </section>
                </section>
            </Card>

            <ChangePassword open={passwordModal} setOpen={setPasswordModal} />
        </>
    );
};
export default PersonalInfo;
