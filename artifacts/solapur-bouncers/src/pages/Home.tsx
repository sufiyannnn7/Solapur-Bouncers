import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground relative selection:bg-primary selection:text-black">
      <LoadingScreen />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <Team />
        <Gallery />
        <BookingForm />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
}