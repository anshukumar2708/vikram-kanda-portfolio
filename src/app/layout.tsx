import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { PageTransition } from "@/components/motion/page-transition";
import { JsonLd } from "@/components/json-ld";
import { siteConfig, publishedSocialProfiles } from "@/lib/site";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fefefe" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0c0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortTitle,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLM summary" }],
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortTitle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: siteConfig.defaultOgImageWidth,
        height: siteConfig.defaultOgImageHeight,
        alt: siteConfig.defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      { url: siteConfig.defaultOgImage, alt: siteConfig.defaultOgImageAlt },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  category: "sports",
  classification: "Bodybuilding, Fitness, Sports Personality",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  alternateName: "Mr. Durg 2018",
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
  jobTitle: "Competitive Bodybuilder & Public Figure",
  worksFor: {
    "@type": "Organization",
    name: "Vikram Kanda Coaching",
  },
  description: siteConfig.description,
  nationality: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
    streetAddress: siteConfig.address.streetAddress,
  },
  sameAs: publishedSocialProfiles(),
  award: [...siteConfig.awards],
  knowsAbout: [
    "Bodybuilding",
    "Classic Physique",
    "Men's Physique",
    "Strength Training",
    "Sports Nutrition",
    "Competition Prep",
    "Posing & Stage Craft",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.shortTitle,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: { "@id": `${siteConfig.url}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/gallery?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: `${siteConfig.name} — Bodybuilding Coaching`,
  image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
  url: siteConfig.url,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "AdministrativeArea", name: "Chhattisgarh" },
    { "@type": "City", name: "Durg" },
  ],
  founder: { "@id": `${siteConfig.url}/#person` },
  sameAs: publishedSocialProfiles(),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </Link>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>
        <JsonLd id="person-ld" data={personJsonLd} />
        <JsonLd id="website-ld" data={websiteJsonLd} />
        <JsonLd id="business-ld" data={localBusinessJsonLd} />
      </body>
    </html>
  );
}
