import { defineField, defineType } from "sanity";

export const siteContent = defineType({
  name: "siteContent",
  title: "Weboldal Tartalma",
  type: "document",
  groups: [
    { name: "hero", title: "🏠 Hero Szekció" },
    { name: "about", title: "👥 Rólunk" },
    { name: "services", title: "🔧 Szolgáltatások" },
    { name: "portfolio", title: "📁 Referenciák" },
    { name: "footer", title: "📋 Footer" },
  ],
  fields: [
    // HERO
    defineField({ name: "heroBadge", title: "Kis felső felirat", type: "string", group: "hero", initialValue: "Prémium Gépi Földmunka" }),
    defineField({ name: "heroTitle1", title: "Főcím – 1. sor", type: "string", group: "hero", initialValue: "ALAPOZZUK MEG A" }),
    defineField({ name: "heroTitle2", title: "Főcím – 2. sor (sárga)", type: "string", group: "hero", initialValue: "JÖVŐJÉT" }),
    defineField({ name: "heroDescription", title: "Leírás", type: "text", rows: 3, group: "hero", initialValue: "Profi szakértelem, modern géppark és precíz kivitelezés minden projektben. Legyen szó alapásásról, tereprendezésről vagy bontásról, mi megoldjuk." }),
    defineField({ name: "heroCta1", title: "Gomb 1 szövege", type: "string", group: "hero", initialValue: "Ajánlatot kérek" }),
    defineField({ name: "heroCta2", title: "Gomb 2 szövege", type: "string", group: "hero", initialValue: "Szolgáltatásaink" }),
    defineField({ name: "heroImage", title: "Háttérkép", type: "image", group: "hero", options: { hotspot: true } }),

    // ABOUT
    defineField({ name: "aboutBadge", title: "Kis felső felirat", type: "string", group: "about", initialValue: "Ismerjen meg minket" }),
    defineField({ name: "aboutTitle1", title: "Cím – 1. sor", type: "string", group: "about", initialValue: "Több mint egy évtizede az" }),
    defineField({ name: "aboutTitle2", title: "Cím – 2. sor (sárga)", type: "string", group: "about", initialValue: "Építőipar Szolgálatában" }),
    defineField({ name: "aboutDescription", title: "Leírás", type: "text", rows: 4, group: "about", initialValue: "Vállalkozásunk célja, hogy a legmagasabb szakmai színvonalon valósítsa meg ügyfeleink elképzeléseit. Modern gépparkunk és tapasztalt szakembereink garantálják a precizitást, a határidők betartását és a költséghatékony kivitelezést." }),
    defineField({ name: "aboutChecklist", title: "Felsorolás pontok", type: "array", group: "about", of: [{ type: "string" }], initialValue: ["Modern, rendszeresen karbantartott géppark", "Tapasztalt, szakképzett gépkezelők", "Ingyenes helyszíni felmérés és árajánlat", "Teljes körű garancia az elvégzett munkára"] }),
    defineField({
      name: "aboutStats", title: "Statisztikák", type: "array", group: "about",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "value", title: "Érték (pl. 15+)", type: "string" }),
          defineField({ name: "label", title: "Felirat (pl. Év Tapasztalat)", type: "string" }),
          defineField({ name: "iconKey", title: "Ikon", type: "string", options: { list: [{ title: "⏰ Óra", value: "clock" }, { title: "✅ Pipa", value: "check" }, { title: "🏆 Trófea", value: "award" }, { title: "🛡️ Pajzs", value: "shield" }] } }),
        ],
      }],
    }),

    // SERVICES
    defineField({ name: "servicesBadge", title: "Kis felső felirat", type: "string", group: "services", initialValue: "Miben segíthetünk?" }),
    defineField({ name: "servicesTitlePrefix", title: "Cím (fehér rész)", type: "string", group: "services", initialValue: "Széleskörű" }),
    defineField({ name: "servicesTitleHighlight", title: "Cím (sárga rész)", type: "string", group: "services", initialValue: "Szolgáltatások" }),
    defineField({
      name: "services", title: "Szolgáltatások listája", type: "array", group: "services",
      of: [{
        type: "object",
        preview: { select: { title: "title", subtitle: "desc" } },
        fields: [
          defineField({ name: "title", title: "Cím", type: "string" }),
          defineField({ name: "desc", title: "Leírás", type: "text", rows: 2 }),
          defineField({ name: "iconKey", title: "Ikon", type: "string", options: { list: [{ title: "⛏️ Csákány", value: "pickaxe" }, { title: "⛰️ Hegy", value: "mountain" }, { title: "🗑️ Szemét", value: "trash" }, { title: "🔨 Kalapács", value: "hammer" }, { title: "📐 Méret", value: "maximize" }, { title: "🧭 Navigáció", value: "navigation" }] } }),
        ],
      }],
    }),

    // PORTFOLIO
    defineField({ name: "portfolioBadge", title: "Kis felső felirat", type: "string", group: "portfolio", initialValue: "Munkáink" }),
    defineField({ name: "portfolioTitlePrefix", title: "Cím (fehér rész)", type: "string", group: "portfolio", initialValue: "Kiemelt" }),
    defineField({ name: "portfolioTitleHighlight", title: "Cím (sárga rész)", type: "string", group: "portfolio", initialValue: "Projektjeink" }),
    defineField({ name: "portfolioDescription", title: "Leírás szöveg", type: "text", group: "portfolio", initialValue: "Tekintse meg legutóbbi munkáinkat, ahol a precizitás és a hatékonyság találkozott ügyfeleink elégedettségével." }),
    defineField({
      name: "projects", title: "Projektek listája", type: "array", group: "portfolio",
      of: [{
        type: "object",
        preview: { select: { title: "title", subtitle: "location", media: "image" } },
        fields: [
          defineField({ name: "title", title: "Projekt neve", type: "string" }),
          defineField({ name: "location", title: "Helyszín", type: "string" }),
          defineField({ name: "image", title: "Kép", type: "image", options: { hotspot: true } }),
        ],
      }],
    }),

    // FOOTER
    defineField({ name: "footerDescription", title: "Footer leírás", type: "text", rows: 3, group: "footer", initialValue: "Prémium gépi földmunka szolgáltatások Magyarország egész területén. Modern technológia, precíz kivitelezés, megbízható szakértelem." }),
    defineField({ name: "footerAddress", title: "Cím", type: "string", group: "footer", initialValue: "1024 Budapest, Példa utca 1." }),
    defineField({ name: "footerPhone", title: "Telefonszám", type: "string", group: "footer", initialValue: "+36 30 123 4567" }),
    defineField({ name: "footerEmail", title: "Email cím", type: "string", group: "footer", initialValue: "info@gepifoldmunka.hu" }),
  ],
});
