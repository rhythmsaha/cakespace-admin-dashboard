import NotificationSettings from "../../components/account/NotificationSettings";
import PersonalInfo from "../../components/account/PersonalInfo";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import useAuth from "../../hooks/useAuth";

function User() {
    const { user } = useAuth();

    return (
        <div>
            <PageName name="Account Settings" />

            <main className="mt-10 space-y-8">
                <PersonalInfo user={user} />
                <NotificationSettings settings={user?.notificationSettings} />
            </main>
        </div>
    );
}
export default User;

User.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
