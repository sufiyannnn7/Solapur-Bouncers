import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "50+ Professional Team",
    "Trained & Disciplined Staff",
    "Affordable Pricing",
    "Trusted Across Solapur",
    "Quick Response Time",
    "Professional Uniform",
    "Customer Satisfaction",
    "Reliable Security",
    "Experienced Event Management"
  ];

  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square max-w-[240px] sm:max-w-[280px] mx-auto">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-primary/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                <ShieldIcon className="w-24 h-24 text-primary mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                <h3 className="text-2xl font-serif font-bold text-white">The Gold Standard</h3>
                <p className="text-primary text-sm uppercase tracking-widest mt-2">In Protection</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Why Choose Us</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Uncompromising <span className="gold-gradient-text">Excellence</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 bg-secondary/30 border border-white/5 p-4 rounded-lg hover:border-primary/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-white/90 font-medium text-sm md:text-base">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}