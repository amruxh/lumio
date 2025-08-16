"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Home, User, Mail, ShoppingBasket } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const pathname = usePathname();
  const { cart } = useCart();
  const navItems = [
    { name: "Home", href: "/", icon: <Home /> },
    { name: "About", href: "/about", icon: <User /> },
    { name: "Shop", href: "/shop", icon: <ShoppingBasket /> },
    { name: "Contact", href: "/contact", icon: <Mail /> },
    { name: "Cart", href: "/cart", icon: <ShoppingCart /> },
    // { name: "Login", href: "/login", icon: <User /> },
  ];
  return (
    <nav className="flex w-full gap-5 px-3 justify-around text-[var(--foreground-muted)]">
      {navItems.map((item): React.ReactElement => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col justify-center items-center text-[10px] sm:text-xs relative ${
              isActive
                ? "text-[var(--active)]"
                : "hover:text-[var(--hover)]"
            }`}
          >
            {(item.href === '/cart' && cart.length > 0) && <span className="absolute -right-2 -top-2 h-5 w-5 flex justify-center items-center bg-yellow-500 text-black text-lg rounded-full">{cart.length}</span>}
            {item.icon}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
