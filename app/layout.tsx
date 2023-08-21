import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Works from "@/components/sections/Works";
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
          <Hero />
          <Works />
          <Skills />
          <Contact />
          {children}
          <Footer />
        </ThemesProvider>
      </body>
    </html>
  );
}
