import DashboardLayout from "../../components/layouts/DashboardLayout";
import { PageName } from "../../components/ui";
import { MdOutlineAdd } from "react-icons/md";
import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import ProductsTable from "../../components/products/ProductsTable";

function Cakes() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const router = useRouter();

    useEffect(() => {
        const fetchProducts = () => {
            setIsLoading(true);
            axios
                .get("/products")
                .then((res) => {
                    setProducts(res.data.products);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    console.log(err);
                });
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <PageName name="Products" />

                <Button onClick={() => router.push("/products/addnew")} variant="filled" size="sm" color="green">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <MdOutlineAdd className="text-xl" />
                        <span className="capitalize">New Product</span>
                    </div>
                </Button>
            </div>

            <section className="mt-10 w-full">
                <ProductsTable products={products} />
            </section>
        </div>
    );
}
export default Cakes;

Cakes.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
