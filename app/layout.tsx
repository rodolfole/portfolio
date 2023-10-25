import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemesProvider from "@/providers/ThemesProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Rodolfo Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemesProvider>
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemesProvider>
      </body>
    </html>
  );
}
