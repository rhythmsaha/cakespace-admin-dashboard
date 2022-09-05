/* eslint-disable @next/next/no-img-element */
import Axios from "axios";
import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import CategoriesTable from "../../components/categories/CategoriesTable";
import FlavoursTable from "../../components/categories/FlavoursTable";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import axios from "../../utils/axios";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [flavours, setFlavours] = useState([]);
    const [categoriesError, setCategoriesError] = useState(null);
    const [flavoursError, setFlavoursError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/categories")
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        axios
            .get("/flavours")
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <PageName name="Categories & Flavours" />

            <section className="w-full mt-8 grid 2xl:grid-cols-2 gap-x-4 gap-y-8 ">
                <Card>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Categories</h3>

                        <Button variant="primary" size="md" width="6rem">
                            Add New
                        </Button>
                    </div>

                    <CategoriesTable />
                </Card>

                <Card>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Flavours</h3>

                        <Button variant="primary" size="md" width="6rem">
                            Add New
                        </Button>
                    </div>

                    <FlavoursTable />
                </Card>
            </section>
        </div>
    );
}
export default Categories;

Categories.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
