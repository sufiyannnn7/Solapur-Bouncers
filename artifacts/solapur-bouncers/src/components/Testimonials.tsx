import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Deshmukh",
      event: "Wedding",
      review: "Absolutely professional at our wedding. Crowd was managed perfectly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patil",
      event: "Corporate Event",
      review: "Excellent security for our corporate meet. On time, disciplined, and extremely professional.",
      rating: 4.5,
    },
    {
      name: "Sandeep Kulkarni",
      event: "Festival Organizer",
      review: "Flawless crowd management for a massive festival. Complete peace of mind. Will use again!",
      rating: 4,
    },
    {
      name: "Vikram Singh",
      event: "VIP Protection",
      review: "Best bouncer service in Solapur. Provided VIP protection with utmost discretion and safety.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Client Reviews</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Trusted by <span className="gold-gradient-text">Solapur</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="luxury-card bg-[#1A1A1A] h-full border-white/5 hover:border-white/10">
                <CardContent className="p-4 sm:p-5 flex flex-col h-full">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-[#d93025] flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm sm:text-base leading-tight">{testimonial.name}</h5>
                        <p className="text-white/50 text-[11px] sm:text-xs mt-0.5">{testimonial.event}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 pt-1">
                      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#fbbc04] text-[#fbbc04]" />
                      ))}
                      {testimonial.rating % 1 !== 0 && (
                        <StarHalf className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#fbbc04] text-[#fbbc04]" />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed flex-grow text-sm">
                    "{testimonial.review}"
                  </p>
                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}