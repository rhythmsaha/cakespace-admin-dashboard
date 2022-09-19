import { useState } from "react";
import { useForm, Resolver } from "react-hook-form";
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
import { Spinner } from "../ui";

interface FormValues {
    fullName: string;
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.fullName ? values : {},
        errors: !values.fullName ? { fullName: { type: "required", message: "Name is required." } } : {},
    };
};

const PersonalInfo = () => {
    const [avatar, setAvatar] = useState<File>();

    const { update, user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm({ resolver });

    const submitHandler = async ({ fullName }: { fullName: string }): Promise<void> => {
        if (isSubmitting) return;
        toast.dismiss();

        const body: { fullName: string; avatar?: File } = { fullName };
        if (avatar) body.avatar = await uploadToCloudinary(avatar);

        try {
            const response = await axios.post("/auth/seller/updateinfo", body);
            const data = await response.data;
            update(data?.user);
            toast.success(data.message);
        } catch (error) {
            if (error?.fields && error.fields.length > 0) {
                error.fields.forEach((field: { path: "fullName"; type: string; message: string }) => {
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
                            defaultValue={user.fullName}
                            error={!!errors.fullName}
                            {...register("fullName")}
                        />
                        {!!errors.fullName && (
                            <span className="px-2 text-xs text-red-600">{errors.fullName.message}</span>
                        )}

                        <Input size="lg" label="Email Address" name="email" type="email" value={user.email} readOnly />

                        <div className="">
                            <Button
                                size="md"
                                variant="filled"
                                className="flex h-11 w-52 items-center justify-center text-sm capitalize"
                                type="submit"
                            >
                                Update
                            </Button>
                        </div>
                    </form>

                    <div className="mt-2">
                        <ChangePassword />
                    </div>
                </section>
            </section>
        </Card>
    );
};
export default PersonalInfo;
