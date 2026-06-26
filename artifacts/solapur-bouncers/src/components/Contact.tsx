import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+91 9011646305",
      link: "tel:+919011646305",
      color: "hover:text-primary"
    },
    {
      icon: <SiWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/919011646305",
      color: "hover:text-[#25D366]"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "solapurbouncers@gmail.com",
      link: "mailto:solapurbouncers@gmail.com",
      color: "hover:text-primary"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      value: "@solapurbouncer0786",
      link: "https://www.instagram.com/solapurbouncer0786",
      color: "hover:text-[#E1306C]"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Contact <span className="gold-gradient-text">Command</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">Available 24/7 for urgent security requirements across Solapur.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.a
                href={info.link}
                target={info.title === "Call Us" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="block h-full"
              >
                <Card className={`luxury-card bg-secondary/30 h-full border-white/10 hover:border-primary/50 group transition-all`}>
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                    <div className={`w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center mb-4 text-white/80 group-hover:border-primary/50 transition-colors ${info.color}`}>
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-white mb-1">{info.title}</h3>
                    <p className="text-white/60 text-sm font-medium">{info.value}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full min-h-[300px] rounded-xl overflow-hidden border border-white/10 relative"
          >
            {/* Styled Map Placeholder */}
            <div className="absolute inset-0 bg-[#0f0f0f] flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Headquarters</h3>
              <p className="text-white/70 text-lg">Solapur, Maharashtra</p>
              <p className="text-primary mt-4 font-medium uppercase tracking-widest text-sm">Serving Entire District</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}