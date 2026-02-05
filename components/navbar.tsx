"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import { LuSunDim } from "react-icons/lu";
import { CiDark } from "react-icons/ci";

export const Navbar = () => {
  const navItems = [
    { title: "About Me", href: "/about-me" },
    { title: "Projects", href: "/projects" },
    { title: "Learnings", href: "/learnings" },
    { title: "Blog", href: "/blog" },
  ];

  const { theme, setTheme } = useTheme();

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  if (!mounted) {
    return null;
  }

  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          width: scrolled ? "55%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full px-8 py-2 backdrop-blur-sm"
      >
        <Link href={"/"}>
          <Image
            className="h-10 w-10 rounded-full"
            src="/profile.jpeg"
            alt="Shahu Profile Photo Github"
            height={40}
            width={40}
            draggable={false}
            loading="lazy"
          />
        </Link>

        <div className="flex items-center justify-center">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
        <button
          className="rounded-full border border-neutral-400/60 p-0.5"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <CiDark className="h-5 w-5 text-neutral-300" />
          ) : (
            <LuSunDim className="h-5 w-5 text-neutral-300/50" />
          )}
        </button>
      </motion.nav>
    </Container>
  );
};
