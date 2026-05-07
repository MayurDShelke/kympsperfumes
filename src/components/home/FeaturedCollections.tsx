"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Women's",
    subtitle: "Maison d'Or",
    image: "/asset/femme (2).jpg",
    href: "/shop?gender=women",
  },
  {
    title: "Men's",
    subtitle: "L'Homme Noir",
    image: "/asset/dominus.jpg",
    href: "/shop?gender=men",
  },
  {
    title: "Unisex",
    subtitle: "Essence Pure",
    image: "/asset/golden_ember (1).jpg",
    href: "/shop?category=unisex",
  }
];

export const FeaturedCollections = () => {
  return (
    <section className="py-40 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-serif text-white text-center tracking-[0.2em] uppercase"
          >
            Luxury <span className="italic text-gold-500">Collections.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {collections.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href}
              className="group relative bg-black p-10 h-[500px] flex flex-col justify-between overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 block mb-4">Explore</span>
                <h3 className="text-4xl font-serif text-white tracking-widest">{item.title}</h3>
                <p className="text-sm text-white/40 mt-2 font-light italic">{item.subtitle}</p>
              </div>

              {/* Thumbnail/Image overlay style */}
              <div className="absolute bottom-10 right-10 w-48 h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Decorative Circle Icon (Ref inspired) */}
              <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500 transition-all">
                <div className="w-2 h-2 bg-gold-500 group-hover:bg-black rounded-full" />
              </div>

              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
