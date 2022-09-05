import DashboardLayout from "../../components/Layouts/DashboardLayout";
import PageName from "../../components/PageName";

Users.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

function Users() {
    return (
        <div>
            <PageName name="Users" />
        </div>
    );
}
export default Users;
