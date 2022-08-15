import { useState } from "react";
import { BiKey } from "react-icons/bi";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import CardHeading from "./CardHeading";
import ChangePassword from "./ChangePassword";
import UploadImage from "./UploadImage";

function PersonalInfo({ user }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card>
                <CardHeading heading="Personal Information" desc="Use a permanent email where you can receive mail." />

                <section className="grid lg:grid-cols-12 gap-10 items-start mt-8  ">
                    <section className="border rounded-xl lg:col-span-6 xl:col-span-5">
                        <UploadImage user={user} />
                    </section>

                    <section className="lg:col-span-6 xl:col-span-7">
                        <form className="space-y-4 ">
                            <Input label="First Name" />
                            <Input label="Email" type="email" />

                            <div className="flex gap-4">
                                <Button variant="primary" size="lg" width="10rem">
                                    Save
                                </Button>
                                <Button variant="error-outlined" size="md" onClick={() => setOpen(true)}>
                                    <BiKey className="text-xl" /> Change Password
                                </Button>
                            </div>
                        </form>
                    </section>
                </section>
            </Card>

            <ChangePassword open={open} setOpen={setOpen} />
        </>
    );
}
export default PersonalInfo;
