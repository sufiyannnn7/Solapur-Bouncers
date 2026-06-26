import { motion } from "framer-motion";
import { Star, Shield, Award } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#0d0d0d] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Command & Control</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Meet the <span className="gold-gradient-text">Leader</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(212,175,55,0.08)]"
          >
            {/* Owner photo — full natural ratio, no crop */}
            <div className="bg-[#111] flex items-end justify-center pt-8 px-8">
              <img
                src="/images/owner.jpeg"
                alt="Riyaz Shaikh — Founder & Director, Solapur Bouncers"
                className="w-full max-w-xs mx-auto object-contain"
                style={{ imageRendering: "auto" }}
              />
            </div>

            {/* Info panel */}
            <div className="bg-background p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-tr-full blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
                  Riyaz Shaikh
                </h3>
                <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-6 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Founder & Director
                </p>

                <p className="text-white/70 leading-relaxed mb-8">
                  Under the visionary leadership of <strong className="text-white">Riyaz Shaikh</strong>, SOLAPUR BOUNCERS has grown into the region's most formidable security force. With years of hands-on experience, he leads every deployment with absolute discipline, professionalism, and a commitment to client safety.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">50+</div>
                    <div className="text-primary text-[10px] uppercase tracking-widest leading-tight">Professional Guards</div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">100+</div>
                    <div className="text-primary text-[10px] uppercase tracking-widest leading-tight">Events Secured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">100%</div>
                    <div className="text-primary text-[10px] uppercase tracking-widest leading-tight">Satisfaction Rate</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Event Security", "VIP Protection", "Crowd Management", "Wedding Security"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Group photo with owner highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-xl relative"
          >
            <img
              src="/images/owner-team.jpeg"
              alt="Riyaz Shaikh with Solapur Bouncers team"
              className="w-full object-contain bg-[#111]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-1">Team Leader</p>
                <h4 className="text-white text-xl font-serif font-bold flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Riyaz Shaikh & Core Team
                </h4>
                <p className="text-white/60 text-sm mt-1">The backbone of SOLAPUR BOUNCERS — trained, disciplined, and trusted.</p>
              </div>
              <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-xl">
                <span className="text-primary text-sm font-bold uppercase tracking-widest">Est. Solapur</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
