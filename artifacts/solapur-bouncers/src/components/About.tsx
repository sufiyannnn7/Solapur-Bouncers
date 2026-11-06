import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Trusted Security", desc: "Licensed & verified professionals." },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", desc: "Ready for rapid deployment." },
    { icon: <Users className="w-6 h-6" />, title: "Trained Team", desc: "Disciplined & experienced personnel." },
    { icon: <Award className="w-6 h-6" />, title: "Premium Service", desc: "Discreet and high-end protection." },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">About Us</h4>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                The Elite Standard in <span className="gold-gradient-text">Protection</span>
              </h2>
              <p className="text-[15px] sm:text-lg text-white/90 leading-relaxed">
                SOLAPUR BOUNCERS is Solapur's most trusted security agency. We provide a disciplined, highly trained, and professional team for all types of events.
              </p>
              <p className="text-[15px] sm:text-lg text-white/90 leading-relaxed mt-4">
                Led by <strong className="text-white">Riyaz Shaikh</strong>, our agency is committed to ensuring absolute safety with professionalism, punctuality, and reliability. Whether it's a high-profile VIP visit, a grand wedding, or massive crowd management, our presence guarantees peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm sm:text-base mb-1">{feature.title}</h5>
                    <p className="text-[11px] sm:text-sm text-white/60 leading-tight">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-40 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
              {/* Full natural ratio — no crop */}
              <img
                src="/images/owner-team.jpeg"
                alt="Riyaz Shaikh with Solapur Bouncers Team"
                className="responsive-img rounded-xl block"
              />
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="relative sm:absolute bg-[#151515] sm:bg-transparent bottom-0 left-0 right-0 p-4 sm:bottom-5 sm:left-5 border-t sm:border-none border-white/5">
                <div className="bg-background/80 backdrop-blur-md border border-primary/20 px-4 py-3 rounded-xl inline-flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-primary font-bold text-lg font-serif leading-none">Riyaz Shaikh</div>
                    <div className="text-white/60 text-xs uppercase tracking-widest mt-0.5">Founder & Director</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
