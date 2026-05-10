"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FiUser, FiPackage, FiHeart, FiSettings, FiLogOut, FiArrowRight, FiZap, FiTarget, FiCompass, FiPlus } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function AccountPage() {
  // Empty state for first login
  const recentOrders = [];
  const preferredNotes = [];
  
  const featuredStarts = [
    { name: "Discovery Set", price: "$45", image: "/asset/p1.jpg" },
    { name: "Sample Palette", price: "$25", image: "/asset/p2.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-40 pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* First Login Header */}
          <div className="mb-20 space-y-4">
            <span className="text-gold-500 uppercase tracking-[0.6em] text-[10px] block">New Member | Maison KYMPS</span>
            <h1 className="text-5xl sm:text-6xl font-serif text-white">Welcome to the <span className="italic text-gold-500">Maison</span></h1>
            <p className="text-white/40 text-sm font-light max-w-xl leading-relaxed">
              Your journey into the world of artisanal fragrance begins here. Complete your profile to unlock personalized recommendations and exclusive member benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1 space-y-12">
              <nav className="flex flex-col gap-6 sticky top-40">
                {[
                  { name: "Dashboard", icon: FiUser, active: true },
                  { name: "My Orders", icon: FiPackage },
                  { name: "Wishlist", icon: FiHeart },
                  { name: "Scent Profile", icon: FiCompass },
                  { name: "Settings", icon: FiSettings },
                ].map((item) => (
                  <button 
                    key={item.name} 
                    className={`flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] transition-all group ${item.active ? 'text-gold-500' : 'text-white/40 hover:text-white'}`}
                  >
                    <item.icon size={16} className={`${item.active ? 'text-gold-500' : 'text-white/20 group-hover:text-gold-500'} transition-colors`} />
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-12 mt-12 border-t border-white/15 space-y-8">
                   <div className="space-y-4">
                      <p className="text-[10px] uppercase tracking-widest text-white/30">Profile Completion</p>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[20%] bg-gold-500" />
                      </div>
                      <p className="text-[8px] uppercase tracking-widest text-gold-500/60">20% Complete</p>
                   </div>

                   <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-red-500/40 hover:text-red-500 transition-all">
                     <FiLogOut size={16} />
                     Sign Out
                   </button>
                </div>
              </nav>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-24">
              
              {/* Setup Scent Profile CTA */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="md:col-span-2 p-10 bg-luxury-charcoal/40 border border-gold-500/30 rounded-sm space-y-8 relative overflow-hidden group hover:border-gold-500/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-start relative z-10">
                       <h4 className="text-xl font-serif text-white">Initialize Your <span className="italic text-gold-500">Scent Identity</span></h4>
                       <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black">
                          <FiPlus size={20} />
                       </div>
                    </div>
                    <p className="text-white/40 text-[10px] leading-relaxed tracking-widest uppercase font-light relative z-10 max-w-md">
                      Take our olfactory assessment to discover which notes resonate with your personality. We'll curate your dashboard based on the results.
                    </p>
                    <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity">
                       <FiCompass size={180} className="translate-x-1/4 translate-y-1/4" />
                    </div>
                 </div>
                 
                 <div className="p-10 bg-luxury-charcoal/40 border border-white/15 rounded-sm flex flex-col justify-between space-y-4">
                    <span className="text-[10px] uppercase tracking-widest text-white/30">Welcome Bonus</span>
                    <div className="space-y-1">
                       <h3 className="text-4xl font-serif text-gold-500">250</h3>
                       <p className="text-[8px] uppercase tracking-widest text-white/20">KYMPS Points Earned</p>
                    </div>
                    <p className="text-[7px] uppercase tracking-widest text-white/20 leading-tight">Applied automatically for joining the Maison.</p>
                 </div>
              </div>

              {/* Empty Orders State */}
              <section className="space-y-12">
                <div className="flex justify-between items-end border-b border-white/15 pb-6">
                  <h3 className="text-3xl font-serif text-white">Recent <span className="italic text-gold-500">Activity</span></h3>
                </div>
                
                <div className="py-20 text-center space-y-8 bg-luxury-charcoal/10 border border-dashed border-white/15 rounded-sm">
                   <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                      <FiPackage size={24} className="text-white/20" />
                   </div>
                   <div className="space-y-2">
                      <p className="text-white/40 uppercase tracking-[0.4em] text-[10px]">No orders found</p>
                      <p className="text-white/20 text-[8px] uppercase tracking-widest">When you place an order, it will appear here.</p>
                   </div>
                   <Link href="/shop" className="inline-block px-10 py-4 bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-gold-500 transition-all">
                      Browse Collection
                   </Link>
                </div>
              </section>

              {/* First-time Recommendations */}
              <section className="space-y-12">
                 <div className="space-y-4">
                    <h3 className="text-3xl font-serif text-white">Start Your <span className="italic text-gold-500">Collection</span></h3>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest max-w-lg font-light">
                      New to KYMPS? We recommend starting with our signature sets to explore the breadth of our artisanal range.
                    </p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredStarts.map((rec) => (
                       <div key={rec.name} className="flex gap-8 p-8 bg-luxury-charcoal/20 border border-white/15 group hover:border-gold-500/20 transition-all cursor-pointer">
                          <div className="relative w-32 h-40 bg-luxury-charcoal overflow-hidden rounded-sm">
                             <Image src={rec.image} alt={rec.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" />
                          </div>
                          <div className="flex flex-col justify-center space-y-4 flex-1">
                             <div>
                                <h4 className="text-xl font-serif text-white">{rec.name}</h4>
                                <p className="text-[10px] uppercase tracking-widest text-white/30">{rec.price}</p>
                             </div>
                             <button className="text-[10px] uppercase tracking-[0.3em] text-gold-500 border-b border-gold-500/20 pb-1 w-fit">
                                View Details
                             </button>
                          </div>
                       </div>
                    ))}
                 </div>
              </section>

              {/* Complete Profile Section */}
              <section className="p-12 border border-white/15 bg-luxury-charcoal/20 rounded-sm">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                       <h4 className="text-2xl font-serif text-white">Complete Your <span className="italic text-gold-500">Profile</span></h4>
                       <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">
                          Add your shipping preferences and birthday to receive a bespoke gift from Alexandre Kymps during your birth month.
                       </p>
                       <button className="px-8 py-3 border border-white/10 text-white text-[9px] uppercase tracking-widest hover:border-gold-500 transition-all">
                          Edit Information
                       </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-black/40 border border-white/15 text-center space-y-2">
                          <FiTarget size={16} className="text-gold-500/40 mx-auto" />
                          <p className="text-[8px] uppercase tracking-widest text-white/30">Address</p>
                          <p className="text-[8px] uppercase tracking-widest text-red-500/40 italic">Not Set</p>
                       </div>
                       <div className="p-6 bg-black/40 border border-white/15 text-center space-y-2">
                          <FiZap size={16} className="text-gold-500/40 mx-auto" />
                          <p className="text-[8px] uppercase tracking-widest text-white/30">Payment</p>
                          <p className="text-[8px] uppercase tracking-widest text-red-500/40 italic">Not Set</p>
                       </div>
                    </div>
                 </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
