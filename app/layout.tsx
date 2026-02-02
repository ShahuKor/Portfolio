import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shahu Kor Portfolio Website",
  description:
    "Portfolio of Shahu Kor, a developer highlighting web projects, technologies, and professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
