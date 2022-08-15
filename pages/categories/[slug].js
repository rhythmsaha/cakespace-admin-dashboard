import { useRouter } from "next/router";
import { useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";

Category.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

function Category() {
    const router = useRouter();

    return <div>{router.query.slug}</div>;
}

export default Category;
