"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.png"
          alt="Modern Excavator"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-deep-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-industrial-yellow font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Prémium Gépi Földmunka
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase tracking-tighter mb-6">
            ALAPOZZUK MEG A <br />
            <span className="text-industrial-yellow">JÖVŐJÉT</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Profi szakértelem, modern géppark és precíz kivitelezés minden projektben. 
            Legyen szó alapásásról, tereprendezésről vagy bontásról, mi megoldjuk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#kapcsolat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-industrial-yellow text-black px-10 py-5 rounded-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-500/20 glow-yellow"
            >
              Ajánlatot kérek <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#szolgaltatasok"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest flex items-center justify-center hover:bg-white/10 transition-all"
            >
              Szolgáltatásaink
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Görgessen le</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-industrial-yellow to-transparent" />
      </motion.div>
    </section>
  );
}
