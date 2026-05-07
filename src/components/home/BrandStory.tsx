"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BrandStory = () => {
  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        {/* Left Side: Images Composition (Reference inspired) */}
        <div className="w-full lg:w-1/2 flex gap-6">
          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-square bg-zinc-900 border border-white/5 overflow-hidden"
            >
              <Image src="/asset/1 (1).jpg" alt="Process" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[3/4] bg-zinc-900 border border-white/5 overflow-hidden"
            >
              <Image src="/asset/3.jpg" alt="Details" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 relative aspect-[2/3] bg-zinc-900 border border-white/5 overflow-hidden self-center"
          >
            <Image src="/asset/dominus.jpg" alt="Maison" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </div>

        {/* Right Side: Editorial Content (LESETI EBY Style) */}
        <div className="w-full lg:w-1/2 pt-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif text-white tracking-[0.3em] uppercase mb-12"
          >
            L’Essence <span className="text-gold-500 italic">Rare</span>
          </motion.h2>

          <div className="space-y-12">
            {/* Paragraph 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative pl-12 border-l border-gold-500/30"
            >
              <div className="absolute left-0 top-0 w-8 h-[1px] bg-gold-500" />
              <p className="text-white/60 leading-relaxed text-sm tracking-widest font-light">
                Crafted for those who demand the impossible. Our fragrances are not merely scents, but liquid legacies captured in hand-blown crystal.
              </p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative pl-12 border-l border-white/10"
            >
              <div className="absolute left-0 top-0 w-8 h-[1px] bg-white/20" />
              <p className="text-white/60 leading-relaxed text-sm tracking-widest font-light">
                From the volcanic soil of Java to the secret gardens of Provence, we source ingredients that other houses simply cannot access.
              </p>
            </motion.div>

            {/* Paragraph 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative pl-12 border-l border-white/10"
            >
              <div className="absolute left-0 top-0 w-8 h-[1px] bg-white/20" />
              <p className="text-white/60 leading-relaxed text-sm tracking-widest font-light">
                Every bottle is a testament to the pursuit of perfection. A single drop contains a thousand years of heritage.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-20 flex gap-8"
          >
            <button className="px-12 py-4 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold-400 transition-all">
              Discover More
            </button>
            <button className="px-12 py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:border-gold-500 transition-all">
              The Atelier
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
