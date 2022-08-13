import { useState } from "react";
import UploadImage from "../../components/account/UploadImage";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import useAuth from "../../hooks/useAuth";

function User() {
    const { user } = useAuth();

    return (
        <div className="py-4">
            <PageName name="Account Settings" />

            <main className="mt-10 grid md:grid-cols-12 gap-8">
                <section className="space-y-4 h-72 shadow-0 p-6 rounded-xl bg-white md:col-span-4">
                    <h1 className="font-semibold text-gray-700">Personal Information</h1>
                    <div className="">
                        <UploadImage user={user} />
                    </div>
                </section>
                <section className="space-y-4 h-72 shadow-0 p-6 rounded-xl bg-white md:col-span-8">
                    <h1 className="font-semibold text-gray-700">Notification</h1>
                    <div className="">
                        <p className="text-[10rem] text-center text-gray-200 font-extralight">X</p>
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
