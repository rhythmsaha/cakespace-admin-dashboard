import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import PageName from "../../../components/PageName";
import ProductForm from "../../../components/products/ProductForm";
import ProductFormSkelaton from "../../../components/products/ProductFormSkelaton";
import { fetchCategoriesAndFlavours } from "../../../store/actions/CategoriesAction";
import axios from "../../../utils/axios";

const EditProduct = () => {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const categories = useSelector((state) => state.categories.list);
    const flavours = useSelector((state) => state.flavours.list);

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAndFlavours(true));
    }, []);

    useEffect(() => {
        const fetchProduct = () => {
            setIsLoading(true);
            axios
                .get(`/products/${router.query.slug}`)
                .then((res) => {
                    setProduct(res.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                });
        };

        fetchProduct();
    }, []);

    if (isLoading) return <ProductFormSkelaton />;

    return (
        <div>
            <div className="">
                <PageName name="Edit Product" />
            </div>

            <section className="mt-8 grid w-full">
                {product && (
                    <ProductForm
                        categories={categories}
                        flavours={flavours}
                        existingImages={product.images}
                        onSubmit={() => {}}
                        product={product}
                    />
                )}
            </section>
        </div>
    );
};

export default EditProduct;

EditProduct.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
