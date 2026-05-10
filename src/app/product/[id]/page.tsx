"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { perfumes } from "@/data/perfumes";
import { FragranceNotes } from "@/components/product/FragranceNotes";
import { ProductCard } from "@/components/ui/ProductCard";
import Image from "next/image";
import { FiStar, FiShoppingBag, FiHeart, FiShield, FiRefreshCcw, FiTruck } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("100ML");
  const { addToCart } = useCart();
  
  const product = perfumes.find((p) => p.id === params.id) || perfumes[0];
  const relatedProducts = perfumes.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-luxury-black">
      <Navbar />
      
      <div className="pt-32 lg:pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-[4/5] bg-luxury-charcoal overflow-hidden group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-luxury-charcoal border border-white/5 relative cursor-pointer hover:border-gold-500/50 transition-colors overflow-hidden">
                    <Image src={product.image} alt="" fill className="object-cover opacity-60" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="text-gold-500 uppercase tracking-[0.4em] text-xs mb-4">
                {product.brand}
              </span>
              <h1 className="text-5xl font-serif text-white mb-6">{product.name}</h1>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1 text-gold-500">
                  <FiStar size={14} fill="currentColor" />
                  <FiStar size={14} fill="currentColor" />
                  <FiStar size={14} fill="currentColor" />
                  <FiStar size={14} fill="currentColor" />
                  <FiStar size={14} fill="currentColor" />
                  <span className="text-white/40 text-xs tracking-widest ml-2">(48 REVIEWS)</span>
                </div>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-white text-xl font-light tracking-widest">${product.price}</span>
              </div>

              <p className="text-white/60 leading-relaxed font-light mb-10 text-lg">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 block">Select Size</span>
                <div className="flex gap-4">
                  {["50ML", "100ML"].map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-3 border transition-all text-xs tracking-widest ${selectedSize === size ? "border-gold-500 text-gold-500" : "border-white/10 text-white/40 hover:border-white/40"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => addToCart(product, selectedSize)}
                  className="flex-1 bg-gold-500 text-luxury-black font-bold uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-3 hover:bg-gold-400 transition-colors"
                >
                  <FiShoppingBag size={20} />
                  Add to Shopping Bag
                </button>
                <button className="p-5 border border-white/10 text-white hover:border-gold-500 transition-colors group">
                  <FiHeart size={20} className="group-hover:fill-gold-500 group-hover:text-gold-500 transition-all" />
                </button>
              </div>

              {/* Fragrance Notes */}
              <FragranceNotes notes={product.notes} />

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <FiTruck size={20} className="text-gold-500" strokeWidth={1} />
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Global Shipping</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiShield size={20} className="text-gold-500" strokeWidth={1} />
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Secure Checkout</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiRefreshCcw size={20} className="text-gold-500" strokeWidth={1} />
                  <span className="text-[10px] uppercase tracking-widest text-white/40">30 Day Returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-40">
            <div className="flex flex-col items-center mb-16">
              <span className="text-gold-500 uppercase tracking-[0.4em] text-[0.7rem] mb-4">Complete Your Collection</span>
              <h2 className="text-4xl font-serif text-white">You May Also <span className="italic text-gold-500">Love</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
