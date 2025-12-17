"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //Controls whether the preloader is visible
  const [isLoading, setIsLoading] = useState(true);

  // Listen for custom event fired by Preloader
  useEffect(() => {
    const handleComplete = () => setIsLoading(false);
    document.addEventListener("preloaderComplete", handleComplete);

    return () => {
      document.removeEventListener("preloaderComplete", handleComplete);
    };
  }, []);

  return (
    <>
      {/* Show preloader until loading completes */}
      {isLoading && <Preloader />}

      {/* Main layout rendered after preloader */}
      {!isLoading && (
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
