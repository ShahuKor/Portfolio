"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export const Navbar = () => {
  const navItems = [
    { title: "Projects", href: "/projects" },
    { title: "Experiments", href: "/experiments" },
    { title: "Blog", href: "/blog" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

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
        <Image
          className="h-10 w-10 rounded-full"
          src="/profile.jpeg"
          alt="Shahu Profile Photo Github"
          height={40}
          width={40}
          draggable={false}
          loading="lazy"
        />
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
      </motion.nav>
    </Container>
  );
};
