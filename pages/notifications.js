import DashboardLayout from "../components/Layouts/DashboardLayout";

Notification.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

function Notification() {
    return <div>Notification</div>;
}
export default Notification;
