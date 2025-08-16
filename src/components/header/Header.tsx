"use client";
import { usePathname } from "next/navigation";
import Search from "./search/Search";
import Navigation from "../navigation/Navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/LoginContext";
const loginBtn =
  "flex items-center justify-center h-10 w-20 rounded border hover:bg-[var(--foreground)] hover:text-[var(--background)] border-[var(--foreground-muted)] text-[var(--foreground)] transition-all font-medium text-md cursor-pointer";

const Header = () => {
  const pathname = usePathname();
  const auth = useAuth();

  return (
    <header className="flex md:flex-row flex-col gap-5 w-full justify-between items-center px-5 py-2 border-b bg-[var(--background)] backdrop-blur supports-[backdrop-filter]:bg-background/10 sticky top-0 z-50 border-[var(--border)]">
      <div className="flex items-center justify-between w-full md:justify-start md:w-auto">
        <div className="logo-container flex flex-col items-start justify-between">
          <Link href="/" className="title text-4xl tracking-widest">
            LUMIO
          </Link>
          <p className="text-[11px] text-[var(--foreground-muted)] text-nowrap">
            Illuminate Your Shopping.
          </p>
        </div>
        {auth.isExists() ? (
          <button
            type="button"
            onClick={auth.logout}
            className={`md:hidden flex ${loginBtn}`}
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className={`md:hidden flex ${loginBtn}`}>
            Login
          </Link>
        )}
      </div>
      {pathname === "/shop" && <Search />}
      <div className="md:flex hidden w-full max-w-lg flex-grow-0 md:flex-grow-1 items-center">
        <Navigation />
        {auth.isExists() ? (
          <button
            type="button"
            onClick={auth.logout}
            className={`hidden md:flex ${loginBtn}`}
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className={`hidden md:flex ${loginBtn}`}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
