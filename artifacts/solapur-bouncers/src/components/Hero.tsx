import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, PhoneCall } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.img
            variants={itemVariants}
            src="/images/logo.png"
            alt="Solapur Bouncers Logo"
            className="w-32 md:w-40 h-auto mb-8 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          />

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Solapur's Most Trusted <br className="hidden md:block" />
            <span className="gold-gradient-text">Security Services</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-white/80 font-light max-w-3xl mb-10 leading-relaxed"
          >
            Professional Security Guards & Event Bouncers for Weddings, Corporate Events, VIP Protection, Hotels, Festivals & Crowd Management across Solapur.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="gold-gradient-bg text-black hover:opacity-90 font-bold uppercase tracking-wider h-14 px-8 text-sm"
              onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ShieldCheck className="mr-2 h-5 w-5" />
              Book Security Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-bold uppercase tracking-wider h-14 px-8 text-sm bg-transparent"
              asChild
            >
              <a href="tel:+919011646305">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-primary font-medium">Scroll Down</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
          animate={{ height: [0, 48, 0], y: [0, 24, 48] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    </section>
  );
}
