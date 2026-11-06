import { Shield } from "lucide-react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Solapur Bouncers" className="w-12 h-12 object-contain" />
              <span className="font-serif font-bold text-xl tracking-wider">
                SOLAPUR <span className="text-primary">BOUNCERS</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional Security. Trusted Protection. Every Event. Every Time. Solapur's elite protection agency led by Riyaz Shaikh.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/solapurbouncer0786" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <SiInstagram className="w-5 h-5 text-[#E1306C]" />
              </a>
              <a href="https://wa.me/919011646305" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Team', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif text-lg">Services</h4>
            <ul className="space-y-3">
              {['Wedding Guest Welcome', 'Wedding Security', 'VIP Protection', 'Corporate Events', 'Festival Security', 'Personal Guards'].map((service) => (
                <li key={service}>
                  <span className="text-white/60 flex items-center gap-2 text-sm">
                    <Shield className="w-3 h-3 text-primary" /> {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif text-lg">Contact</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-primary text-xs uppercase tracking-widest font-semibold mb-1">Director</span>
                <span className="text-white/80">Riyaz Shaikh</span>
              </li>
              <li>
                <span className="block text-primary text-xs uppercase tracking-widest font-semibold mb-1">Phone</span>
                <a href="tel:+919011646305" className="text-white/80 hover:text-primary transition-colors">+91 9011646305</a>
              </li>
              <li>
                <span className="block text-primary text-xs uppercase tracking-widest font-semibold mb-1">Email</span>
                <a href="mailto:solapurbouncers@gmail.com" className="text-white/80 hover:text-primary transition-colors">solapurbouncers@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} SOLAPUR BOUNCERS. All Rights Reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Built for Protection <Shield className="w-3 h-3 text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
}
