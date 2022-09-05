/* eslint-disable @next/next/no-img-element */
import Axios from "axios";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import AddNewCategory from "../../components/categories/AddNewCategory";
import CategoriesTable from "../../components/categories/CategoriesTable";
import FlavoursTable from "../../components/categories/FlavoursTable";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import LoadingScreen from "../../components/LoadingScreen";
import PageName from "../../components/PageName";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import axios from "../../utils/axios";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [categoriesError, setCategoriesError] = useState(null);

    const [flavours, setFlavours] = useState([]);
    const [flavoursError, setFlavoursError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const fetchAll = useCallback(async () => {
        setIsLoading(true);
        Promise.all([
            await axios
                .get("/categories")
                .then((res) => setCategories(res.data))
                .catch((err) => {
                    setCategoriesError(err.message);
                }),
            await axios
                .get("/flavours")
                .then((res) => setFlavours(res.data))
                .catch((err) => {
                    setFlavoursError(err.message);
                }),
        ]).catch((err) => console.log(err.message));

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchAll();
    }, [fetchAll]);

    return (
        <div>
            <PageName name="Categories & Flavours" />

            <section className="w-full mt-8 space-y-8 ">
                <Card>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Categories</h3>

                        <AddNewCategory />
                    </div>

                    <CategoriesTable categories={categories} categoriesError={categoriesError} />

                    {categoriesError && <p className="text-center py-4 text-gray-500">{categoriesError}</p>}
                </Card>

                <Card>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Flavours</h3>

                        <AddNewCategory />
                    </div>

                    <FlavoursTable flavours={flavours} flavoursError={flavoursError} />

                    {flavoursError && <p className="text-center py-4 text-gray-500">{flavoursError}</p>}
                </Card>
            </section>
        </div>
    );
}
export default Categories;

Categories.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
