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
import { categoriesActions } from "../../store/slice/categories.slice";
import { flavoursActions } from "../../store/slice/flavours.slice";
import { fetchCategoriesAndFlavours } from "../../store/actions/CategoriesAction";
import axios from "../../utils/axios";

function Categories() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories.list);
    const flavours = useSelector((state) => state.flavours.list);

    const categoriesError = useSelector((state) => state.categories.error);
    const flavoursError = useSelector((state) => state.flavours.error);

    const fetchAll = useCallback(async () => {
        setIsLoading(true);
        Promise.all([
            await axios
                .get("/categories")
                .then((res) => {
                    dispatch(categoriesActions.setCategories(res.data));
                })
                .catch((err) => {
                    dispatch(categoriesActions.setError(err.message));
                }),
            await axios
                .get("/flavours")
                .then((res) => setFlavours(res.data))
                .catch((err) => {
                    dispatch(flavoursActions.setError(err.message));
                }),
        ]).catch((err) => console.log(err.message));

        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        // fetchAll();
        setIsLoading(true);
        dispatch(fetchCategoriesAndFlavours());
        setIsLoading(false);
    }, [dispatch]);

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
