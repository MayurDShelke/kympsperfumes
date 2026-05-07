"use client";

import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiArrowUp } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col mb-8">
              <span className="text-2xl font-serif tracking-[0.3em] uppercase text-gold-500">KYMPS</span>
              <span className="text-[0.6rem] tracking-[0.5em] uppercase text-white/40">Parfums de Luxe</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-light mb-8 max-w-xs">
              Crafting olfactory masterpieces that transcend time and space. Each scent is a unique journey into the essence of luxury.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-white/40 hover:text-gold-500 transition-colors"><FiInstagram size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-white/40 hover:text-gold-500 transition-colors"><FiTwitter size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-white/40 hover:text-gold-500 transition-colors"><FiFacebook size={20} strokeWidth={1.5} /></Link>
            </div>
          </div>

          {/* Boutique Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold mb-8">The Boutique</h4>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-white/50 text-sm hover:text-gold-500 transition-colors">All Fragrances</Link></li>
              <li><Link href="/shop?category=new" className="text-white/50 text-sm hover:text-gold-500 transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop?category=best" className="text-white/50 text-sm hover:text-gold-500 transition-colors">Best Sellers</Link></li>
              <li><Link href="/discovery" className="text-white/50 text-sm hover:text-gold-500 transition-colors">Discovery Sets</Link></li>
            </ul>
          </div>

          {/* Experience Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold mb-8">Experience</h4>
            <ul className="space-y-4">
              <li><Link href="/story" className="text-white/50 text-sm hover:text-gold-500 transition-colors">Our Story</Link></li>
              <li><Link href="/artistry" className="text-white/50 text-sm hover:text-gold-500 transition-colors">The Artistry</Link></li>
              <li><Link href="/journal" className="text-white/50 text-sm hover:text-gold-500 transition-colors">Olfactory Journal</Link></li>
              <li><Link href="/stores" className="text-white/50 text-sm hover:text-gold-500 transition-colors">Boutique Finder</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold mb-8">Client Care</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-white/50 text-sm hover:text-gold-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-white/50 text-sm hover:text-gold-500 transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="text-white/50 text-sm hover:text-gold-500 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-white/50 text-sm hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[0.7rem] uppercase tracking-widest text-white/30">
            © 2024 KYMPS PARFUMS DE LUXE. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-[0.7rem] uppercase tracking-widest text-white/30 hover:text-gold-500 transition-colors group"
          >
            Back to Top
            <FiArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
