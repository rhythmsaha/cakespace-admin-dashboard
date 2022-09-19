import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import AddNewProduct from "../../components/products/AddNewProduct";
import { fetchCategoriesAndFlavours } from "../../store/actions/CategoriesAction";

const AddNew = () => {
    const dispatch = useDispatch();

    const fetchdata = useCallback(async () => {
        await dispatch(fetchCategoriesAndFlavours(true));
    }, [dispatch]);

    useEffect(() => {
        fetchdata();
    }, [fetchdata]);

    return (
        <div>
            <div className="">
                <PageName name="Create a New Product" />
            </div>

            <section className="mt-8 grid w-full">
                <AddNewProduct />
            </section>
        </div>
    );
};

AddNew.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNew;
