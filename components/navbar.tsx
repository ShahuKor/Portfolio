"use client";
import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];
  return (
    <Container>
      <div className="flex items-center justify-between p-2">
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
            <Link href={item.href} key={index} className="text-sm">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};
