import DashboardLayout from "../../components/layouts/DashboardLayout";
import Head from "next/head";
import PageName from "../../components/PageName";
import Button from "../../components/ui/Button";
import { MdOutlineAdd } from "react-icons/md";

function Cakes() {
    return (
        <div>
            <Head>
                <title>Cakespace - Products</title>
            </Head>

            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-4">
                <PageName name="Products" />
                <Button size="md">
                    <MdOutlineAdd className="text-2xl" /> New Product
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
