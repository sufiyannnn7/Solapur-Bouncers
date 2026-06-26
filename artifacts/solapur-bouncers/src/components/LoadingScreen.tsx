import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@assets/ChatGPT_Image_Jun_26,_2026,_08_04_40_PM_1782485940471.png";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={logo} alt="Solapur Bouncers Logo" className="w-32 h-auto mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
        </motion.div>
        
        <motion.h1 
          className="text-3xl md:text-4xl font-serif font-bold text-white tracking-widest text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          SOLAPUR <span className="gold-gradient-text">BOUNCERS</span>
        </motion.h1>
        
        <motion.div 
          className="w-48 h-[2px] bg-white/10 mt-6 relative overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className="absolute inset-y-0 left-0 gold-gradient-bg"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}