import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import CardHeading from "./CardHeading";
import UploadImage from "./UploadImage";
import ChangePassword from "./ChangePassword";
import Card from "../ui/Card";
import axios from "../../utils/axios";
import uploadToCloudinary from "../../utils/uploadToCloudinary";
import Spinner from "../ui/Spinner";

const PersonalInfo = () => {
    const [passwordModal, setPasswordModal] = useState(false);
    const [avatar, setAvatar] = useState();

    const { update, user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm();

    const submitHandler = async ({ fullName }) => {
        if (isSubmitting) return;
        toast.dismiss();

        const body = { fullName };
        if (avatar) body.avatar = await uploadToCloudinary(avatar);

        try {
            const response = await axios.post("/auth/seller/updateinfo", body);
            const data = await response.data;
            update(data?.user);
            toast.success(data.message);
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
        <Card>
            <CardHeading heading="Personal Information" desc="Use a permanent email where you can receive mail." />

            <section className="mt-8 grid items-start gap-10 lg:grid-cols-12">
                <section className="rounded-xl border lg:col-span-6 xl:col-span-5">
                    <UploadImage imageUrl={user?.avatar} setFile={setAvatar} />
                </section>

                <section className="lg:col-span-6 xl:col-span-7">
                    <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
                        <Input
                            size="lg"
                            label="Full Name"
                            name="fullName"
                            color="green"
                            defaultValue={user.fullName}
                            error={!!errors.fullName}
                            {...register("fullName")}
                        />
                        {!!errors.fullName && (
                            <span className="px-2 text-xs text-red-600">{errors.fullName?.message}</span>
                        )}

                        <Input
                            size="lg"
                            label="Email Address"
                            name="email"
                            type="email"
                            onChange={null}
                            color="green"
                            value={user.email}
                            {...register("email", {
                                required: "Please enter a valid email address!",
                            })}
                        />

                        <div className="">
                            <Button
                                size="md"
                                variant="filled"
                                color="green"
                                className="flex items-center justify-center h-11 text-sm capitalize w-52"
                                type="submit"
                            >
                                {isSubmitting && <Spinner />}
                                {!isSubmitting && "Save"}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-2">
                        <ChangePassword open={passwordModal} setOpen={setPasswordModal} />
                    </div>
                </section>
            </section>
        </Card>
    );
};
export default PersonalInfo;
