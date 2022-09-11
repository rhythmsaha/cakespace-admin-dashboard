import DashboardLayout from "../../components/layouts/DashboardLayout";

const AddNew = () => {
    return <div>AddNew</div>;
};

AddNew.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNew;
