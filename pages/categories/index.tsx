/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAndFlavours } from "../../store/actions/CategoriesAction";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { PageName } from "../../components/ui";
import CategoriesSkeleton from "../../components/categories/categories/CategoriesSkeleton";
import CategoriesTable from "../../components/categories/categories/CategoriesTable";
import FlavoursTable from "../../components/categories/flavours/FlavoursTable";

function Categories() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories.list);
    const flavours = useSelector((state) => state.flavours.list);

    const categoriesError = useSelector((state) => state.categories.error);
    const flavoursError = useSelector((state) => state.flavours.error);

    const fetchdata = useCallback(async () => {
        await dispatch(fetchCategoriesAndFlavours(true));
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        fetchdata();
    }, [fetchdata]);

    return (
        <div>
            <PageName name="Categories & Flavours" />

            <section className="mt-8 w-full space-y-8 ">
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
