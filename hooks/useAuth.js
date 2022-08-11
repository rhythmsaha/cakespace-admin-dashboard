import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
    const authCtx = useContext(AuthContext);
    if (!authCtx) throw new Error("Auth context must be use inside AuthProvider");
    return context;
};

export default useAuth;
