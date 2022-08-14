import { useState } from "react";
import { BiKey } from "react-icons/bi";
import UploadImage from "../../components/account/UploadImage";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import useAuth from "../../hooks/useAuth";

function User() {
    const { user } = useAuth();

    return (
        <div className="py-4">
            <PageName name="Account Settings" />

            <main className="mt-10 space-y-8">
                <section className="grid lg:grid-cols-12 gap-8 items-start bg-white shadow-0 p-8 rounded-2xl ">
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
                                <label htmlFor="">Full Name</label>
                                <input type="text" name="" id="" className="w-full" />
                            </div>

                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" name="" id="" className="w-full" />
                            </div>

                            <button type="button" className=" bg-emerald-500 text-white py-2 px-4 w-40">
                                Save
                            </button>
                        </form>

                        <div className="mt-8">
                            <button className="text-red-400 py-1 hover:bg-red-500 hover:text-white px-2 flex items-center gap-1 text-sm rounded transition duration-250">
                                <BiKey className="text-xl" /> Change Password
                            </button>
                        </div>
                    </section>
                </section>

                <section className="grid lg:grid-cols-2 gap-8 items-start bg-white shadow-0 p-8 rounded-2xl ">
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a permanent email where you can receive mail.</p>
                    </div>

                    <section className=" space-y-4 rounded-xl ">
                        <label
                            htmlFor="remember"
                            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-900"
                        >
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                onChange={(e) => console.log(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            Remember me
                        </label>
                    </section>

                    <section className=" space-y-4 rounded-xl">
                        <label
                            htmlFor="remember"
                            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-900"
                        >
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                onChange={(e) => console.log(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            Remember me
                        </label>
                    </section>
                </section>
            </main>
        </div>
    );
}
export default User;

User.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
