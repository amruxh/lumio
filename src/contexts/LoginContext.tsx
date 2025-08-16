"use client"
import { createContext, useState, useContext, useEffect } from "react";

interface AuthContextType {
    creds: {
        email: string;
        password: string;
    }
    isExists: () => boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [creds, setCreds] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });

    const isExists = () => creds.email !== "" && creds.password !== "";

    const login = (email: string, password: string) => {
        setCreds({ email, password });
    };

    const logout = () => {
        setCreds({ email: "", password: "" });
    };

    useEffect(() => {
        if (typeof window === "undefined") return; // Don't run on server

        try {
            const savedCreds = JSON.parse(localStorage.getItem("creds") || "null");
            if (savedCreds?.email && savedCreds?.password) {
                setCreds(savedCreds);
            }
        } catch {
            // Ignore bad JSON
        }
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        localStorage.setItem("creds", JSON.stringify(creds));
    }, [creds]);

    return (
        <AuthContext.Provider value={{ creds, login, logout, isExists }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};