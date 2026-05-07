"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const Newsletter = () => {
  return (
    <section className="py-32 px-6 bg-luxury-black relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[15vw] font-serif uppercase tracking-[0.2em] whitespace-nowrap">
          The Private Club
        </span>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gold-500 uppercase tracking-[0.4em] text-[0.7rem] mb-6 block"
        >
          Exclusive Access
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-serif text-white mb-8"
        >
          Join the <span className="italic text-gold-500">Connoisseurs</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60 mb-12 font-light tracking-wide"
        >
          Subscribe to receive early access to limited edition drops, private event invitations, and olfactory stories from our master perfumers.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-md mx-auto"
        >
          <input 
            type="email" 
            placeholder="Your Email Address"
            className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/20 font-light"
          />
          <button 
            type="submit"
            className="absolute right-0 bottom-4 text-gold-500 hover:text-white transition-colors group flex items-center gap-2"
          >
            <span className="text-[0.7rem] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Submit</span>
            <FiArrowRight size={20} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};
