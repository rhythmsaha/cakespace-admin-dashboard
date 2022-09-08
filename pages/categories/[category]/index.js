import DashboardLayout from "../../../components/layouts/DashboardLayout";

const Category = () => {
    return <div>Category</div>;
};

Category.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
export default Category;
