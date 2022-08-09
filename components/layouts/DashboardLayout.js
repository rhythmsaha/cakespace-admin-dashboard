import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Header from "../Header";
import Sidebar from "../sidebar";

const DashboardLayout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const { width } = useWindowSize();

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) return;

    return (
        <section className="flex overflow-hidden h-screen">
            {width >= 1200 && <Sidebar />}

            <main className="flex-1 overflow-auto relative">
                <Header />
                <section className="my-8 mx-8">{children}</section>
            </main>
        </section>
    );
};
export default DashboardLayout;
