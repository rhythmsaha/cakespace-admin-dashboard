import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import LoadingScreen from "../LoadingScreen";

function AuthGuard({ children }) {
    const { isAuthenticated, isInitialized } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isInitialized && !isAuthenticated) {
            router.replace("/login");
        }
    }, [isAuthenticated, isInitialized, router]);

    if (!isInitialized || !isAuthenticated) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
}
export default AuthGuard;
