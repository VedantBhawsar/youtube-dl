"use client";
import { ThemeContext, ThemeContextType } from "@/contexts/ThemeContext";
import { ReactNode, useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }: ReactNode | any) => {
  const { theme }: any = useContext<ThemeContextType | undefined>(ThemeContext);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
