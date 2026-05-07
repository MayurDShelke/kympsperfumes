"use client";

import { motion } from "framer-motion";
import { FiShield, FiZap, FiPackage, FiGlobe } from "react-icons/fi";

const features = [
  {
    icon: <FiZap className="text-gold-500" size={32} strokeWidth={1} />,
    title: "Unrivaled Longevity",
    description: "Extrait de Parfum concentration ensures a scent that evolves and stays with you for 12+ hours."
  },
  {
    icon: <FiGlobe className="text-gold-500" size={32} strokeWidth={1} />,
    title: "Global Sourcing",
    description: "Ethically sourced ingredients from the most prestigious olfactory regions across the globe."
  },
  {
    icon: <FiPackage className="text-gold-500" size={32} strokeWidth={1} />,
    title: "Bespoke Packaging",
    description: "Every bottle is housed in a hand-crafted velvet-lined wooden coffer, true to its royal heritage."
  },
  {
    icon: <FiShield className="text-gold-500" size={32} strokeWidth={1} />,
    title: "Guaranteed Purity",
    description: "Certified authentic products with unique serial numbers for every piece in our collection."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 border border-white/5 hover:border-gold-500/20 transition-all hover:bg-luxury-charcoal/30 relative"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {feature.description}
              </p>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-500/0 group-hover:border-gold-500/30 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
