"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-luxury-black border-l border-white/15 z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/15 flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-white">Shopping <span className="italic text-gold-500">Bag</span></h2>
                <p className="text-[10px] uppercase tracking-widest text-white/30">{cart.length} Items</p>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-white/40 hover:text-gold-500 transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="w-20 h-20 bg-luxury-charcoal rounded-full flex items-center justify-center border border-white/15">
                    <FiTrash2 size={32} className="text-white/10" />
                  </div>
                  <p className="text-white/40 uppercase tracking-[0.3em] text-xs">Your bag is empty</p>
                  <Link 
                    href="/shop" 
                    onClick={() => setIsCartOpen(false)}
                    className="text-gold-500 uppercase tracking-[0.3em] text-[10px] border-b border-gold-500 pb-1"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-6 group">
                    <div className="relative w-24 h-32 bg-luxury-charcoal flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-white text-sm uppercase tracking-widest mb-1">{item.name}</h3>
                          <p className="text-gold-500/60 text-[10px] uppercase tracking-widest">{item.size}</p>
                        </div>
                        <span className="text-white text-sm font-light">${item.price}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-white/25">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="p-2 text-white/40 hover:text-white"
                          >
                            <FiMinus size={12} />
                          </button>
                          <span className="px-4 text-[10px] text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="p-2 text-white/40 hover:text-white"
                          >
                            <FiPlus size={12} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-[10px] uppercase tracking-widest text-white/20 hover:text-red-500 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-white/15 space-y-6 bg-black/50">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Subtotal</span>
                  <span className="text-2xl font-serif text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-white/20 text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="w-full bg-gold-500 text-black font-bold uppercase tracking-[0.3em] py-5 hover:bg-gold-400 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
