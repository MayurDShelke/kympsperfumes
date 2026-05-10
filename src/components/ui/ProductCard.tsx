"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Perfume } from "@/data/perfumes";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Perfume;
  index?: number;
  className?: string;
}

export const ProductCard = ({ product, index = 0, className }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 1 }}
      className={cn("group relative flex flex-col bg-[#0A0A0A] border border-white/5 overflow-hidden", className)}
    >
      {/* Product Number Badge (Elite Style) */}
      <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center z-20 shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
        <span className="text-black text-xs font-bold font-serif">{index + 1}</span>
      </div>

      {/* Image Container with Editorial Lighting */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#111] to-[#050505]">
        {/* Cinematic Hover Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
        />
      </div>

      {/* Product Info - Minimalist Editorial */}
      <div className="p-8 text-center flex flex-col items-center flex-1">
        <p className="text-[9px] uppercase tracking-[0.5em] text-gold-500/50 mb-3">{product.brand}</p>
        <h3 className="text-xl lg:text-2xl font-serif text-white mb-4 tracking-wide group-hover:text-gold-500 transition-colors duration-500">
          {product.name}
        </h3>
        <div className="mt-auto w-12 h-[1px] bg-gold-500/20 group-hover:w-24 group-hover:bg-gold-500/50 transition-all duration-700" />
      </div>

      {/* Gold bottom border accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
      
      {/* Subtle Corner Accents */}
      <div className="absolute top-0 right-0 w-[1px] h-0 bg-gold-500/30 group-hover:h-full transition-all duration-1000 delay-100" />
      <div className="absolute top-0 right-0 w-0 h-[1px] bg-gold-500/30 group-hover:w-full transition-all duration-1000 delay-100" />
    </motion.div>
  );
};
