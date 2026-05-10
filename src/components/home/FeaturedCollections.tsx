"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const FeaturedCollections = () => {
  return (
    <section className="py-40 px-6 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-5xl font-serif text-gold-500 uppercase tracking-[0.3em]"
          >
            Luxury <span className="italic">Collections.</span>
          </motion.h2>
          <div className="w-20 h-[1px] bg-gold-500/30 mx-auto mt-8" />
        </div>

        {/* Collections Grid - Matching Reference Exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Block 1: Women's */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[450px] bg-[#0A0A0A] border border-white/5 p-12 flex flex-col justify-center items-center group cursor-pointer"
          >
            <div className="absolute top-8 left-8 w-8 h-8 rounded-full border border-gold-500/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold-500/40 mb-4">Maison's</p>
            <h3 className="text-4xl font-serif text-white tracking-widest group-hover:text-gold-500 transition-colors duration-700">Women's</h3>
            <div className="absolute bottom-12 w-8 h-[1px] bg-gold-500/20 group-hover:w-16 transition-all duration-700" />
          </motion.div>

          {/* Block 2: MLLS.OMS (Men's variant) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative h-[450px] bg-[#080808] border border-white/5 p-12 flex flex-col justify-center items-center group cursor-pointer"
          >
             <p className="text-[10px] uppercase tracking-[0.5em] text-gold-500/40 mb-4">MLLS.OMS</p>
             <h3 className="text-4xl font-serif text-white tracking-widest group-hover:text-gold-500 transition-colors duration-700">Women's</h3>
             <div className="absolute bottom-12 w-8 h-[1px] bg-gold-500/20 group-hover:w-16 transition-all duration-700" />
          </motion.div>

          {/* Block 3: Unisex (Cinematic) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative h-[450px] bg-black border border-white/5 overflow-hidden group cursor-pointer"
          >
            {/* Background Image (Abstract/Cinematic) */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000 grayscale group-hover:grayscale-0">
               <Image 
                src="/asset/golden_ember (1).jpg" 
                alt="Unisex Collection" 
                fill 
                className="object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="relative h-full flex flex-col justify-center items-center p-12">
               <div className="absolute top-8 left-8 w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center bg-black/40">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-gold-500/60 mb-4">Private Blend</p>
              <h3 className="text-4xl font-serif text-white tracking-widest">Unisex</h3>
            </div>
          </motion.div>

          {/* Block 4: Featured Product Shot */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[450px] bg-[#0A0A0A] border border-white/5 overflow-hidden group"
          >
            <Image 
              src="/asset/p3.jpg" 
              alt="Featured Fragrance" 
              fill 
              className="object-contain p-12 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
