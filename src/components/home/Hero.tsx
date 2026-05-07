"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black flex items-end justify-center pb-20">
      {/* Architectural Background Arches */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 lg:gap-12 px-6">
        {/* Left Arch */}
        <div className="relative w-1/4 h-[60%] border-t-[1px] border-x-[1px] border-gold-500/20 rounded-t-full opacity-40 hidden md:block self-end mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent rounded-t-full" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 block mb-2">Exclusive</span>
            <h3 className="text-xl font-serif text-white uppercase tracking-widest">Scents</h3>
          </div>
        </div>

        {/* Main Central Arch (Podium) */}
        <div className="relative w-full md:w-1/3 h-[85%] border-t-[1px] border-x-[1px] border-gold-500/40 rounded-t-full flex flex-col items-center justify-end pb-32">
          {/* Ambient Glow behind the bottle */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold-500/20 blur-[100px] rounded-full" />
          
          {/* The Podium */}
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-zinc-900 to-black border-t border-white/5 rounded-t-[50%] scale-x-125" />
          <div className="absolute bottom-4 w-[80%] h-16 bg-gradient-to-t from-zinc-900 to-black border-t border-white/5 rounded-t-[50%] scale-x-110" />

          {/* Product Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 w-64 h-80 mb-12"
          >
            <Image
              src="/asset/dominus.jpg"
              alt="Dominus Luxury Perfume"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
            />
          </motion.div>

          {/* Main Title */}
          <div className="relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold-500 uppercase tracking-[0.6em] text-[0.6rem] block mb-4"
            >
              Premium Perfume From Secret Scent
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-6xl font-serif text-white tracking-[0.2em] uppercase"
            >
              DEZEL
            </motion.h1>
          </div>
        </div>

        {/* Right Arch */}
        <div className="relative w-1/4 h-[60%] border-t-[1px] border-x-[1px] border-gold-500/20 rounded-t-full opacity-40 hidden md:block self-end mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent rounded-t-full" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 block mb-2">Private</span>
            <h3 className="text-xl font-serif text-white uppercase tracking-widest">Maison</h3>
          </div>
        </div>
      </div>

      {/* Floating Controls / Navigation */}
      <div className="relative z-20 w-full max-w-7xl px-6 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-8 pointer-events-auto">
          <div className="space-y-1">
            <div className="w-12 h-[1px] bg-gold-500" />
            <div className="w-8 h-[1px] bg-white/20" />
            <div className="w-4 h-[1px] bg-white/20" />
          </div>
        </div>
        
        <div className="flex items-center gap-12 pointer-events-auto">
          <button className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-gold-500 transition-colors">Discover</button>
          <button className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-gold-500 transition-colors">Catalog</button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[0.5rem] uppercase tracking-widest text-white">Explore</span>
        <FiChevronDown size={14} className="text-gold-500" />
      </motion.div>
    </section>
  );
};
