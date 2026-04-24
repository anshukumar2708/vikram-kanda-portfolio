import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site";

/**
 * Per-page SEO content used to build Next.js Metadata objects.
 *
 * Each entry provides:
 *  - path        : canonical path (matches the app route)
 *  - title       : descriptive, keyword-rich <title> (template appends brand)
 *  - description : compelling meta description (≤ ~160 chars)
 *  - keywords    : meta keywords targeted for that page
 *  - ogImage     : page-specific social share image (absolute path)
 *  - ogImageAlt  : accessible alt text for that image
 *  - ogType      : Open Graph object type
 */
export type PageSeo = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogImageAlt: string;
  ogType?: "website" | "profile" | "article";
};

export const pageSeo = {
  home: {
    path: "/",
    title:
      "Vikram Kanda — Bodybuilder, Mr. Durg 2018 & India-Level Competitor",
    description:
      "Official website of Vikram Kanda — Mr. Durg 2018 winner, Chhattisgarh state bodybuilding champion and India-level competitor from Durg. Coaching, journey, gallery & more.",
    keywords: [
      "Vikram Kanda",
      "Mr Durg 2018",
      "Bodybuilder Durg Chhattisgarh",
      "India level bodybuilder",
      "Chhattisgarh state champion",
      "Classic Physique India",
      "Men's Physique India",
      "Bodybuilding coach India",
    ],
    ogImage: "/images/vikram-banner-5.png",
    ogImageAlt:
      "Vikram Kanda flexing on stage — Mr. Durg 2018 Bodybuilding Champion",
    ogType: "website",
  },
  about: {
    path: "/about",
    title:
      "About Vikram Kanda — Journey of a Chhattisgarh Bodybuilding Champion",
    description:
      "Meet Vikram Kanda — from the gym floors of Durg to the India-level competition stage. Mr. Durg 2018, state champion and public figure with 12+ years of competitive bodybuilding experience.",
    keywords: [
      "About Vikram Kanda",
      "Vikram Kanda biography",
      "Bodybuilder biography India",
      "Mr Durg 2018 winner story",
      "Chhattisgarh bodybuilder profile",
      "Durg public figure",
      "Vikram Kanda career",
    ],
    ogImage: "/images/vikram-1.jpg",
    ogImageAlt: "Portrait of Vikram Kanda — competitive bodybuilder from Durg",
    ogType: "profile",
  },
  gallery: {
    path: "/gallery",
    title:
      "Photo Gallery — Vikram Kanda Training, Competitions & Stage Moments",
    description:
      "Explore the Vikram Kanda photo gallery — training sessions, Chhattisgarh state competitions, India-level stage shots and behind-the-scenes moments from Durg.",
    keywords: [
      "Vikram Kanda photos",
      "Vikram Kanda gallery",
      "Bodybuilder photos India",
      "Mr Durg 2018 photos",
      "Chhattisgarh bodybuilding gallery",
      "Competition stage photos India",
      "Training photos bodybuilder",
    ],
    ogImage: "/images/vikram-8.jpg",
    ogImageAlt:
      "Vikram Kanda photo gallery — training, competitions and stage moments",
    ogType: "website",
  },
  transformation: {
    path: "/transformation",
    title:
      "Transformation Journey — Vikram Kanda From Durg Gym to India-Level Stage",
    description:
      "The full transformation journey of Vikram Kanda — from a 58 kg beginner in Durg to Mr. Durg 2018, Chhattisgarh state champion and India-level bodybuilding competitor.",
    keywords: [
      "Vikram Kanda transformation",
      "Bodybuilder transformation India",
      "Mr Durg 2018 journey",
      "Chhattisgarh bodybuilding journey",
      "India level bodybuilding career",
      "Bodybuilding before after India",
    ],
    ogImage: "/images/Rule your mind or it will rule you.jpg",
    ogImageAlt:
      "Vikram Kanda transformation journey — from beginner to India-level competitor",
    ogType: "article",
  },
  services: {
    path: "/services",
    title:
      "Bodybuilding Services — Training, Nutrition & Competition Prep by Vikram Kanda",
    description:
      "Personal training, nutrition coaching, posing & stage craft and competition prep with Vikram Kanda — India-level competitive bodybuilder and Mr. Durg 2018 winner from Chhattisgarh.",
    keywords: [
      "Bodybuilding services India",
      "Personal training Durg",
      "Nutrition coaching bodybuilder",
      "Competition prep India",
      "Posing coach India",
      "Stage craft bodybuilding",
      "Online bodybuilding coach India",
      "Fitness services Chhattisgarh",
    ],
    ogImage: "/images/vikram-coaching.png",
    ogImageAlt:
      "Vikram Kanda coaching services — training, nutrition and competition prep",
    ogType: "website",
  },
  coaching: {
    path: "/coaching",
    title:
      "Coaching Programs — Elite Bodybuilding Plans by Mr. Durg Vikram Kanda",
    description:
      "Choose from elite bodybuilding coaching programs — beginner, intermediate and competition prep plans built on Chhattisgarh state and India-level competition experience.",
    keywords: [
      "Bodybuilding coaching India",
      "Online bodybuilding coach",
      "Competition prep plan India",
      "Beginner bodybuilding program",
      "Intermediate bodybuilding program",
      "Peak week coach India",
      "Bodybuilding coach Durg",
      "Vikram Kanda coaching",
    ],
    ogImage: "/images/vikram-coaching.png",
    ogImageAlt:
      "Vikram Kanda coaching programs — beginner, intermediate and competition prep",
    ogType: "website",
  },
  contact: {
    path: "/contact",
    title:
      "Contact Vikram Kanda — Coaching, Collaborations & Media Inquiries",
    description:
      "Contact Vikram Kanda for coaching enquiries, collaborations, event appearances and media requests. Based in Chandrakr Gali Santrabadi, Durg, Chhattisgarh.",
    keywords: [
      "Contact Vikram Kanda",
      "Bodybuilder contact India",
      "Coaching enquiry Durg",
      "Collaboration bodybuilder India",
      "Event appearance bodybuilder",
      "Media inquiry Chhattisgarh bodybuilder",
    ],
    ogImage: "/images/vikram-coaching.png",
    ogImageAlt: "Contact Vikram Kanda — coaching and collaboration inquiries",
    ogType: "website",
  },
} satisfies Record<string, PageSeo>;

export type PageSeoKey = keyof typeof pageSeo;

/**
 * Build a rich Next.js `Metadata` object for a given page key.
 * Includes title, description, keywords, canonical URL, Open Graph,
 * Twitter cards and robots directives.
 */
export function buildMetadata(key: PageSeoKey, overrides?: Partial<Metadata>): Metadata {
  const seo = pageSeo[key];
  const url = absoluteUrl(seo.path);
  const imageUrl = seo.ogImage.startsWith("http")
    ? seo.ogImage
    : absoluteUrl(seo.ogImage);

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.path,
    },
    openGraph: {
      type: seo.ogType === "article" ? "article" : seo.ogType === "profile" ? "profile" : "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.shortTitle,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: seo.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: seo.title,
      description: seo.description,
      images: [{ url: imageUrl, alt: seo.ogImageAlt }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  return { ...base, ...overrides };
}

/** JSON-LD helper for breadcrumbs on any page. */
export function breadcrumbJsonLd(
  trail: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}
