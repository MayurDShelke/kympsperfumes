"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX, FiHeart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6",
        isScrolled 
          ? "bg-black/90 backdrop-blur-xl border-b border-gold-500/10 py-3" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Left Side: Menu */}
        <div className="flex items-center gap-10">
          <button 
            className="text-white hover:text-gold-500 transition-colors flex items-center gap-3 group"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu size={20} />
            <span className="text-[10px] uppercase tracking-[0.4em] hidden md:block">Menu</span>
          </button>
          
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/shop" className="text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-gold-500 transition-colors">Boutique</Link>
            <Link href="/collections" className="text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-gold-500 transition-colors">Maison</Link>
          </div>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex flex-col items-center">
          <div className="relative w-40 h-16">
            <Image 
              src="/asset/logo (1).png" 
              alt="KYMPS Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </Link>

        {/* Right Side: Icons */}
        <div className="flex items-center gap-8 md:gap-10">
          <button className="text-white hover:text-gold-500 transition-colors hidden sm:block">
            <FiSearch size={18} strokeWidth={1.5} />
          </button>
          <button className="text-white hover:text-gold-500 transition-colors hidden sm:block">
            <FiHeart size={18} strokeWidth={1.5} />
          </button>
          <button className="text-white hover:text-gold-500 transition-colors">
            <FiUser size={18} strokeWidth={1.5} />
          </button>
          <button className="relative text-white hover:text-gold-500 transition-colors">
            <FiShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 text-[8px] font-bold text-gold-500">03</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-gold-500 transition-all hover:rotate-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiX size={32} />
            </button>

            <div className="flex flex-col items-center space-y-12">
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="text-5xl font-serif hover:text-gold-500 transition-colors">Shop All</Link>
              <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="text-5xl font-serif hover:text-gold-500 transition-colors">Collections</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-5xl font-serif hover:text-gold-500 transition-colors">The Maison</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-5xl font-serif hover:text-gold-500 transition-colors">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
