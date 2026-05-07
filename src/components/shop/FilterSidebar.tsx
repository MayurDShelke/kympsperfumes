"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const filters = [
  {
    name: "Brand",
    options: ["Tom Ford", "Roja Parfums", "Le Labo", "Arabian Oud", "Xerjoff"]
  },
  {
    name: "Gender",
    options: ["Men", "Women", "Unisex"]
  },
  {
    name: "Fragrance Type",
    options: ["Oriental", "Woody", "Floral", "Fresh", "Citrus"]
  },
  {
    name: "Concentration",
    options: ["Extrait de Parfum", "Eau de Parfum", "Eau de Toilette"]
  }
];

export const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState<string[]>(["Brand", "Gender"]);

  const toggleSection = (name: string) => {
    setOpenSections(prev => 
      prev.includes(name) ? prev.filter(s => s !== name) : [...prev, name]
    );
  };

  return (
    <div className="w-full lg:w-64 space-y-8">
      <div className="pb-8 border-b border-white/10">
        <h2 className="text-xl font-serif text-white uppercase tracking-widest">Filters</h2>
      </div>

      {filters.map((filter) => (
        <div key={filter.name} className="space-y-4">
          <button 
            onClick={() => toggleSection(filter.name)}
            className="flex items-center justify-between w-full text-left group"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-gold-500 transition-colors">
              {filter.name}
            </span>
            {openSections.includes(filter.name) ? (
              <FiChevronUp size={16} className="text-white/40" />
            ) : (
              <FiChevronDown size={16} className="text-white/40" />
            )}
          </button>

          <AnimatePresence>
            {openSections.includes(filter.name) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-2">
                  {filter.options.map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-white/20 group-hover:border-gold-500 transition-colors flex items-center justify-center">
                        <div className="w-2 h-2 bg-gold-500 opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                      </div>
                      <input type="checkbox" className="hidden" />
                      <span className="text-sm text-white/50 group-hover:text-white transition-colors font-light">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Price Range */}
      <div className="space-y-6 pt-4">
        <span className="text-xs uppercase tracking-[0.2em] text-white/80">Price Range</span>
        <div className="space-y-4">
          <div className="h-[2px] bg-white/10 relative">
            <div className="absolute left-0 right-0 h-full bg-gold-500" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full cursor-pointer" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full cursor-pointer" />
          </div>
          <div className="flex justify-between text-[10px] text-white/40 uppercase tracking-widest">
            <span>$100</span>
            <span>$2,000+</span>
          </div>
        </div>
      </div>
    </div>
  );
};
