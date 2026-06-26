import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Stats() {
  const stats = [
    { label: "Professional Bouncers", value: 50, suffix: "+" },
    { label: "Events Secured", value: 100, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
    { label: "Years Experience", value: 5, suffix: "+" },
  ];

  return (
    <section className="py-12 bg-secondary border-y border-white/5 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-4">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2 flex items-center">
                <AnimatedCounter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-foreground/70 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}