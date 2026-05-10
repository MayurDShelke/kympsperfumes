"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { perfumes } from "@/data/perfumes";
import { FiSearch, FiSliders } from "react-icons/fi";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Featured");

  const filteredPerfumes = useMemo(() => {
    let result = [...perfumes];

    // Search
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Newest") {
      result.reverse();
    }

    return result;
  }, [searchQuery, sortBy]);

  return (
    <main className="min-h-screen bg-luxury-black">
      <Navbar />
      
      {/* Header */}
      <div className="pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <span className="text-gold-500 uppercase tracking-[0.4em] text-[0.7rem] mb-4 block">
              The Collection
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif text-white">
              Shop <span className="italic text-gold-500">Fragrances</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <FiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-gold-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="SEARCH COLLECTION"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-b border-white/10 py-2 pl-8 pr-4 text-xs uppercase tracking-widest text-white focus:outline-none focus:border-gold-500 transition-all w-64"
              />
            </div>
            <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
              <span>Sort By:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                <option value="Featured">Featured</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        {/* Mobile Filter Toggle */}
        <button className="lg:hidden flex items-center gap-2 text-white uppercase tracking-widest text-xs border border-white/10 px-6 py-3 w-fit">
          <FiSliders size={16} />
          Filters
        </button>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <FilterSidebar />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredPerfumes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
              {filteredPerfumes.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-white/40 uppercase tracking-[0.4em] text-xs">No fragrances found matching your search</p>
            </div>
          )}
          
          {filteredPerfumes.length > 6 && (
            <div className="mt-32 flex justify-center">
              <button className="px-12 py-4 border border-white/10 text-white text-xs uppercase tracking-[0.3em] hover:border-gold-500 hover:text-gold-500 transition-all">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
