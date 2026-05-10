import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/asset/1 (1).jpg" 
            alt="Luxury Perfume Craftsmanship"
            fill
            className="object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="text-gold-500 uppercase tracking-[1em] text-xs mb-8 block opacity-0 animate-fade-in-up">
            Our Legacy
          </span>
          <h1 className="text-6xl sm:text-8xl font-serif text-white mb-8 leading-tight">
            The Art of <span className="italic text-gold-500">Invisibility</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            At KYMPS, we believe a fragrance is not just a scent, but a silent storyteller. 
            Crafted in the heart of artisanal heritage, each bottle captures a moment in time.
          </p>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-gold-500/0 to-gold-500" />
          <span className="text-[8px] uppercase tracking-[0.5em] text-gold-500/60">Scroll to Explore</span>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-[3/4] group">
              <div className="absolute -inset-4 border border-gold-500/40 translate-x-8 translate-y-8 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
              <Image 
                src="/asset/2.jpg"
                alt="Artisanal Process"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-gold-500 uppercase tracking-[0.4em] text-xs">The Process</span>
                <h2 className="text-4xl sm:text-5xl font-serif text-white leading-tight">
                  Born from <span className="italic text-gold-500">Nature</span>, Refined by <span className="italic">Science</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed font-light">
                  Our master perfumers travel the globe to source the rarest raw materials. From the jasmine fields of Grasse to the sandalwood forests of Mysore, every ingredient is selected for its purity and depth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-white font-serif text-2xl mb-2">18</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold-500/60">Months of Aging</p>
                </div>
                <div>
                  <h4 className="text-white font-serif text-2xl mb-2">120</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold-500/60">Raw Components</p>
                </div>
                <div>
                  <h4 className="text-white font-serif text-2xl mb-2">Hand</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold-500/60">Poured Bottles</p>
                </div>
                <div>
                  <h4 className="text-white font-serif text-2xl mb-2">Zero</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold-500/60">Synthetic Fillers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 bg-luxury-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <FiQuote className="text-gold-500 mx-auto opacity-40" size={40} />
          <h2 className="text-3xl sm:text-4xl font-serif text-white italic leading-relaxed">
            "A fragrance is like a musical composition. It has its own rhythm, its own melody, and its own soul. We don't just make perfumes; we compose memories."
          </h2>
          <div className="space-y-2">
            <span className="text-white uppercase tracking-[0.4em] text-xs block">Alexandre Kymps</span>
            <span className="text-gold-500/60 uppercase tracking-[0.2em] text-[10px]">Founder & Creative Director</span>
          </div>
        </div>
      </section>

      {/* Sustainable Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="order-2 lg:order-1">
             <span className="text-gold-500 uppercase tracking-[0.4em] text-xs mb-6 block">Our Commitment</span>
             <h2 className="text-4xl font-serif text-white mb-8">Conscious <span className="italic text-gold-500">Luxury</span></h2>
             <p className="text-white/50 text-lg leading-relaxed font-light mb-12">
               Luxury shouldn't come at the cost of the planet. Our packaging is 100% recyclable, and our sourcing practices support local communities and sustainable farming.
             </p>
             <button className="px-12 py-5 border border-gold-500/50 text-gold-500 uppercase tracking-[0.3em] text-[10px] hover:bg-gold-500 hover:text-black transition-all">
               Sustainability Report
             </button>
           </div>
           <div className="order-1 lg:order-2 relative aspect-video">
             <Image 
               src="/asset/3.jpg"
               alt="Sustainable Sourcing"
               fill
               className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
             />
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FiQuote({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-2 6-4 8z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-2 6-4 8z" />
    </svg>
  );
}
