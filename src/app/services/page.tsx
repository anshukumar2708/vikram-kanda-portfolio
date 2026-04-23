import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Dumbbell, Apple, Users, Video, ArrowRight, CheckCircle2,
  Flame, MessageCircle, Clock, BarChart3, Target,
} from "lucide-react";
import { coachingImg, nutritionImg, onlineImg, gallery1 } from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal training, nutrition coaching, posing & stage craft, and competition prep by Vikram Kanda — India-level competitive bodybuilder from Durg, Chhattisgarh.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Vikram Kanda",
    description: "Training, nutrition, posing & stage craft, and competition prep.",
    url: "/services",
    images: [coachingImg],
  },
};

const services = [
  {
    icon: Dumbbell, img: coachingImg, title: "Strength Training",
    text: "12+ years of competitive bodybuilding experience — a proven approach to building strength and a competition-ready physique.",
    features: ["Progressive overload principles", "Competition-focused programming", "Phase periodisation", "Chhattisgarh & India stage tested"],
  },
  {
    icon: Apple, img: nutritionImg, title: "Nutrition & Diet",
    text: "Competition-tested nutrition strategies for cutting, bulking, and peak week protocols developed through years of competing.",
    features: ["Macro-based nutrition approach", "Cutting & bulking phases", "Peak week preparation", "Supplement guidance"],
  },
  {
    icon: Video, img: onlineImg, title: "Posing & Stage Craft",
    text: "Stage presence, mandatory poses, and presentation skills refined across Chhattisgarh and India-level competition stages.",
    features: ["Mandatory pose practice", "Stage presentation skills", "Competition day strategy", "Physique conditioning"],
  },
  {
    icon: Users, img: gallery1, title: "Competition Prep",
    text: "Compete at the state and national level with a battle-tested preparation system built from real competition experience.",
    features: ["CG & India level prep", "Peak conditioning protocol", "Stage strategy", "Competition experience sharing"],
  },
];

const process = [
  { step: "01", icon: MessageCircle, title: "Connect", text: "Reach out via the contact page with your bodybuilding goals and background." },
  { step: "02", icon: BarChart3, title: "Discuss Goals", text: "Share your competition aspirations, current training level, and where you want to go." },
  { step: "03", icon: Target, title: "Get Guidance", text: "Learn from a competitor who has represented Chhattisgarh and competed at India level." },
  { step: "04", icon: Clock, title: "Train & Compete", text: "Apply proven training, nutrition, and posing knowledge to your competition preparation." },
];

const faqs = [
  { q: "What competitions has Vikram competed in?", a: "Vikram has competed at the Chhattisgarh state level bodybuilding championships and represented C.G. at India-level national bodybuilding events." },
  { q: "Is Vikram based in Durg, Chhattisgarh?", a: "Yes, Vikram is based in Chandrakr Gali Santrabadi, Durg, Chhattisgarh and is an active member of the local bodybuilding community." },
  { q: "What category does Vikram compete in?", a: "Vikram competes in Classic Physique and Men's Physique categories at both Chhattisgarh state level and India national level events." },
  { q: "How can I connect with Vikram?", a: "You can reach out through the contact page for collaborations, media inquiries, event appearances, or general bodybuilding discussions." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bodybuilding Coaching",
  provider: { "@type": "Person", name: "Vikram Kanda", url: siteConfig.url },
  areaServed: { "@type": "Place", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bodybuilding Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.text },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd id="services-ld" data={servicesJsonLd} />
      <JsonLd id="services-faq-ld" data={faqJsonLd} />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* HEADER */}
          <Reveal className="max-w-3xl mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4" /> Services
            </p>
            <h1 className="text-5xl md:text-7xl font-display mb-4">
              Built On <span className="text-gradient">Real Experience</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Training, nutrition, posing, and competition prep — everything refined through years of competing at Chhattisgarh and India level.
            </p>
          </Reveal>

          {/* SERVICE CARDS */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <article className="group border border-border rounded-2xl bg-card hover:border-primary transition-smooth card-glow overflow-hidden h-full">
                  <div className="image-zoom h-[20rem] sm:h-[30rem] overflow-hidden relative">
                    <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-110 transition-smooth" />
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-smooth" />
                    <div className="flex items-start mb-4">
                      <s.icon className="w-10 h-10 text-primary transition-bounce group-hover:scale-125 group-hover:rotate-12" />
                    </div>
                    <h2 className="text-2xl font-display mb-3 group-hover:text-primary transition-smooth">{s.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{s.text}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary hover:gap-4 transition-all group/link">
                      Inquire Now <ArrowRight className="w-4 h-4 transition-smooth group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* HOW IT WORKS */}
          <div className="mb-24 py-20 border-y border-border">
            <Reveal className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">The Process</p>
              <h2 className="text-4xl md:text-5xl font-display">How It <span className="text-gradient">Works</span></h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center mx-auto transition-smooth">
                        <p.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border-2 border-primary text-primary text-xs font-bold flex items-center justify-center">{p.step}</span>
                    </div>
                    <h3 className="text-lg font-display mb-2 group-hover:text-primary transition-smooth">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-24">
            <Reveal className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Questions</p>
              <h2 className="text-4xl md:text-5xl font-display">Frequently <span className="text-gradient">Asked</span></h2>
            </Reveal>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <details className="group p-6 border border-border rounded-xl bg-card hover:border-primary transition-smooth card-glow">
                    <summary className="font-display text-lg cursor-pointer group-hover:text-primary transition-smooth list-none flex items-center justify-between">
                      {f.q}
                      <ArrowRight className="w-4 h-4 text-primary transition-smooth group-open:rotate-90" />
                    </summary>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-12 md:p-20 text-center bg-card">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-display mb-4">Want to <span className="text-gradient">Connect?</span></h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Reach out for collaborations, event appearances, or to discuss the world of competitive bodybuilding.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium btn-magnetic group">
                Get in Touch <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
