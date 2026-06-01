import { Camera, MessageCircle, Briefcase } from "lucide-react";
import { SiteContent } from "@/sanity/types";

interface FooterProps {
  content: SiteContent | null;
}

export function Footer({ content }: FooterProps) {
  const description = content?.footerDescription ?? "Prémium gépi földmunka szolgáltatások Magyarország egész területén. Modern technológia, precíz kivitelezés, megbízható szakértelem.";
  const address = content?.footerAddress ?? "1024 Budapest, Példa utca 1.";
  const phone = content?.footerPhone ?? "+36 30 123 4567";
  const email = content?.footerEmail ?? "info@gepifoldmunka.hu";

  return (
    <footer className="bg-deep-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-white font-black text-2xl tracking-tighter uppercase">
                GÉPI <span className="text-industrial-yellow">FÖLDMUNKA</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-sm hover:bg-industrial-yellow hover:text-black transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-sm hover:bg-industrial-yellow hover:text-black transition-all">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-sm hover:bg-industrial-yellow hover:text-black transition-all">
                <Briefcase size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navigáció</h4>
            <ul className="space-y-4">
              {["Rólunk", "Szolgáltatások", "Referenciák", "Kapcsolat"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-industrial-yellow transition-colors text-sm uppercase tracking-wider font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Szolgáltatások</h4>
            <ul className="space-y-4">
              {["Alapásás", "Tereprendezés", "Árokásás", "Bontás", "Sittszállítás"].map((item) => (
                <li key={item} className="text-gray-500 text-sm uppercase tracking-wider font-medium">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Elérhetőség</h4>
            <div className="space-y-4 text-sm text-gray-500 uppercase tracking-wider font-medium">
              <p>{address}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} GÉPI FÖLDMUNKA. Minden jog fenntartva.
          </p>
          <div className="flex gap-8 text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="#" className="hover:text-white transition-colors">Adatkezelés</a>
            <a href="#" className="hover:text-white transition-colors">ÁSZF</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

