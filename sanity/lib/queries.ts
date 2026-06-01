import { groq } from "next-sanity";

export const SITE_CONTENT_QUERY = groq`*[_type == "siteContent"][0]{
  heroBadge, heroTitle1, heroTitle2, heroDescription, heroCta1, heroCta2,
  "heroImageUrl": heroImage.asset->url,
  aboutBadge, aboutTitle1, aboutTitle2, aboutDescription, aboutChecklist,
  aboutStats[]{ value, label, iconKey },
  servicesBadge, servicesTitlePrefix, servicesTitleHighlight,
  services[]{ title, desc, iconKey },
  portfolioBadge, portfolioTitlePrefix, portfolioTitleHighlight, portfolioDescription,
  projects[]{ title, location, "imageUrl": image.asset->url },
  footerDescription, footerAddress, footerPhone, footerEmail
}`;
