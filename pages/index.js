import DashboardLayout from "../components/Layouts/DashboardLayout";

Home.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

function Home() {
    return (
        <>
            <div>Hello World</div>
        </>
    );
}

export default Home;
