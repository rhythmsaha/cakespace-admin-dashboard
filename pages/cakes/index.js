import DashboardLayout from "../../components/layouts/DashboardLayout";

function Cakes() {
    return <div>Cakes</div>;
}
export default Cakes;

Cakes.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
