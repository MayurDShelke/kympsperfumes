import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import Image from "next/image";

export default function NotesPage() {
  const noteTypes = [
    {
      title: "Top Notes",
      subtitle: "The First Impression",
      description: "Ephemeral and bright, top notes are the first scents you perceive. Usually citrus, herbal, or light floral elements that last 5-15 minutes.",
      ingredients: ["Bergamot", "Lemon", "Lavender", "Neroli", "Basil"],
      image: "/asset/1 (1).jpg"
    },
    {
      title: "Heart Notes",
      subtitle: "The Soul of Fragrance",
      description: "Emerging as the top notes fade, heart (or middle) notes form the core identity of the perfume. These complex scents last for 20-60 minutes.",
      ingredients: ["Rose", "Jasmine", "Ylang-Ylang", "Cinnamon", "Black Pepper"],
      image: "/asset/2.jpg"
    },
    {
      title: "Base Notes",
      subtitle: "The Lasting Memory",
      description: "The foundation of the fragrance. These heavy molecules provide depth and longevity, lingering on the skin for hours or even days.",
      ingredients: ["Sandalwood", "Amber", "Vanilla", "Musk", "Patchouli"],
      image: "/asset/3.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-gold-500 uppercase tracking-[0.6em] text-[10px] mb-6 block">Fragrance Education</span>
            <h1 className="text-5xl sm:text-7xl font-serif text-white mb-8">Understanding <span className="italic text-gold-500">Olfactory Pyramid</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Fragrance is an evolution. Discover the three layers that define every KYMPS composition, 
              from the initial burst of energy to the lingering trail.
            </p>
          </div>

          <div className="space-y-40">
            {noteTypes.map((note, index) => (
              <div key={note.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
                <div className="flex-1 relative aspect-[4/5] w-full group">
                  <div className="absolute inset-0 border border-gold-500/30 -m-4 transition-transform group-hover:m-0" />
                  <Image 
                    src={note.image} 
                    alt={note.title} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                
                <div className="flex-1 space-y-10">
                  <div className="space-y-4">
                    <span className="text-gold-500 font-serif italic text-2xl">{note.subtitle}</span>
                    <h2 className="text-6xl font-serif text-white">{note.title}</h2>
                  </div>
                  
                  <p className="text-white/60 text-xl font-light leading-relaxed">
                    {note.description}
                  </p>

                  <div className="space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block">Key Ingredients</span>
                    <div className="flex flex-wrap gap-4">
                      {note.ingredients.map(ing => (
                        <span key={ing} className="px-6 py-2 border border-white/15 text-white/80 text-[10px] uppercase tracking-widest bg-white/5">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Element Placeholder */}
          <div className="mt-60 p-20 bg-luxury-charcoal border border-gold-500/30 text-center rounded-sm">
            <h3 className="text-3xl font-serif text-white mb-8">Find Your <span className="italic text-gold-500">Signature Scent</span></h3>
            <p className="text-white/40 mb-12 max-w-xl mx-auto">
              Answer a few questions about your preferences and let our olfactory experts guide you to your perfect match.
            </p>
            <button className="px-12 py-5 bg-gold-500 text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-gold-400 transition-all">
              Take the Fragrance Quiz
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
