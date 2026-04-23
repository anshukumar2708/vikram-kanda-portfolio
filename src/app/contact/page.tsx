import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Flame, Clock, MessageCircle, CheckCircle2, Send,
} from "lucide-react";
import { coachingImg } from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";
import { ContactForm, ContactInfoPanel } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Vikram Kanda for coaching, collaborations, event appearances, and media inquiries. Based in Durg, Chhattisgarh.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Vikram Kanda",
    description: "Get in touch for coaching, collaborations, and inquiries.",
    url: "/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Vikram Kanda",
  url: `${siteConfig.url}/contact`,
  mainEntity: {
    "@type": "Person",
    name: "Vikram Kanda",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chandrakr Gali Santrabadi",
      addressLocality: "Durg",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["en", "hi"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd id="contact-ld" data={contactJsonLd} />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* HEADER */}
          <Reveal className="max-w-3xl mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4" /> Contact
            </p>
            <h1 className="text-5xl md:text-7xl font-display mb-4">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Collaborations, inquiries, event appearances, or just to say hello — drop a message and I&apos;ll get back within 24 hours.
            </p>
          </Reveal>

          {/* GRID */}
          <div className="grid md:grid-cols-5 gap-8 mb-24">
            <div className="md:col-span-2 animate-slide-in-left">
              <ContactInfoPanel />
            </div>
            <div className="md:col-span-3 animate-slide-in-right">
              <ContactForm />
            </div>
          </div>

          {/* BENEFITS */}
          <div className="grid sm:grid-cols-3 gap-6 mb-24">
            {[
              { icon: Clock, title: "24-Hour Reply", text: "All inquiries are answered personally within 24 hours. No bots, no automated replies." },
              { icon: MessageCircle, title: "Open to Collaborations", text: "Interested in brand partnerships, event appearances, or media features? Let's talk." },
              { icon: CheckCircle2, title: "Based in Durg, C.G.", text: "Vikram is based in Chandrakr Gali Santrabadi, Durg, Chhattisgarh — available for local & national events." },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group p-6 border border-border rounded-xl bg-card hover-lift hover:border-primary card-glow text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center mx-auto mb-4 transition-smooth">
                    <b.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <h2 className="font-display text-lg mb-2 group-hover:text-primary transition-smooth">{b.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* BANNER */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="image-zoom h-64 md:h-80 relative">
              <Image src={coachingImg} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
            </div>
            <div className="absolute inset-0 bg-background/75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Ready?</p>
              <h2 className="text-3xl md:text-5xl font-display mb-4">Your <span className="text-gradient">Transformation</span> Awaits</h2>
              <p className="text-muted-foreground max-w-md mb-6">
                Don&apos;t wait for Monday. Don&apos;t wait for the new year. Start now.
              </p>
              <Link href="/coaching" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium btn-magnetic group">
                View Coaching Plans <Send className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
