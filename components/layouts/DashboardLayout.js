import { useWindowSize } from "react-use";
import AuthGuard from "../guards/AuthGuard";
import Header from "../Header";
import Sidebar from "../Sidebar";

const DashboardLayout = ({ children }) => {
    const { width } = useWindowSize();

    return (
        <AuthGuard>
            <main className="flex h-screen overflow-hidden">
                {width >= 1200 && <Sidebar />}

                <main className="relative flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <section className="w-11/12 mx-auto pb-20 mt-6">{children}</section>
                </main>
            </main>
        </AuthGuard>
    );
};
export default DashboardLayout;
