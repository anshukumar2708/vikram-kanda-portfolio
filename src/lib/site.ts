/**
 * Central site configuration used across metadata, JSON-LD, sitemap, robots, etc.
 */
export const siteConfig = {
  name: "Vikram Kanda",
  title: "Vikram Kanda — Bodybuilder & Public Figure, Durg C.G.",
  shortTitle: "Vikram Kanda",
  description:
    "Official portfolio of Vikram Kanda — competitive bodybuilder and public figure from Durg, Chhattisgarh, competing at India and state level.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://vikramkanda.com",
  locale: "en_IN",
  twitterHandle: "@vikramkanda",
  keywords: [
    "Vikram Kanda",
    "Bodybuilder Durg",
    "Mr Durg 2018",
    "Chhattisgarh bodybuilder",
    "India bodybuilding",
    "Classic Physique",
    "Men's Physique",
    "Bodybuilding coach",
    "Competition prep",
    "Durg fitness",
  ],
  author: {
    name: "Vikram Kanda",
    location: "Chandrakr Gali Santrabadi, Durg, Chhattisgarh, India",
  },
  social: {
    instagram: "https://instagram.com/ai_vikramkanda" as string,
    youtube: "#" as string,
    facebook: "#" as string,
  },
} as const;

export type SiteConfig = typeof siteConfig;
