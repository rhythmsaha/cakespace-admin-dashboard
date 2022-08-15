import { useState } from "react";
import { BiKey } from "react-icons/bi";
import ChangePassword from "../../components/account/ChangePassword";
import UploadImage from "../../components/account/UploadImage";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import CheckBoxInput from "../../components/ui/CheckBoxInput";
import useAuth from "../../hooks/useAuth";

function User() {
    const [open, setOpen] = useState(false);
    const { user } = useAuth();

    return (
        <div className="">
            <PageName name="Account Settings" />

            <main className="mt-10 space-y-8">
                <section className="grid lg:grid-cols-12 gap-10 items-start bg-white shadow-card-primary p-8 rounded-2xl ">
                    <div className="lg:col-span-12">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a permanent email where you can receive mail.</p>
                    </div>

                    <section className="border space-y-4 rounded-xl lg:col-span-5 xl:col-span-4 ">
                        <UploadImage user={user} />
                    </section>

                    <section className="space-y-4 rounded-xl bg-white lg:col-span-7 xl:col-span-8">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="" className="px-1">
                                    Full Name
                                </label>
                                <input type="text" name="" id="" className="w-full rounded-lg border-gray-300" />
                            </div>

                            <div>
                                <label htmlFor="" className="px-1">
                                    Email
                                </label>
                                <input type="text" name="" id="" className="w-full rounded-lg border-gray-300" />
                            </div>

                            <button
                                type="button"
                                className="bg-primary-main hover:shadow-button-primary  active:bg-primary-dark text-white w-40 py-2 px-4 rounded-lg transition-all"
                            >
                                Save
                            </button>
                        </form>

                        <div className="mt-8">
                            <button
                                className="flex items-center gap-1 w-40 px-2 py-2 border border-error-main text-error-main hover:text-white hover:bg-error-main hover:shadow-button-primary hover:shadow-error-lighter text-sm rounded-lg transition duration-250"
                                onClick={() => setOpen(true)}
                            >
                                <BiKey className="text-xl" /> Change Password
                            </button>

                            <ChangePassword open={open} setOpen={setOpen} />
                        </div>
                    </section>
                </section>

                <section className="bg-white shadow-card-primary p-8 rounded-2xl">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications Settins</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Decide which communications you&apos;d like to receive and how.
                        </p>
                    </div>

                    <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start px-4">
                        <section className="space-y-4 rounded-xl">
                            <h2 className="mb-5 lg:text-lg font-semibold text-gray-700">By Email</h2>

                            <CheckBoxInput label="Orders" description="Get notified when someones place an order." />

                            <CheckBoxInput
                                label="Reviews"
                                description="Get notified when someones post a product review."
                            />
                            <CheckBoxInput
                                label="Low on Stock"
                                description="Get notified when items are low on stock."
                            />
                        </section>

                        <section className="space-y-4 rounded-xl">
                            <h2 className="mb-5 lg:text-lg font-semibold text-gray-700">In App Notification</h2>

                            <CheckBoxInput label="Orders" description="Get email when someones place an order." />

                            <CheckBoxInput
                                label="Reviews"
                                description="Get email when someones post a product review."
                            />
                            <CheckBoxInput label="Low on Stock" description="Get email when items are low on stock." />
                        </section>

                        <button
                            type="button"
                            className="bg-primary-main hover:shadow-button-primary active:bg-primary-dark text-white w-40 py-2 px-4 rounded-lg transition-all"
                        >
                            Save
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default User;

User.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
