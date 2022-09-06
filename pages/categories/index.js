/* eslint-disable @next/next/no-img-element */
import Axios from "axios";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewCategory from "../../components/categories/AddNewCategory";
import CategoriesSkeleton from "../../components/categories/CategoriesSkeleton";
import CategoriesTable from "../../components/categories/CategoriesTable";
import FlavoursTable from "../../components/categories/FlavoursTable";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import { fetchCategoriesAndFlavours } from "../../store/actions/CategoriesAction";

function Categories() {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories.list);
    const flavours = useSelector((state) => state.flavours.list);

    const categoriesError = useSelector((state) => state.categories.error);
    const flavoursError = useSelector((state) => state.flavours.error);

    const [isLoading, setIsLoading] = useState(true);

    const fetchdata = useCallback(async () => {
        await dispatch(fetchCategoriesAndFlavours());
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        fetchdata();
    }, [dispatch, fetchdata]);

    return (
        <div>
            <PageName name="Categories & Flavours" />

            <section className="w-full mt-8 space-y-8 ">
                {isLoading && <CategoriesSkeleton />}
                {isLoading && <CategoriesSkeleton />}

                {!isLoading && <CategoriesTable categories={categories} categoriesError={categoriesError} />}
                {!isLoading && <FlavoursTable flavours={flavours} flavoursError={flavoursError} />}
            </section>
        </div>
    );
}
export default Categories;

Categories.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
