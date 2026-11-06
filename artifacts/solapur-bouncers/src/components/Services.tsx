import { motion } from "framer-motion";
import { 
  ShieldCheck, Music, Users, Briefcase, 
  Building, Tent, UserCheck, Star, 
  Mic, Flag, MapPin, Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: <Music />, title: "Event Security", desc: "Comprehensive protection for private and public gatherings." },
  { icon: <MapPin />, title: "Wedding Guest Welcome Services", desc: "Warm, professional greetings and access management for your esteemed guests." },
  { icon: <Users />, title: "Wedding Security", desc: "Discreet and respectful security for your special day." },
  { icon: <Star />, title: "VIP Protection", desc: "Elite close-protection services for high-profile individuals." },
  { icon: <Briefcase />, title: "Corporate Security", desc: "Professional guarding for AGMs, offices, and corporate events." },
  { icon: <UserCheck />, title: "Personal Security", desc: "Dedicated bodyguards tailored to your personal safety needs." },
  { icon: <Building />, title: "Hotel Security", desc: "24/7 protection for hospitality venues and guests." },
  { icon: <Tent />, title: "Festival Security", desc: "Large-scale perimeter and access control." },
  { icon: <ShieldCheck />, title: "Crowd Management", desc: "Expert handling of large crowds to prevent incidents." },
  { icon: <Zap />, title: "Celebrity Security", desc: "Specialized protection details for public figures." },
  { icon: <Mic />, title: "Stage & Concert Security", desc: "Stage barricade and artist escort services." },
  { icon: <Flag />, title: "Political Event Security", desc: "Strategic planning and protection for rallies." },
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-secondary/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Comprehensive <span className="gold-gradient-text">Security Solutions</span>
          </h2>
          <p className="text-white/90 text-[15px] sm:text-lg">
            Delivering unwavering protection across all domains. Our trained professionals ensure your safety is never compromised.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="luxury-card h-full bg-card/50 border-white/5 group">
                <CardContent className="p-3 sm:p-6 flex flex-col items-start text-left h-full">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-background border border-primary/20 text-primary flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    {/* Scale icon slightly down on mobile */}
                    <div className="scale-75 sm:scale-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold text-white mb-0 font-serif leading-tight">{service.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}