import { ReactNode, useState } from "react";
import { AuthContext, AuthContextType } from "./AuthContext";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [jwtToken, setJwtToken] = useState<string>();
    const login = (jwtToken: string) => {
        setJwtToken(() => jwtToken);
        localStorage.setItem("JWTTOKEN", jwtToken);
    };

    const logout = () => {
        setJwtToken(undefined);
        localStorage.removeItem("JWTTOKEN");
    };

    // creating a context object to send it to the authcontext provider
    const authContext: AuthContextType = {
        jwtToken: jwtToken,
        isAuthenticated: false,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};
