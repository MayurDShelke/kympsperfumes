"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[950px] w-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center">

      {/* Main Container - Triptych Layout */}
      <div className="relative w-full h-full flex items-center justify-center px-4 lg:px-12 pt-20">

        {/* Left Section */}
        <div className="relative flex-1 h-[85%] flex flex-col items-center justify-end pb-8 hidden md:flex">
          {/* Left Archway (Architectural) */}
          <div className="absolute inset-0 border-t-[8px] border-x-[4px] border-[#222] rounded-t-[400px] shadow-[inset_0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Inner Highlight Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500/40" />
          </div>

          {/* Left Content */}
          <div className="relative z-20 text-center mb-36 px-4">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl lg:text-6xl font-serif text-gold-500/90 leading-[0.9] uppercase tracking-tighter"
            >
              Exclusive<br />Scents.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 px-8 py-2.5 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm inline-block cursor-pointer hover:bg-gold-400 transition-all shadow-xl shadow-gold-500/10"
            >
              Collection
            </motion.div>
          </div>

          {/* Left Podium */}
          <div className="relative w-56 h-24 flex flex-col items-center">
            <div className="w-full h-10 bg-[#080808] rounded-[50%] border-t border-white/5 shadow-2xl relative z-30" />
            <div className="absolute -bottom-4 w-[85%] h-10 bg-[#040404] rounded-[50%] border-t border-white/5 z-20" />
            <div className="absolute -bottom-8 w-[70%] h-10 bg-black rounded-[50%] z-10" />
          </div>
        </div>

        {/* Central Section - Focus Arch */}
        <div className="relative w-full md:w-[45%] lg:w-[40%] h-[95%] mx-2 lg:mx-8 flex flex-col items-center justify-end pb-16 z-10">
          {/* Central Arch with Glowing Metallic Rim */}
          <div
            className="absolute inset-0 border-t-[14px] border-x-[8px] border-[#222] rounded-t-[600px] shadow-[0_0_150px_rgba(0,0,0,1)] bg-[#050505]"
            style={{
              boxShadow: '0 -25px 150px rgba(212,175,55,0.2), inset 0 50px 200px rgba(212,175,55,0.08)',
            }}
          >
            {/* Glowing inner gold rim */}
            <div className="absolute inset-0 border-t-[3px] border-x-[1px] border-gold-500/80 rounded-t-[600px] blur-[2px]" />
            <div className="absolute inset-0 border-t-[1px] border-x-[0.5px] border-gold-400 rounded-t-[600px] opacity-100" />
          </div>

          {/* Brand Name Label */}


          {/* Product Image - Scaled to fill container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-[280px] h-[380px] md:w-[420px] md:h-[580px] lg:w-[520px] lg:h-[720px] xl:w-[600px] xl:h-[820px] -mb-16"
          >
            <Image
              src="/asset/golden_ember.png"
              alt="KYMPS Golden Ember"
              fill
              priority
              className="object-contain drop-shadow-[0_80px_150px_rgba(0,0,0,1)] brightness-110 contrast-125"
            />
            {/* Expanded Cinematic Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-gold-600/15 blur-[250px] rounded-full -z-10" />

            {/* Subtle Reflection on the base of the bottle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[10%] bg-gradient-to-t from-gold-500/10 to-transparent blur-xl pointer-events-none" />
          </motion.div>

          {/* Central Podium (Stacked Thick Cylinders) */}
          <div className="relative w-full h-32 flex flex-col items-center">
            <div className="w-full h-16 bg-[#0A0A0A] rounded-[50%] border-t border-white/20 shadow-2xl relative z-30">
              {/* Edge highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1.5px] bg-gold-500/40 blur-[1px]" />
            </div>
            <div className="absolute bottom-6 w-[88%] h-16 bg-[#060606] rounded-[50%] border-t border-white/15 shadow-xl z-20" />
            <div className="absolute -bottom-2 w-[75%] h-16 bg-[#020202] rounded-[50%] border-t border-white/10 z-10" />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1 h-[85%] flex flex-col items-center justify-end pb-8 hidden md:flex">
          {/* Right Archway */}
          <div className="absolute inset-0 border-t-[8px] border-x-[4px] border-[#222] rounded-t-[400px] shadow-[inset_0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Inner Highlight Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500/40" />
          </div>

          {/* Right Content */}
          <div className="relative z-20 text-center mb-36 px-4">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl lg:text-6xl font-serif text-gold-500/90 leading-[0.9] uppercase tracking-tighter"
            >
              Exclusive<br />Scents.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 px-8 py-2.5 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm inline-block cursor-pointer hover:bg-gold-400 transition-all shadow-xl shadow-gold-500/10"
            >
              Discover
            </motion.div>
          </div>

          {/* Right Podium */}
          <div className="relative w-56 h-24 flex flex-col items-center">
            <div className="w-full h-10 bg-[#080808] rounded-[50%] border-t border-white/5 shadow-2xl relative z-30" />
            <div className="absolute -bottom-4 w-[85%] h-10 bg-[#040404] rounded-[50%] border-t border-white/5 z-20" />
            <div className="absolute -bottom-8 w-[70%] h-10 bg-black rounded-[50%] z-10" />
          </div>
        </div>

      </div>

      {/* Background Vertical Light Guides */}
      <div className="absolute top-0 left-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500/15 to-transparent hidden xl:block pointer-events-none" />
      <div className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500/15 to-transparent hidden xl:block pointer-events-none" />

      {/* Floating Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 z-30 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.6em] text-white font-light">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.div>

    </section>
  );
};
