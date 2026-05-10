"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { perfumes } from "@/data/perfumes";

export const BestSellers = () => {
  // Get top 3 best sellers for the elite layout
  const bestSellers = perfumes.filter(p => p.isBestSeller).slice(0, 3);

  return (
    <section className="py-40 px-6 bg-[#080808] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5 }}
            className="text-2xl md:text-3xl font-serif text-gold-500 uppercase tracking-[0.5em] mb-4"
          >
            Best Sellers
          </motion.h2>
          <div className="w-16 h-[1px] bg-gold-500/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {bestSellers.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <button className="text-[10px] uppercase tracking-[0.4em] text-gold-500/60 hover:text-gold-500 transition-colors border-b border-gold-500/20 pb-2">
            View Complete Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};
