import Head from "next/head";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import AddNewProduct from "../../components/products/AddNewProduct";

const AddNew = () => {
    return (
        <div>
            <Head>
                <title>Create New Product</title>
            </Head>

            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-4">
                <PageName name="Create a New Product" />
            </div>

            <section className="mt-8 w-full grid">
                <AddNewProduct />
            </section>
        </div>
    );
};

AddNew.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNew;
