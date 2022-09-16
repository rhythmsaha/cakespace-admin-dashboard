import { useEffect } from "react";

import DashboardLayout from "../../../components/layouts/DashboardLayout";
import PageName from "../../../components/PageName";
import ProductFormSkelaton from "../../../components/products/ProductFormSkelaton";

const EditProduct = () => {
    if (isLoading) return <ProductFormSkelaton />;

    return (
        <div>
            <div className="">
                <PageName name="Edit Product" />
            </div>

            <section className="mt-8 grid w-full"></section>
        </div>
    );
};
export default EditProduct;

EditProduct.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
