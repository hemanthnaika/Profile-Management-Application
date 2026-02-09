import type { Metadata } from "next";
import { Roboto, Adamina } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const adamina = Adamina({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-adamina",
});

export const metadata: Metadata = {
  title: "Profile Management",
  description: "Profile Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${adamina.variable} antialiased bg-background w-full h-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
