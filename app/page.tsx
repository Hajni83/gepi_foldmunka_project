import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black">
      <Navbar />
      <Hero />
      <About />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-industrial-yellow/20 to-transparent" />
      <Services />
      <Portfolio />
      <ContactForm />
      
      {/* Google Maps Section Placeholder */}
      <section className="h-[400px] w-full bg-gray-900 relative">
        <div className="absolute inset-0 grayscale contrast-125 opacity-40">
           {/* In a real scenario, an iframe would go here */}
           <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold uppercase tracking-widest bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=47.4979,19.0402&zoom=13&size=1200x400&scale=2&maptype=roadmap&style=feature:all|element:all|saturation:-100|lightness:-20&key=')] bg-cover bg-center">
              Térkép betöltése...
           </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-dark p-6 rounded-sm border border-industrial-yellow/30 text-center">
          <h3 className="text-white font-black uppercase tracking-widest mb-2">Irodánk</h3>
          <p className="text-gray-400 text-sm">1024 Budapest, Példa utca 1.</p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
