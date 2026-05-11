"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Clock, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Clock, label: "Év Tapasztalat", value: "15+" },
  { icon: CheckCircle2, label: "Befejezett Projekt", value: "500+" },
  { icon: Award, label: "Modern Munkagép", value: "12" },
  { icon: ShieldCheck, label: "Elégedett Ügyfél", value: "100%" },
];

export function About() {
  return (
    <section id="rolunk" className="py-24 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-industrial-yellow font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Ismerjen meg minket
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
              Több mint egy évtizede az <br />
              <span className="text-industrial-yellow">Építőipar Szolgálatában</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Vállalkozásunk célja, hogy a legmagasabb szakmai színvonalon valósítsa meg ügyfeleink elképzeléseit. 
              Modern gépparkunk és tapasztalt szakembereink garantálják a precizitást, a határidők betartását 
              és a költséghatékony kivitelezést.
            </p>
            
            <div className="space-y-4">
              {[
                "Modern, rendszeresen karbantartott géppark",
                "Tapasztalt, szakképzett gépkezelők",
                "Ingyenes helyszíni felmérés és árajánlat",
                "Teljes körű garancia az elvégzett munkára",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="text-industrial-yellow shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-dark p-8 rounded-sm border-l-2 border-industrial-yellow group hover:bg-industrial-yellow/5 transition-all"
              >
                <stat.icon className="text-industrial-yellow mb-4 transition-transform group-hover:scale-110" size={32} />
                <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
