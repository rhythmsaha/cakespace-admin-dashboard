import NotificationSettings from "../../components/account/NotificationSettings";
import PersonalInfo from "../../components/account/PersonalInfo";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { PageName } from "../../components/ui";

function User() {
    return (
        <div>
            <PageName name="Account Settings" />

            <main className="mt-10 space-y-8">
                <PersonalInfo />
                <NotificationSettings />
            </main>
        </div>
    );
}
export default User;

User.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
