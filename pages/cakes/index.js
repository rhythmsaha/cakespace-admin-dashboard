import DashboardLayout from "../../components/layouts/DashboardLayout";
import Head from "next/head";

function Cakes() {
    return (
        <div>
            <Head>
                <title>Cakespace - Cakes</title>
            </Head>
            Cakes
        </div>
    );
}
export default Cakes;

Cakes.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
