import { useState } from "react";
import { BiKey } from "react-icons/bi";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import CardHeading from "./CardHeading";
import ChangePassword from "./ChangePassword";
import UploadImage from "./UploadImage";
import { useForm } from "react-hook-form";

function PersonalInfo({ user }) {
    const [passwordModal, setPasswordModal] = useState(false);
    // const [image, setImage] = useState("");
    // const [url, setUrl] = useState(user?.avatar);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError,
    } = useForm();

    const submitHandler = async ({ name, email }) => {};

    return (
        <>
            <Card>
                <CardHeading heading="Personal Information" desc="Use a permanent email where you can receive mail." />

                <section className="grid lg:grid-cols-12 gap-10 items-start mt-8  ">
                    <section className="border rounded-xl lg:col-span-6 xl:col-span-5">
                        <UploadImage user={user} />
                    </section>

                    <section className="lg:col-span-6 xl:col-span-7">
                        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
                            <Input
                                label="Full Name"
                                name="name"
                                error={errors.name?.message}
                                value={user?.fullName}
                                register={register}
                                required={{ required: "Name is required!" }}
                            />

                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                value={user?.email}
                                register={register}
                                required={{ required: "Please provide a valid email address!" }}
                                error={errors.email?.message}
                            />

                            <div className="flex gap-4">
                                <Button variant="primary" size="lg" width="10rem" type="submit">
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
