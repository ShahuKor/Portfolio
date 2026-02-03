import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "next-themes";

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
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} antialiased dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
