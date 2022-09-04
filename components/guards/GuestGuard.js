import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import LoadingScreen from "../LoadingScreen";

function GuestGuard({ children }) {
    const router = useRouter();
    const { isAuthenticated, isInitialized } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.replace("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    if ((isInitialized, isAuthenticated)) return <LoadingScreen />;

    return <>{children}</>;
}
export default GuestGuard;
