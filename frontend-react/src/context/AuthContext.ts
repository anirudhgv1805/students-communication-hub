import { createContext, useContext } from "react";

export interface AuthContextType {
    isAuthenticated: boolean;
    jwtToken: string | undefined;
    login: (jwtToken: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("The AuthContext is accessed outside the Provider");
    return context;
};
