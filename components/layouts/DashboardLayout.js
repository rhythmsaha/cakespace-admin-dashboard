import Header from "../Header";
import Sidebar from "../sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <section className=" flex overflow-hidden h-screen">
            <Sidebar />

            <main className="flex-1 overflow-auto relative">
                <Header />
                <section className="my-8 mx-8">{children}</section>
            </main>
        </section>
    );
};
export default DashboardLayout;
