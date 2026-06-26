import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-secondary/80 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Command & Control</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
            Leadership & <span className="gold-gradient-text">Our Team</span>
          </h2>
          
          <div className="bg-background border border-primary/20 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-tr-full blur-2xl"></div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Riyaz Shaikh</h3>
            <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-6">Founder & Director</p>
            
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Under the visionary leadership of Riyaz Shaikh, SOLAPUR BOUNCERS has grown into the region's most formidable security asset. We believe in proactive threat mitigation, absolute discipline, and unwavering professionalism.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-serif font-bold text-white mb-1">50+</div>
                <div className="text-primary text-xs uppercase tracking-wider">Professional Guards</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white mb-1">100+</div>
                <div className="text-primary text-xs uppercase tracking-wider">Events Secured</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white mb-1">100%</div>
                <div className="text-primary text-xs uppercase tracking-wider">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}