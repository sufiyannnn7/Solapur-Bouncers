import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Deshmukh",
      event: "Wedding",
      review: "Riyaz bhai and his team were absolutely professional at our wedding. The crowd was managed perfectly without any hassle. Highly recommended for family events!",
      rating: 5,
    },
    {
      name: "Amit Patil",
      event: "Corporate Event",
      review: "SOLAPUR BOUNCERS provided excellent security for our annual corporate meet. On time, disciplined, and extremely professional behavior from all guards.",
      rating: 5,
    },
    {
      name: "Sandeep Kulkarni",
      event: "Festival Organizer",
      review: "We hired them for a massive festival in Solapur. With thousands of people, their crowd management was flawless. Complete peace of mind. Will use again!",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="luxury-card bg-secondary/30 h-full border-primary/20 hover:border-primary/50">
                <CardContent className="p-8 flex flex-col h-full relative">
                  <div className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none">"</div>
                  
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 italic leading-relaxed flex-grow mb-8 text-lg">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <h5 className="font-bold text-white text-lg">{testimonial.name}</h5>
                    <p className="text-primary text-sm font-medium">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}