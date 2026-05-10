import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import Image from "next/image";

export default function ArchivePage() {
  const archives = [
    { year: "2023", name: "The Velvet Midnight", theme: "Dark Florals & Oud", image: "/asset/p1.jpg" },
    { year: "2022", name: "Azure Solstice", theme: "Marine & Bergamot", image: "/asset/p2.jpg" },
    { year: "2021", name: "Imperial Sandalwood", theme: "Woody & Spiced", image: "/asset/4.jpg" },
    { year: "2020", name: "Silk Route", theme: "Oriental & Saffron", image: "/asset/5.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold-500 uppercase tracking-[0.6em] text-[10px] mb-6 block">Historical Collections</span>
              <h1 className="text-6xl font-serif text-white mb-6">The <span className="italic text-gold-500">Archives</span></h1>
              <p className="text-white/40 font-light text-lg">
                Explore the legacy of KYMPS through our limited edition releases and retired masterpieces. 
                A journey through time and scent.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 border-b border-white/10 pb-2">
              Viewing: All Eras
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/15">
            {archives.map((item) => (
              <div key={item.name} className="group relative bg-black p-12 lg:p-20 overflow-hidden transition-all hover:bg-luxury-charcoal">
                <div className="relative z-10 space-y-8">
                  <span className="text-gold-500/60 font-serif italic text-3xl">{item.year}</span>
                  <div className="space-y-2">
                    <h2 className="text-4xl font-serif text-white tracking-wide">{item.name}</h2>
                    <p className="text-white/30 uppercase tracking-[0.3em] text-[10px]">{item.theme}</p>
                  </div>
                  <button className="text-white text-[10px] uppercase tracking-[0.4em] border-b border-gold-500 pb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Discover Scent Story
                  </button>
                </div>
                
                {/* Reveal Image on Hover */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-0 scale-110 group-hover:opacity-20 group-hover:scale-100 transition-all duration-1000 pointer-events-none">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* Archive Request Section */}
          <div className="mt-40 text-center max-w-2xl mx-auto space-y-10">
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold-500 mx-auto" />
            <h3 className="text-3xl font-serif text-white">Looking for a <span className="italic text-gold-500">Retired Scent?</span></h3>
            <p className="text-white/40 font-light">
              Sometimes we bring back classics by popular demand. Register your interest for an archived fragrance and be the first to know about vault releases.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="flex-1 bg-transparent border border-white/10 px-8 py-5 text-[10px] tracking-widest text-white focus:outline-none focus:border-gold-500 transition-all"
              />
              <button className="px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gold-500 transition-all">
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
