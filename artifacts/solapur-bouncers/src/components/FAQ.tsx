import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I book bouncers for my event?",
      answer: "Booking is simple! You can use our 'Book Now' form on this website which will directly send us a WhatsApp message, or you can call us directly on 9011646305. We recommend booking at least a few days in advance for large events."
    },
    {
      question: "Do you provide security for weddings and family events?",
      answer: "Yes, wedding security is one of our specialties. We understand the sensitivity of family events and provide discreet, respectful, yet highly alert security personnel to ensure everything runs smoothly."
    },
    {
      question: "Are your guards professionally trained?",
      answer: "Absolutely. All our staff undergo rigorous physical and situational training. They are disciplined, properly uniformed, and trained to handle crowd management, emergency situations, and VIP protocols professionally."
    },
    {
      question: "Do you provide VIP and celebrity security?",
      answer: "Yes, we provide elite close-protection (bodyguard) services for VIPs, celebrities, and high-profile individuals visiting or residing in Solapur. Our team ensures complete safety while maintaining a professional distance."
    },
    {
      question: "Which areas do you serve?",
      answer: "We provide security services all over Solapur district and surrounding areas. For major events outside Solapur, please contact us to discuss logistics."
    },
    {
      question: "Is emergency or last-minute booking available?",
      answer: "Yes, we maintain a standby reserve force. For immediate or emergency security requirements, please call or WhatsApp us directly and we will deploy our team as fast as possible."
    }
  ];

  return (
    <section className="py-24 bg-secondary/20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <h4 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Any Questions?</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h2>
            <p className="text-white/60 mb-8">
              Find answers to common questions about our security services, booking process, and team capabilities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 border border-white/10 px-4 sm:px-6 rounded-lg data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline py-3 sm:py-4 font-medium text-sm sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-3 sm:pb-4 text-xs sm:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}