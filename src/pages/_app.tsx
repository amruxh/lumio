import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import type { AppProps } from "next/app";
import { CartProvider } from "@/contexts/CartContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RenderLoadingUI from "@/components/loading/RenderLoadingUI";
import { AuthProvider } from "@/contexts/LoginContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState<string | null>(null);

  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(true);
      setLoadingPage(url);
    };
    const handleComplete = () => {
      setLoading(false);
      setLoadingPage(null);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Header />
          {loading ? <RenderLoadingUI loadingPage={loadingPage} /> : <Component {...pageProps} />}
          <Footer />
        </CartProvider>
      </AuthProvider>
    </>
  )
}
