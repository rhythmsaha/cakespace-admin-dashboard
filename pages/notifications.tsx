import DashboardLayout from "../components/layouts/DashboardLayout";

Notification.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

function Notification() {
    return <div>Notification</div>;
}
export default Notification;
