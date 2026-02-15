import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shahu Kor | Full-Stack & Backend Developer",
  description:
    "Shahu Kor (Shahu Abhay Kor) is a full-stack and backend developer based in Dublin, specializing in Node.js, Next.js, PostgreSQL, AWS, and scalable system design. Passionate about distributed systems, backend architecture, and building production-grade web applications.",
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
