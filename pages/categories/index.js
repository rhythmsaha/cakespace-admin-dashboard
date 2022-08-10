import DashboardLayout from "../../components/layouts/DashboardLayout";

function Categories() {
    return <div>Categories</div>;
}
export default Categories;

Categories.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
