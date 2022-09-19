import { createContext, useEffect, useReducer } from "react";
import UserTypes from "../types/user";
import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt";

interface AuthContextType {
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: UserTypes;
    login: (JWT_TOKEN: string, user: UserTypes) => void;
    logout: () => void;
    update: (user: UserTypes) => void;
}

interface AuthStateType {
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: UserTypes | null;
}

interface PayloadType {
    isAuthenticated?: boolean;
    user?: UserTypes;
}

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

type ActionType =
    | { type: "INITIALIZE"; payload: PayloadType }
    | { type: "LOGIN"; payload: PayloadType }
    | { type: "LOGOUT"; payload?: PayloadType };

const handlers = {
    INITIALIZE: (state: AuthStateType, action: ActionType): AuthStateType => {
        const { isAuthenticated, user } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },

    LOGIN: (state: AuthStateType, action: ActionType): AuthStateType => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },

    LOGOUT: (state: AuthStateType): AuthStateType => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
};

const reducer = (state: AuthStateType, action: ActionType) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext<AuthContextType>({
    ...initialState,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    update: () => Promise.resolve(),
});

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const initialize = async () => {
            try {
                const accessToken = window.localStorage.getItem("accessToken");

                if (accessToken && isValidToken(accessToken)) {
                    const response = await axios.get("/auth/seller/me", {
                        headers: {
                            Authorization: "Bearer " + accessToken,
                        },
                    });
                    const { user, JWT_TOKEN } = response.data;

                    setSession(JWT_TOKEN);

                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    });
                } else {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: "INITIALIZE",
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };

        initialize();
    }, []);

    const login = async (JWT_TOKEN: string, user: UserTypes) => {
        setSession(JWT_TOKEN);
        dispatch({ type: "LOGIN", payload: { user } });
    };

    const update = (user) => {
        dispatch({
            type: "INITIALIZE",
            payload: {
                isAuthenticated: true,
                user,
            },
        });
    };

    const logout = async () => {
        setSession(null);
        dispatch({ type: "LOGOUT" });
    };

    return <AuthContext.Provider value={{ ...state, login, logout, update }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
export { AuthContext };
