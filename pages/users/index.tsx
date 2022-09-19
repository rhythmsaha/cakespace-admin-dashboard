import DashboardLayout from "../../components/layouts/DashboardLayout";
import { PageName } from "../../components/ui";

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
