import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiWhatsapp, SiInstagram, SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="w-6 h-6 text-[#25D366]" />,
      title: "Call Us",
      value: "+91 9011646305",
      link: "tel:+919011646305",
      color: "hover:border-[#25D366]"
    },
    {
      icon: <SiWhatsapp className="w-6 h-6 text-[#25D366]" />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/919011646305",
      color: "hover:border-[#25D366]"
    },
    {
      icon: <SiGmail className="w-6 h-6 text-[#EA4335]" />,
      title: "Email",
      value: "solapurbouncers@gmail.com",
      link: "mailto:solapurbouncers@gmail.com",
      color: "hover:border-[#EA4335]"
    },
    {
      icon: <SiInstagram className="w-6 h-6 text-[#E1306C]" />,
      title: "Instagram",
      value: "@solapurbouncer0786",
      link: "https://www.instagram.com/solapurbouncer0786",
      color: "hover:border-[#E1306C]"
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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center text-center h-full">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-white/10 flex items-center justify-center mb-3 sm:mb-4 transition-colors ${info.color}`}>
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm sm:text-base mb-1">{info.title}</h3>
                    <p className="text-white/60 text-[10px] sm:text-sm font-medium w-full break-all sm:break-normal px-1">{info.value}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}