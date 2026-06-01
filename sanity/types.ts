export interface StatItem {
  value: string;
  label: string;
  iconKey: "clock" | "check" | "award" | "shield";
}

export interface ServiceItem {
  title: string;
  desc: string;
  iconKey: "pickaxe" | "mountain" | "trash" | "hammer" | "maximize" | "navigation";
}

export interface ProjectItem {
  title: string;
  location: string;
  imageUrl: string | null;
}

export interface SiteContent {
  // Hero
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDescription: string;
  heroCta1: string;
  heroCta2: string;
  heroImageUrl: string | null;
  // About
  aboutBadge: string;
  aboutTitle1: string;
  aboutTitle2: string;
  aboutDescription: string;
  aboutChecklist: string[];
  aboutStats: StatItem[];
  // Services
  servicesBadge: string;
  servicesTitlePrefix: string;
  servicesTitleHighlight: string;
  services: ServiceItem[];
  // Portfolio
  portfolioBadge: string;
  portfolioTitlePrefix: string;
  portfolioTitleHighlight: string;
  portfolioDescription: string;
  projects: ProjectItem[];
  // Footer
  footerDescription: string;
  footerAddress: string;
  footerPhone: string;
  footerEmail: string;
}
