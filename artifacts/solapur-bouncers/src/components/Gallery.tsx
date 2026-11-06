import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery1.jpeg", label: "Event Security Team" },
  { src: "/images/gallery2.jpeg", label: "Wedding Security" },
  { src: "/images/gallery3.jpeg", label: "Corporate Event" },
  { src: "/images/gallery5.jpeg", label: "Wedding Guest Welcome" },
  { src: "/images/gallery4.jpeg", label: "Wedding Guest Welcome" },
  { src: "/images/owner-team.jpeg", label: "Director & Core Team" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Work</h4>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          Protection in <span className="gold-gradient-text">Action</span>
        </h2>
        <p className="text-white/50 mb-12 text-sm uppercase tracking-widest">Click any photo to enlarge</p>

        {/* Masonry-style grid — images keep their natural ratio */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="relative group overflow-hidden rounded-xl cursor-pointer break-inside-avoid border border-white/5 hover:border-primary/40 transition-colors duration-300"
              onClick={() => setSelectedImage(img)}
            >
              {/* Image in full natural ratio, no crop */}
              <img
                src={img.src}
                alt={img.label}
                className="w-full max-h-[50vh] object-cover block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <ZoomIn className="w-10 h-10 text-primary scale-0 group-hover:scale-100 transition-transform duration-300 delay-75" />
                <span className="text-white font-serif text-lg tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 px-4 text-center">
                  {img.label}
                </span>
              </div>

              {/* Gold border glow on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox — full image, no crop */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/97 flex flex-col items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-5 right-5 text-white hover:text-primary transition-colors bg-black/60 p-2 rounded-full border border-white/20 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-7 h-7" />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-4 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] w-auto h-auto object-contain rounded-xl border border-primary/30 shadow-[0_0_60px_rgba(212,175,55,0.12)]"
              />
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-primary/60" />
                <span className="text-primary font-serif text-lg tracking-widest uppercase">{selectedImage.label}</span>
                <div className="w-8 h-[1px] bg-primary/60" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
