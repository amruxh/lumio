"use client"
import { createContext, useState, useContext, useEffect } from "react";

type CartItem = {
    id: number;
    length: number;
}

interface CartContextType {
    cart: CartItem[];
    isExists: (productId: number) => boolean;
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    decrementFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>([]);

    const isExists = (productId: number) => {
        return cart.some((item) => item.id === productId);
    };


    const addToCart = (id: number) => {
        if (isExists(id)) {
            setCart((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, length: item.length + 1 } : item
                )
            );
        } else {
            setCart((prev) => [...prev, { id, length: 1 }]);
        }
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const decrementFromCart = (id: number) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, length: item.length - 1 } : item
                )
                .filter((item) => item.length > 0) // remove if quantity reaches 0
        );
    };

    useEffect(() => {
        if (typeof window === "undefined") return;
        const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, isExists, addToCart, removeFromCart, clearCart, decrementFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};