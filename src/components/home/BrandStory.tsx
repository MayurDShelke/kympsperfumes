"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BrandStory = () => {
  return (
    <section className="py-40 px-6 bg-[#080808]">
      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-12 lg:gap-20 items-stretch">
        
        {/* Left Side: Large Vertical Showcase */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full xl:w-1/3 relative aspect-[3/4] xl:aspect-auto bg-[#0A0A0A] border border-white/5 overflow-hidden group"
        >
          <Image 
            src="/asset/dominus.jpg" 
            alt="Editorial Showcase" 
            fill 
            className="object-contain p-12 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
          
          {/* Bottom Label (Reference inspired) */}
          <div className="absolute bottom-10 left-10">
            <div className="w-12 h-[1px] bg-gold-500 mb-4" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/60">Signature Collection</p>
          </div>
        </motion.div>

        {/* Middle: Secondary Imagery & Metadata */}
        <div className="w-full xl:w-1/4 flex flex-col gap-12">
          
          {/* Top Metadata Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-square bg-[#0A0A0A] border border-white/5 overflow-hidden group">
               <Image 
                src="/asset/p1.jpg" 
                alt="Process Details" 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
               />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold-500/40" />
                <span className="text-[9px] uppercase tracking-[0.5em] text-gold-500/80">Essence Rare</span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 leading-relaxed font-serif">
                RARE. EXOTIC. DISTINCTIVE.<br/>A LEGACY IN EVERY DROP.
              </p>
            </div>
          </motion.div>

          {/* Bottom Metadata Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-square bg-[#0A0A0A] border border-white/5 overflow-hidden group">
               <Image 
                src="/asset/p2.jpg" 
                alt="Craftsmanship" 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
               />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold-500/40" />
                <span className="text-[9px] uppercase tracking-[0.5em] text-gold-500/80">Maison De Luxe</span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 leading-relaxed font-serif">
                CRAFTED FOR THOSE WHO<br/>DEMAND THE IMPOSSIBLE.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Editorial Narrative */}
        <div className="w-full xl:w-1/3 flex flex-col justify-center pt-12 xl:pt-0">
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
            className="text-4xl lg:text-5xl font-serif text-white uppercase mb-16 tracking-[0.4em]"
          >
            LESETI EBY
          </motion.h2>

          <div className="space-y-12">
            {[
              "Crafted for those who demand the impossible. Our fragrances are not merely scents, but liquid legacies captured in hand-blown crystal.",
              "From the volcanic soil of Java to the secret gardens of Provence, we source ingredients that other houses simply cannot access.",
              "Every bottle is a testament to the pursuit of perfection. A single drop contains a thousand years of heritage."
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-12 border-l border-gold-500/20 py-1"
              >
                <div className="absolute left-0 top-0 w-8 h-[1px] bg-gold-500/40" />
                <p className="text-white/60 leading-relaxed text-[13px] tracking-widest font-light">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex flex-wrap gap-8"
          >
            <button className="px-14 py-4 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gold-400 transition-all shadow-xl shadow-gold-500/10">
              Buy Now
            </button>
            <button className="px-14 py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:border-gold-500 transition-all">
              Explore
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
