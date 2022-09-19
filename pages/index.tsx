import DashboardLayout from "../components/layouts/DashboardLayout";

Home.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

function Home() {
    return <div></div>;
}

export default Home;
