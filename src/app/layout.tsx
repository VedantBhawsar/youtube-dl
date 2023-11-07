import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import ThemeProvider from "@/providers/ThemeProviders";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube donwloader",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`${inter.className} justify-center `}>
        <ThemeContextProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
