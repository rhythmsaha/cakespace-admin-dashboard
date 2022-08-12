import { useWindowSize } from "react-use";
import AuthGuard from "../guards/AuthGuard";
import Header from "../Header";
import Sidebar from "../sidebar";

const DashboardLayout = ({ children }) => {
    const { width } = useWindowSize();

    return (
        <AuthGuard>
            <section className="flex overflow-hidden h-screen">
                {width >= 1200 && <Sidebar />}

                <main className="flex-1 overflow-auto relative">
                    <Header />
                    <section className="my-8 mx-8">{children}</section>
                </main>
            </section>
        </AuthGuard>
    );
};
export default DashboardLayout;
