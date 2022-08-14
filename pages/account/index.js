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
                <section className="grid lg:grid-cols-12 gap-10 items-start bg-white shadow-0 p-8 rounded-2xl ">
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
                                className=" bg-emerald-500 text-white py-2 px-4 w-40 rounded-lg hover:bg-emerald-600 transition-all active:bg-emerald-700"
                            >
                                Save
                            </button>
                        </form>

                        <div className="mt-8">
                            <button
                                className="text-red-400 py-1 hover:bg-red-500 hover:text-white px-2 flex items-center gap-1 text-sm rounded transition duration-250"
                                onClick={() => setOpen(true)}
                            >
                                <BiKey className="text-xl" /> Change Password
                            </button>

                            <ChangePassword open={open} setOpen={setOpen} />
                        </div>
                    </section>
                </section>

                <section className="bg-white shadow-0 p-8 rounded-2xl">
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
                            className=" bg-emerald-500 text-white py-2 px-4 w-40 rounded-lg hover:bg-emerald-600 transition-all active:bg-emerald-700"
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
