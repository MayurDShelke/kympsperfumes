"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { perfumes } from "@/data/perfumes";

export const BestSellers = () => {
  const bestSellers = perfumes.filter(p => p.isBestSeller);

  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold-500 uppercase tracking-[0.4em] text-[0.7rem] mb-4 block"
            >
              Customer Favorites
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-serif text-white"
            >
              The <span className="italic text-gold-500">Best Sellers</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button className="text-sm uppercase tracking-widest text-white/60 hover:text-gold-500 transition-colors flex items-center gap-2 group">
              View All Best Sellers
              <span className="w-8 h-[1px] bg-white/20 group-hover:bg-gold-500 transition-colors" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
