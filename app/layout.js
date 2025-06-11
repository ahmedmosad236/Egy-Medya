import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Egy-Medya",
  description: "We Drive Real Result, More Traffic, More Leads, more Growth!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/puplic/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/puplic/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/puplic/favicon.ico"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
