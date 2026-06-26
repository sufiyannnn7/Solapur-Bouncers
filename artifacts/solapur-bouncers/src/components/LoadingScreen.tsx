import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src="/images/logo.png"
          alt="Solapur Bouncers Logo"
          className="w-28 h-auto mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <motion.h1
          className="text-3xl md:text-4xl font-serif font-bold text-white tracking-widest text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          SOLAPUR <span className="gold-gradient-text">BOUNCERS</span>
        </motion.h1>

        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.3em] mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Professional Security · Trusted Protection
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="w-44 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-full gold-gradient-bg rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
