"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Üzenet elküldve! Hamarosan keresni fogjuk.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kapcsolat" className="py-24 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <span className="text-industrial-yellow font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Kapcsolatfelvétel
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
              Kérjen Egyedi <span className="text-industrial-yellow">Árajánlatot</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Készen állunk a közös munkára. Adja meg adatait, és kollégánk 24 órán belül felveszi Önnel a kapcsolatot a részletekkel.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-industrial-yellow/10 flex items-center justify-center rounded-sm shrink-0">
                  <Phone className="text-industrial-yellow" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Telefonszám</h4>
                  <p className="text-gray-400 text-xl font-medium">+36 30 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-industrial-yellow/10 flex items-center justify-center rounded-sm shrink-0">
                  <Mail className="text-industrial-yellow" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">E-mail cím</h4>
                  <p className="text-gray-400 text-xl font-medium">info@gepifoldmunka.hu</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-industrial-yellow/10 flex items-center justify-center rounded-sm shrink-0">
                  <MapPin className="text-industrial-yellow" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Székhely</h4>
                  <p className="text-gray-400 text-xl font-medium">1024 Budapest, Példa utca 1.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-sm border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Teljes név</label>
                  <input
                    required
                    type="text"
                    placeholder="Kovács János"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-industrial-yellow transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Telefonszám</label>
                  <input
                    required
                    type="tel"
                    placeholder="+36 30 123 4567"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-industrial-yellow transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">E-mail cím</label>
                <input
                  required
                  type="email"
                  placeholder="pelda@email.hu"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-industrial-yellow transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Üzenet / Projekt leírása</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Miben segíthetünk?"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-industrial-yellow transition-colors resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-industrial-yellow text-black font-black uppercase tracking-widest py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed group glow-yellow"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Üzenet küldése <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
