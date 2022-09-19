import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubCategories from "../../../components/categories/subcategories/SubCategories";
import SubCategorySkelaton from "../../../components/categories/subcategories/SubCategorySkelaton";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import { PageName } from "../../../components/ui";
import { fetchCategoriesAndFlavours } from "../../../store/actions/CategoriesAction";

const Category = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const dispatch = useDispatch();

    const category = useSelector((state) => state.categories.list).find((cat) => cat.slug === router.query.slug) || {
        subCategories: [],
    };

    const fetchdata = useCallback(async () => {
        setIsLoading(true);
        await dispatch(fetchCategoriesAndFlavours(true));
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        fetchdata();
    }, [dispatch, fetchdata]);

    if (isLoading) {
        return <SubCategorySkelaton />;
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <PageName name={`${category?.name}`} />
            </div>

            <section className="mt-8 lg:mt-10">
                <SubCategories category={category} />
            </section>
        </div>
    );
};

Category.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default Category;
