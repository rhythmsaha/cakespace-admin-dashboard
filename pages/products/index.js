import DashboardLayout from "../../components/layouts/DashboardLayout";
import Head from "next/head";
import PageName from "../../components/PageName";
import { MdOutlineAdd } from "react-icons/md";
import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";

function Cakes() {
    const router = useRouter();

    return (
        <div>
            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-4">
                <PageName name="Products" />

                <Button onClick={() => router.push("/products/addnew")} variant="filled" size="sm" color="green">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <MdOutlineAdd className="text-xl" />
                        <span className="capitalize">New Product</span>
                    </div>
                </Button>
            </div>

            <section className="mt-8 w-full"></section>
        </div>
    );
}
export default Cakes;

Cakes.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
