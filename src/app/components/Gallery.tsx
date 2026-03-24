import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import artwork1 from "../assets/363cd6de4e6f4a1aa2572a947d8876e01eacf296.png";
import artwork2 from "../assets/29f640e7fb2c438c24ecb473de6cac56e20addc1.png";
import artwork3 from "../assets/e026077a58300885667696daa13c5336dd449756.png";
import artwork4 from "../assets/914c2df689d5e4c2afda1e661caf5f07fb6ca825.png";
import artwork5 from "../assets/7c0497285d5e49b16379de41f0b4b2ac86e3e1cf.png";
import artwork6 from "../assets/da4451f558ed27cf86f5bc811f29c12509bed296.png";
import artwork7 from "../assets/14f114781e164a3a0ab10bb15a56b7ceb6255a21.png";
import artwork8 from "../assets/84e29024627a6b15698f56e69c3ddf655671e199.png";
import artwork9 from "../assets/60b920f5149ec5e4e0ee8efdbcd65be2c756303e.png";
import artwork10 from "../assets/69e004c38c2f17f783d4fb10a9529f24d2fed345.png";
import artwork11 from "../assets/adcabf3405499f19d6f9b0fe44f6df9c5a3ad3c4.png";
import artwork12 from "../assets/28b6df5b62297a0416492ab06f05593aa1569d16.png";
import artwork13 from "../assets/a287fe91e871a800eaa4ac8c6e3d9f5d53eea1da.png";
import artwork14 from "../assets/3dc23cceb8773c220b11fddd5150b04e1a788e10.png";
import artwork15 from "../assets/ddd4bad091f497a7cd594fe552c689deecba84fa.png";
import sculpture1 from "../assets/d6b9e17735fb63f37eb0fc13f212c217739bda81.png";
import sculpture2 from "../assets/e236d729606479fbc8cd525bec70dbac1e0b297f.png";
import sculpture3 from "../assets/e76bc88dd7ad8a880cfddb44c2bcb4bbbe273437.png";

interface Artwork {
  id: number;
  title: string;
  medium: string;
  year: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  additionalImages?: string[];
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Pressure",
    medium: "Charcoal",
    year: "2025",
    dimensions: "18\" × 24\"",
    description: "A diptych exploring the duality of human emotion and expression through intimate portraiture.",
    imageUrl: artwork1
  },
  {
    id: 2,
    title: "I'm Her",
    medium: "Acrylic on Canvas",
    year: "2025",
    dimensions: "24\" × 30\"",
    description: "A vibrant exploration of identity and self-expression through bold color and dynamic composition.",
    imageUrl: artwork2
  },
  {
    id: 3,
    title: "What's In a Face",
    medium: "Charcoal",
    year: "2026",
    dimensions: "18\" × 24\"",
    description: "An introspective piece capturing the weight of expectations and the beauty of perseverance.",
    imageUrl: artwork3
  },
  {
    id: 4,
    title: "The Artist at Work",
    medium: "Charcoal",
    year: "2025",
    dimensions: "18\" × 24\"",
    description: "A self-reflective portrait capturing the intimate process of artistic creation and personal exploration.",
    imageUrl: artwork4
  },
  {
    id: 5,
    title: "Moment of Joy",
    medium: "Charcoal",
    year: "2025",
    dimensions: "16\" × 20\"",
    description: "A portrait study celebrating authenticity and the power of genuine self-expression.",
    imageUrl: artwork5
  },
  {
    id: 6,
    title: "Fabric Study",
    medium: "Charcoal",
    year: "2025",
    dimensions: "18\" × 24\"",
    description: "An exploration of light, shadow, and texture through the delicate rendering of draped fabric.",
    imageUrl: artwork6
  },
  {
    id: 7,
    title: "Untitled (Identity Series)",
    medium: "Charcoal",
    year: "2025",
    dimensions: "18\" × 24\"",
    description: "A contemplative piece examining the concept of self and the spaces we inhabit between visibility and anonymity.",
    imageUrl: artwork7
  },
  {
    id: 8,
    title: "Looking Upward",
    medium: "Charcoal",
    year: "2025",
    dimensions: "18\" × 24\"",
    description: "A powerful portrait capturing a moment of aspiration, hope, and reaching toward possibility.",
    imageUrl: artwork8
  },
  {
    id: 9,
    title: "Pound Cake",
    medium: "Mixed Media Collage",
    year: "2025",
    dimensions: "18\" × 24\"",
    description: "A creative exploration blending visual art with everyday life, presenting a family recipe through artistic illustration and collage techniques.",
    imageUrl: artwork9
  },
  {
    id: 10,
    title: "Fragmented Self",
    medium: "Mixed Media with Fabric",
    year: "2025",
    dimensions: "22\" × 28\"",
    description: "An experimental mixed media piece incorporating collage, charcoal, and dimensional fabric elements to explore themes of identity, fragmentation, and the multifaceted nature of self.",
    imageUrl: artwork10
  },
  {
    id: 11,
    title: "Still Life Study",
    medium: "Acrylic on Canvas",
    year: "2025",
    dimensions: "16\" × 20\"",
    description: "A classical still life rendered in monochromatic tones, demonstrating technical skill in depicting light, form, and composition.",
    imageUrl: artwork11
  },
  {
    id: 12,
    title: "Oriental Vessel",
    medium: "Acrylic on Canvas",
    year: "2025",
    dimensions: "16\" × 20\"",
    description: "A vibrant still life study featuring an ornate decorative jar with warm, expressive colors and bold brushwork.",
    imageUrl: artwork12
  },
  {
    id: 13,
    title: "Two Hearts",
    medium: "Linocut Print",
    year: "2025",
    dimensions: "12\" × 14\"",
    description: "A striking two-color reduction print depicting anatomical hearts, exploring themes of life, connection, and vulnerability through printmaking.",
    imageUrl: artwork13
  },
  {
    id: 14,
    title: "Glass Vessels",
    medium: "Pastel on Paper",
    year: "2025",
    dimensions: "14\" × 18\"",
    description: "A colorful still life capturing the translucent beauty of glass bottles and vessels through vibrant pastel work and careful attention to light and color.",
    imageUrl: artwork14
  },
  {
    id: 15,
    title: "Chasin Ghosts",
    medium: "Mixed Media on Canvas",
    year: "2026",
    dimensions: "16\" × 20\"",
    description: "A powerful contemporary piece combining acrylic painting with collaged sketches and handwritten text, exploring themes of time, identity, and personal narrative through bold color and layered imagery.",
    imageUrl: artwork15
  },
  {
    id: 16,
    title: "Crowned in Grace",
    medium: "Ceramic Sculpture",
    year: "2026",
    dimensions: "10\" × 8\" × 8\"",
    description: "A stunning three-dimensional ceramic sculpture celebrating Black femininity, strength, and beauty. The figure, adorned with a golden crown and surrounded by delicate floral elements, captures a moment of aspiration and regal poise. This piece demonstrates advanced sculptural techniques in form, texture, and dimensional composition.",
    imageUrl: sculpture1,
    additionalImages: [sculpture2, sculpture3]
  },
];

export function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div className="pt-16 bg-[#FAFAF8]">
      {/* Header */}
      <section className="py-20 px-6 border-b border-white/10 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6 block">Portfolio</span>
          <h1 className="text-6xl md:text-7xl text-white mb-8 font-light tracking-tight">Gallery</h1>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg text-white/70 leading-relaxed font-light">
            A curated collection of works showcasing technical mastery,<br className="hidden md:block" /> emotional depth, and creative vision.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-900 mb-6">
                  <ImageWithFallback
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl text-gray-900 mb-2 font-light">{artwork.title}</h3>
                  <p className="text-sm text-gray-500 tracking-wide">{artwork.medium}</p>
                  <p className="text-xs text-gray-400 mt-1">{artwork.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedArtwork(null)}
        >
          <button
            onClick={() => setSelectedArtwork(null)}
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square overflow-hidden bg-black">
              <ImageWithFallback
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-5xl mb-2 font-light tracking-tight">{selectedArtwork.title}</h2>
                <div className="w-16 h-px bg-[#D4AF37] my-6"></div>
              </div>
              
              <div className="space-y-3 text-white/70 text-lg font-light">
                <p className="tracking-wide">{selectedArtwork.medium}</p>
                <p className="tracking-wide">{selectedArtwork.dimensions}</p>
                <p className="tracking-wide">{selectedArtwork.year}</p>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/60 leading-relaxed text-lg font-light">
                  {selectedArtwork.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
