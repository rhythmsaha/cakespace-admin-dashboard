import { useEffect, useState } from "react";

function GuestGuard({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) return;

    return <>{children}</>;
}
export default GuestGuard;
