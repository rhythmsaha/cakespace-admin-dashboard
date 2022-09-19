import AuthGuard from "../guards/AuthGuard";
import { useWindowSize } from "react-use";
import { Header } from "../Header";
import { Sidebar } from "../sidebar";

const DashboardLayout = ({ children }) => {
    const { width } = useWindowSize();

    return (
        <AuthGuard>
            <main className="flex h-screen overflow-hidden">
                {width >= 1200 && <Sidebar />}

                <main className="relative flex-1 overflow-y-auto overflow-x-hidden">
                    <Header />
                    <section className="mx-auto mt-6 w-11/12 pb-20">{children}</section>
                </main>
            </main>
        </AuthGuard>
    );
};
export default DashboardLayout;
