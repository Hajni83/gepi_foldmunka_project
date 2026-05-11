"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Rólunk", href: "#rolunk" },
  { name: "Szolgáltatások", href: "#szolgaltatasok" },
  { name: "Referenciák", href: "#referenciak" },
  { name: "Kapcsolat", href: "#kapcsolat" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass-dark py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/assets/logo.png"
              alt="Gepi Foldmunka Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold text-lg md:text-xl tracking-tighter uppercase">
            GÉPI <span className="text-industrial-yellow">FÖLDMUNKA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-industrial-yellow transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#kapcsolat"
            className="bg-industrial-yellow text-black px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-yellow-500 transition-all transform hover:scale-105"
          >
            Ajánlatkérés
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 md:hidden flex flex-col p-6 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-white uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#kapcsolat"
              onClick={() => setIsOpen(false)}
              className="bg-industrial-yellow text-black text-center py-4 rounded-sm font-bold text-lg uppercase tracking-widest"
            >
              Ajánlatkérés
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
