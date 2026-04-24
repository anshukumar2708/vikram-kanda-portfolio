import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import {
  competition1, competition2, competition3, gallery3,
} from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = buildMetadata("gallery");

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Vikram Kanda Photo Gallery",
  url: `${siteConfig.url}/gallery`,
  inLanguage: siteConfig.language,
  description:
    "Photo gallery of Vikram Kanda — training, Chhattisgarh state and India-level competition moments, and behind-the-scenes shots from Durg.",
  about: { "@id": `${siteConfig.url}/#person` },
};

const galleryBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]);

export default function GalleryPage() {
  return (
    <>
      <JsonLd id="gallery-ld" data={galleryJsonLd} />
      <JsonLd id="gallery-breadcrumb-ld" data={galleryBreadcrumb} />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl mb-12">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4" /> Gallery
            </p>
            <h1 className="text-5xl md:text-7xl font-display mb-4">
              The <span className="text-gradient">Grind</span> Captured
            </h1>
            <p className="text-muted-foreground text-lg">
              Every frame tells a story of sweat, steel, and a competitive bodybuilder&apos;s journey from Durg, Chhattisgarh.
            </p>
          </Reveal>

          {/* Interactive grid + filter */}
          <GalleryClient />

          {/* STAGE SPOTLIGHT */}
          <div className="py-20 border-t border-border">
            <Reveal className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">On Stage</p>
              <h2 className="text-4xl md:text-5xl font-display">Competition <span className="text-gradient">Moments</span></h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                From the warm-up room to the stage — Chhattisgarh & India level competition moments that define the journey.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: competition1, label: "CG State Stage Walk", year: "2019" },
                { src: competition2, label: "India Level Stage", year: "2021" },
                { src: competition3, label: "Classic Physique Final", year: "2018" },
              ].map((it, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <figure className="image-zoom rounded-xl overflow-hidden aspect-[3/4] relative group hover-lift">
                    <Image src={it.src} alt={it.label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs uppercase tracking-wider border border-primary text-primary px-2 py-0.5 rounded mb-2 inline-block">{it.year}</span>
                      <h3 className="text-xl font-display">{it.label}</h3>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="text-center pt-10">
            <p className="text-muted-foreground mb-6">
              Want to see more of Vikram&apos;s journey? Follow on social media.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium btn-magnetic group">
              Get in Touch <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
