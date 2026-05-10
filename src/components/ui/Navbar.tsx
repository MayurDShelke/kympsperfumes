"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Notes", href: "/notes" },
    { name: "About", href: "/about" },
  ];

  const rightLinks = [
    { name: "Archive", href: "/archive" },
    { name: "Account", href: "/account" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-1000",
          isScrolled 
            ? "bg-black/98 backdrop-blur-2xl border-b border-gold-500/60 py-4" 
            : "bg-transparent py-10"
        )}
      >
        <div className="max-w-[2200px] mx-auto px-6 lg:px-12 flex items-center justify-between relative h-14 lg:h-20">
          
          {/* Left Side: Empty */}
          <div className="hidden xl:block w-32" />

          {/* ABSOLUTE CENTERED BLOCK: Links + Logo + Links */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6 lg:gap-12 w-full max-w-[90%] justify-center px-4 pointer-events-none">
            
            {/* Left Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10 pointer-events-auto">
              {leftLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-[10px] uppercase tracking-[0.5em] text-white/50 hover:text-gold-500 transition-all whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Left Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-8 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent mx-2" />

            {/* Core Logo Branding */}
            <Link href="/" className="relative w-40 h-10 lg:w-56 lg:h-14 flex items-center justify-center group shrink-0 pointer-events-auto">
              <Image 
                src="/asset/logo (1).png" 
                alt="KYMPS" 
                fill 
                className="object-contain transition-all duration-700 group-hover:brightness-125"
              />
            </Link>

            {/* Right Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-8 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent mx-2" />

            {/* Right Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10 pointer-events-auto">
              {rightLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-[10px] uppercase tracking-[0.5em] text-white/50 hover:text-gold-500 transition-all whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Far Right: Utilities */}
          <div className="flex items-center justify-end gap-8 z-10 w-32">
            <button className="text-white/30 hover:text-gold-500 transition-colors hidden sm:block">
              <FiSearch size={18} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-white/30 hover:text-gold-500 transition-colors"
            >
              <FiShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[8px] font-bold text-gold-500 bg-black/50 px-1 rounded-full border border-gold-500/30">
                  {cartCount.toString().padStart(2, '0')}
                </span>
              )}
            </button>
            <button 
              className="md:hidden text-white/60"
              onClick={() => setMobileMenuOpen(true)}
            >
              <FiMenu size={24} />
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[60] flex flex-col items-center justify-center p-10"
            >
              <button 
                className="absolute top-10 right-10 text-white/40 hover:text-gold-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiX size={40} />
              </button>
              <div className="flex flex-col items-center space-y-12">
                {[...leftLinks, ...rightLinks].map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-serif text-white/90 uppercase tracking-widest hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <CartDrawer />
    </>
  );
};
