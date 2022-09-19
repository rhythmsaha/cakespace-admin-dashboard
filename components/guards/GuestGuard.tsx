import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import { LoadingScreen } from "../screens";

function GuestGuard({ children }) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.replace("/");
        }
    }, [isAuthenticated]);

    if (isAuthenticated) return <LoadingScreen />;

    return <>{children}</>;
}
export default GuestGuard;
