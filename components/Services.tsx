"use client";

import { motion } from "framer-motion";
import { Pickaxe, Mountain, Trash2, Hammer, Maximize, Navigation } from "lucide-react";
import { SiteContent } from "@/sanity/types";

const ICON_MAP = {
  pickaxe: Pickaxe,
  mountain: Mountain,
  trash: Trash2,
  hammer: Hammer,
  maximize: Maximize,
  navigation: Navigation,
};

const DEFAULT_SERVICES = [
  { title: "Gépi Földmunka", desc: "Általános földkitermelés, tükörkészítés és töltésépítés modern gépekkel.", iconKey: "pickaxe" },
  { title: "Tereprendezés", desc: "Vízszintes és lejtős felületek precíz kialakítása, kerti munkák előkészítése.", iconKey: "mountain" },
  { title: "Árokásás", desc: "Közművek, csatornák és öntözőrendszerek nyomvonalának pontos kiásása.", iconKey: "navigation" },
  { title: "Alapásás", desc: "Családi házak, kerítések és ipari épületek alapjainak szakszerű kiemelése.", iconKey: "maximize" },
  { title: "Bontási Munkák", desc: "Kisebb épületek, betonfelületek és kerítések gépi bontása.", iconKey: "hammer" },
  { title: "Sittszállítás", desc: "Építési törmelék és föld elszállítása, terület tisztítása.", iconKey: "trash" },
];

interface ServicesProps {
  content: SiteContent | null;
}

export function Services({ content }: ServicesProps) {
  const badge = content?.servicesBadge ?? "Miben segíthetünk?";
  const titlePrefix = content?.servicesTitlePrefix ?? "Széleskörű";
  const titleHighlight = content?.servicesTitleHighlight ?? "Szolgáltatások";
  const services = content?.services?.length ? content.services : DEFAULT_SERVICES;

  return (
    <section id="szolgaltatasok" className="py-24 bg-deep-black relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-industrial-yellow/5 blur-[120px] rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-industrial-yellow font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            {badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            {titlePrefix} <span className="text-industrial-yellow">{titleHighlight}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.iconKey as keyof typeof ICON_MAP] ?? Pickaxe;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-sm border-t border-white/10 group hover:border-industrial-yellow transition-all"
              >
                <div className="w-14 h-14 bg-industrial-yellow/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-industrial-yellow transition-colors">
                  <Icon className="text-industrial-yellow group-hover:text-black transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-industrial-yellow text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Részletek <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

