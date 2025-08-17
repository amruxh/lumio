"use client"
import { createContext, useState, useContext, useEffect } from "react";

interface AuthContextType {
    isExists: boolean;
    loading: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isExists, setIsExists] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(typeof window === 'undefined') return;
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsExists(true);
        }
        setLoading(false);
    }, []);

    const login = (token: string) => {
        localStorage.setItem("authToken", token);
        setIsExists(true);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsExists(false);
    };

    return (
        <AuthContext.Provider value={{ isExists, login, logout, loading }}>
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