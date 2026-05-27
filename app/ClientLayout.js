"use client";

import { useState, useEffect } from "react";
import PortfolioLoader from "../components/common/PortfolioLoader";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PortfolioLoader onComplete={() => setIsLoading(false)} />}
      {children}
    </>
  );
}
