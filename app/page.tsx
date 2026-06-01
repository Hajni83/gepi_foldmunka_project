import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { client } from "@/sanity/lib/client";
import { SITE_CONTENT_QUERY } from "@/sanity/lib/queries";
import { SiteContent } from "@/sanity/types";

export const revalidate = false;

async function getSiteContent(): Promise<SiteContent | null> {
  try {
    return await client.fetch(SITE_CONTENT_QUERY, {}, { next: { tags: ["site-content"] } });
  } catch {
    return null;
  }
}

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-deep-black">
      <Navbar />
      <Hero content={content} />
      <About content={content} />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-industrial-yellow/20 to-transparent" />
      <Services content={content} />
      <Portfolio content={content} />
      <ContactForm />

      {/* Google Maps Section */}
      <section className="h-[400px] w-full bg-gray-900 relative">
        <div className="absolute inset-0 grayscale contrast-125 opacity-40">
          <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold uppercase tracking-widest bg-cover bg-center">
            Térkép betöltése...
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-dark p-6 rounded-sm border border-industrial-yellow/30 text-center">
          <h3 className="text-white font-black uppercase tracking-widest mb-2">Irodánk</h3>
          <p className="text-gray-400 text-sm">{content?.footerAddress ?? "1024 Budapest, Példa utca 1."}</p>
        </div>
      </section>

      <Footer content={content} />
      <BackToTop />
    </main>
  );
}
