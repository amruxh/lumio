"use client"
import Link from "next/link";
import Navigation from "../navigation/Navigation";

const Footer = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="flex md:hidden w-full flex-grow-0 md:flex-grow-1 fixed bottom-0 py-3 bg-[var(--background)] border-t border-t-[var(--border)]">
        <Navigation />
      </div>
      <footer className="bg-[var(--background)] text-[var(--foreground)] px-5 py-10 mt-12 border-t border-[var(--border)] transition-all duration-300">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-8">
          {/* Brand */}
          <div className="min-w-[220px] flex-1">
            <h2 className="text-[1.6rem] text-[var(--foreground)] uppercase tracking-wider mb-2">
              LUMIO
            </h2>
            <p className="text-sm text-[var(--foreground-muted)]">
              Illuminate Your Shopping.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-[180px] flex-1">
            <h4 className="mb-2 text-[var(--foreground)] text-base font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index+item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-[var(--foreground)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-[180px] flex-1">
            <h4 className="mb-2 text-[var(--foreground)] text-base font-semibold">
              Contact
            </h4>
            <p className="text-sm text-[var(--foreground-muted)]">
              Email: support@lumio.com
            </p>
            <p className="text-sm text-[var(--foreground-muted)]">
              Phone: +91 98765 43210
            </p>
            <p className="text-sm text-[var(--foreground-muted)]">
              Location: Kerala, India
            </p>
          </div>
        </div>

        <div className="text-center pt-5 mt-8 text-xs text-[var(--foreground-muted)] border-t border-[var(--border)]">
          &copy; {new Date().getFullYear()} LUMIO. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
