"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteContent } from "@/sanity/types";

const DEFAULT_PROJECTS = [
  { title: "Alapásás - Családi Ház", location: "Budapest, II. kerület", imageUrl: null },
  { title: "Tereprendezés és Tükörkészítés", location: "Érd", imageUrl: null },
  { title: "Iparterület Előkészítés", location: "Gödöllő", imageUrl: null },
  { title: "Bontás és Sittszállítás", location: "Biatorbágy", imageUrl: null },
  { title: "Közműárok Kiemelés", location: "Szentendre", imageUrl: null },
  { title: "Díszkert Alapozás", location: "Dunakeszi", imageUrl: null },
];

interface PortfolioProps {
  content: SiteContent | null;
}

export function Portfolio({ content }: PortfolioProps) {
  const badge = content?.portfolioBadge ?? "Munkáink";
  const titlePrefix = content?.portfolioTitlePrefix ?? "Kiemelt";
  const titleHighlight = content?.portfolioTitleHighlight ?? "Projektjeink";
  const description = content?.portfolioDescription ?? "Tekintse meg legutóbbi munkáinkat, ahol a precizitás és a hatékonyság találkozott ügyfeleink elégedettségével.";
  const projects = content?.projects?.length ? content.projects : DEFAULT_PROJECTS;

  return (
    <section id="referenciak" className="py-24 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-industrial-yellow font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              {badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              {titlePrefix} <span className="text-industrial-yellow">{titleHighlight}</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md md:text-right">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-sm bg-gray-900"
            >
              <Image
                src={project.imageUrl ?? (i % 2 === 0 ? "/assets/construction.png" : "/assets/hero.png")}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-industrial-yellow text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                  {project.location}
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                  {project.title}
                </h3>
                <div className="w-10 h-1 bg-industrial-yellow transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

