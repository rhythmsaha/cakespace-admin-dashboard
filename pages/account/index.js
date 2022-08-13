import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";

function User() {
    return (
        <div className="pt-4">
            <PageName name="Account Settings" />
        </div>
    );
}
export default User;

User.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
