import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Egy-Medya",
  description: "We Drive Real Result, More Traffic, More Leads, more Growth!",
  icons: {
    icon: "/images/EgyMedia-Transparent.png",
    shortcut: "/images/EgyMedia-Transparent.png",
    apple: "/images/EgyMedia-Transparent.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
