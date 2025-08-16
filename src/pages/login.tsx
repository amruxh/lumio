"use client";

import { useAuth } from "@/contexts/LoginContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const authenticate = (e: React.FormEvent) => {
    e.preventDefault();
    const email = creds.email.trim();
    const password = creds.password.trim();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    login(email, password);
    router.back();
  };

  return (
    <section className="login h-[85vh] flex items-center justify-center">
      <form
        onSubmit={authenticate}
        className="flex flex-col gap-8 items-center w-full max-w-md px-6 py-12 rounded-2xl bg-[var(--card-background)] border border-[var(--border)]"
      >
        <h1 className="text-3xl font-semibold">Login</h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="relative w-full">
          <input
            type="text"
            id="email"
            autoComplete="off"
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
            className="peer w-full h-14 px-4 pt-5 text-base bg-transparent border border-[var(--border)] rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500 px-1"
          >
            Enter your email
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="password"
            id="password"
            autoComplete="off"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            className="peer w-full h-14 px-4 pt-5 text-base bg-transparent border border-[var(--border)] rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500 px-1"
          >
            Enter your password
          </label>
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:bg-[var(--foreground)]/50 transition-all font-medium text-lg cursor-pointer"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
