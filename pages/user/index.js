import DashboardLayout from "../../components/layouts/DashboardLayout";

function User() {
    return <div>User</div>;
}
export default User;

User.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
