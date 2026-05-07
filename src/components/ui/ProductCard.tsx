"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn("group relative flex flex-col bg-zinc-950/50 border border-white/5 p-4", className)}
    >
      {/* Product Number Indicator (Reference inspired) */}
      <div className="absolute top-6 left-6 w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center z-10 bg-black/40 backdrop-blur-md">
        <span className="text-gold-500 text-[10px] font-bold">{index + 1}</span>
      </div>

      {/* Image Container with Glow */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black mb-6">
        <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 p-3 text-white/40 hover:text-gold-500 transition-colors z-20">
          <FiHeart size={18} />
        </button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500">{product.brand}</p>
          <div className="flex items-center gap-1 text-gold-500/60">
            <FiStar size={10} fill="currentColor" />
            <span className="text-[10px] text-white/40">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-serif text-white mb-2 tracking-wide group-hover:text-gold-500 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <span className="text-lg font-light tracking-widest text-white/80">${product.price}</span>
          
          <button className="flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 text-black text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-sm hover:scale-105 transition-transform">
            <FiShoppingBag size={14} />
            Add To Bag
          </button>
        </div>
      </div>

      {/* Luxury Border Glow on Hover */}
      <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};
