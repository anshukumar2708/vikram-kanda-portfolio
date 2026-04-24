/**
 * Central site configuration used across metadata, JSON-LD, sitemap,
 * robots, Open Graph, Twitter cards and the llms.txt route.
 *
 * Keeping all SEO-critical strings in one place guarantees that every
 * page emits consistent, keyword-rich metadata.
 */
export const siteConfig = {
  name: "Vikram Kanda",
  title:
    "Vikram Kanda — Bodybuilder, Mr. Durg 2018 Winner & India-Level Competitor from Chhattisgarh",
  shortTitle: "Vikram Kanda",
  tagline: "Forged in Iron. Driven by Discipline.",
  description:
    "Official website of Vikram Kanda — Mr. Durg 2018 winner, Chhattisgarh state bodybuilding champion and India-level competitor based in Durg. Explore his journey, coaching programs, competition highlights and contact details.",
  shortDescription:
    "Competitive bodybuilder & public figure from Durg, Chhattisgarh — Mr. Durg 2018, state champion, India-level competitor.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://vikramkanda.com",
  locale: "en_IN",
  language: "en-IN",
  twitterHandle: "@vikramkanda",
  defaultOgImage: "/images/vikram-banner-5.png",
  defaultOgImageWidth: 1920,
  defaultOgImageHeight: 1080,
  defaultOgImageAlt:
    "Vikram Kanda — competitive bodybuilder from Durg, Chhattisgarh",
  keywords: [
    "Vikram Kanda",
    "Vikram Kanda bodybuilder",
    "Bodybuilder Durg",
    "Mr Durg 2018",
    "Mr Durg bodybuilding champion",
    "Chhattisgarh bodybuilder",
    "Chhattisgarh state bodybuilding champion",
    "India bodybuilding",
    "India level bodybuilder",
    "Classic Physique India",
    "Men's Physique India",
    "Bodybuilding coach Durg",
    "Bodybuilding coach Chhattisgarh",
    "Competition prep coach India",
    "Durg fitness",
    "Fitness coach Durg",
    "Online bodybuilding coaching India",
  ],
  author: {
    name: "Vikram Kanda",
    location: "Chandrakr Gali Santrabadi, Durg, Chhattisgarh, India",
  },
  address: {
    streetAddress: "Chandrakr Gali Santrabadi",
    addressLocality: "Durg",
    addressRegion: "Chhattisgarh",
    postalCode: "491001",
    addressCountry: "IN",
  },
  social: {
    instagram: "https://instagram.com/ai_vikramkanda" as string,
    youtube: "#" as string,
    facebook: "#" as string,
  },
  awards: [
    "Mr. Durg 2018 — Winner",
    "Chhattisgarh State Bodybuilding Champion (Classic Physique, 2016)",
    "Chhattisgarh State Bodybuilding Champion (Men's Physique, 2019)",
    "India-Level National Bodybuilding Competitor",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Build an absolute URL for any path on the site. */
export const absoluteUrl = (path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
};

/** Returns the list of social profiles that are actually published (sameAs). */
export const publishedSocialProfiles = (): string[] => {
  const s = siteConfig.social;
  return [s.instagram, s.youtube, s.facebook].filter(
    (u): u is string => typeof u === "string" && u.length > 0 && u !== "#"
  );
};
