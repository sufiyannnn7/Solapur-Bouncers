import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery1.jpeg", label: "Event Security Team" },
  { src: "/images/gallery2.jpeg", label: "Wedding Security" },
  { src: "/images/gallery3.jpeg", label: "Corporate Event" },
  { src: "/images/gallery4.jpeg", label: "Female Security Staff" },
  { src: "/images/gallery5.jpeg", label: "Traditional Event Security" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Work</h4>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12">
          Protection in <span className="gold-gradient-text">Action</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                idx === 0 || idx === 3 ? "lg:col-span-2" : ""
              }`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="w-10 h-10 text-primary mb-3 scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
                <span className="text-white font-serif text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {img.label}
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-black/50 p-2 rounded-full border border-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-primary/30 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
