import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Trophy, Target, Heart, Zap, Medal, Quote, ArrowRight, Flame, Award, Star } from "lucide-react";
import {
  aboutPortrait as portrait,
  aboutPortrait2,
  competition1,
  competition2,
  gallery5,
  gallery6,
} from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The journey of Vikram Kanda — competitive bodybuilder and public figure from Durg, Chhattisgarh. Mr. Durg 2018, state champion, India-level competitor.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Vikram Kanda",
    description: "The journey of bodybuilder Vikram Kanda — from passion to profession.",
    url: "/about",
    type: "profile",
    images: [portrait],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vikram Kanda",
    images: [portrait],
  },
};

const skillBars = [
  { label: "Strength Training", pct: 98 },
  { label: "Competition Prep", pct: 95 },
  { label: "Nutrition Science", pct: 90 },
  { label: "Posing & Presentation", pct: 97 },
  { label: "Stage Performance", pct: 96 },
];

const certifications = [
  { icon: Medal, title: "Mr. Durg 2018 — Winner", body: "Mr. Durg Bodybuilding Championship" },
  { icon: Trophy, title: "Chhattisgarh State Champion", body: "Classic Physique Category" },
  { icon: Star, title: "India Level Competitor", body: "National Bodybuilding Circuit" },
  { icon: Award, title: "Public Figure — Durg C.G.", body: "Bodybuilding & Fitness Community" },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vikram Kanda",
  url: `${siteConfig.url}/about`,
  mainEntity: {
    "@type": "Person",
    name: "Vikram Kanda",
    jobTitle: "Competitive Bodybuilder",
    description: siteConfig.description,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd id="about-ld" data={aboutJsonLd} />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* PAGE HEADER */}
          <Reveal className="max-w-4xl mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4" /> About
            </p>
            <h1 className="text-5xl md:text-7xl font-display mb-6">
              The Man Behind <span className="text-gradient">The Iron</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From the gym floors of Station Road Santrabadi, Durg to competition stages across
              Chhattisgarh and India — this is the story of sweat, sacrifice, and relentless ambition.
            </p>
          </Reveal>

          {/* BIO */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <Reveal direction="right" className="relative">
              <div className="image-zoom rounded-2xl overflow-hidden aspect-[4/5] shadow-elegant relative">
                <Image src={portrait} alt="Vikram Kanda portrait" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-primary/30 rounded-xl p-5 shadow-glow animate-float hidden md:block">
                <div className="text-3xl font-display text-gradient">C.G.</div>
                <div className="text-3xl font-display text-gradient">Champ</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Durg, C.G.</div>
              </div>
            </Reveal>
            <Reveal direction="left" className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I&apos;m <span className="text-primary font-semibold">Vikram Kanda</span> — a competitive bodybuilder and public figure from Station Road Santrabadi, Durg, Chhattisgarh. I believe that strength is built when no one&apos;s watching. Every rep, every meal, every early morning is a brick in the temple of discipline.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Growing up in Durg, I was drawn to the iron at a young age. What started as a passion for fitness grew into a serious pursuit of competitive bodybuilding. In 2018, I won the <span className="text-primary font-semibold">Mr. Durg Bodybuilding Championship</span> — a title that represents pride for our city.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                As a public figure in the bodybuilding community, I strive to inspire others in Chhattisgarh and beyond — proving that with enough discipline and dedication, anyone can build an extraordinary physique.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { val: "Mr. Durg", label: "2018 Winner" },
                  { val: "18+", label: "Years Training" },
                  { val: "C.G.", label: "State Champion" },
                  { val: "India", label: "National Stage" },
                ].map((s) => (
                  <div key={s.label} className="p-4 border border-border rounded-lg bg-card hover:border-primary transition-smooth group">
                    <div className="text-2xl font-display text-gradient group-hover:scale-110 transition-smooth origin-left inline-block">{s.val}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* CORE VALUES */}
          <div className="mb-24">
            <Reveal className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Core Values</p>
              <h2 className="text-4xl md:text-5xl font-display">What <span className="text-gradient">Drives Me</span></h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Trophy, title: "Champion", text: "Mr. Durg 2018 winner, Chhattisgarh state champion, and India-level competitor — representing Durg with pride." },
                { icon: Target, title: "Focused", text: "20+ years of structured, dedicated training driven by a love for competitive bodybuilding." },
                { icon: Heart, title: "Passionate", text: "Genuine love for the iron. The gym isn't a punishment — it's a temple of discipline and growth." },
                { icon: Zap, title: "Inspiration", text: "A public figure in the C.G. bodybuilding community — motivating others through his journey and stage presence." },
              ].map((v, i) => (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="group p-6 border border-border rounded-xl bg-card tilt-card hover:border-primary card-glow h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-smooth">
                      <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth transition-bounce group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-display mb-2 transition-smooth">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal direction="right" className="space-y-6">
                <p className="text-primary uppercase tracking-[0.3em] text-sm">Expertise</p>
                <h2 className="text-4xl md:text-5xl font-display">Elite <span className="text-gradient">Skills</span></h2>
                <p className="text-muted-foreground leading-relaxed">
                  Built over 18+ years on competition floors, state stages, and the gym in Durg, Chhattisgarh — these are the skills that define a dedicated competitive bodybuilder.
                </p>
                {skillBars.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.1} direction="none">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{s.label}</span>
                      <span className="text-sm text-primary font-semibold">{s.pct}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full progress-bar"
                        style={{ ["--fill" as string]: `${s.pct}%` } as React.CSSProperties}
                      />
                    </div>
                  </Reveal>
                ))}
              </Reveal>
              <Reveal direction="left" className="grid grid-cols-2 gap-4">
                {[competition1, competition2, gallery5, gallery6].map((img, i) => (
                  <div key={i} className="image-zoom rounded-xl overflow-hidden aspect-square hover-lift relative">
                    <Image src={img} alt="" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </Reveal>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="mb-24">
            <Reveal className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Achievements</p>
              <h2 className="text-4xl md:text-5xl font-display">Competition & <span className="text-gradient">Awards</span></h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((c, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group p-6 border border-border rounded-xl bg-card hover-lift hover:border-primary card-glow text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center mx-auto mb-4 transition-smooth">
                      <c.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                    </div>
                    <h3 className="text-lg font-display mb-1 transition-smooth">{c.title}</h3>
                    <p className="text-xs text-muted-foreground">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* PHILOSOPHY QUOTE */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image src={aboutPortrait2} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
              <div className="absolute inset-0 bg-background/70" />
            </div>
            <div className="relative py-20 px-6 text-center max-w-3xl mx-auto">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-4xl font-display leading-tight mb-6">
                &ldquo;Iron never lies. You can fake your way through life, but <span className="text-gradient">you can&apos;t fake a physique.</span> The mirror always tells the truth.&rdquo;
              </blockquote>
              <cite className="text-sm uppercase tracking-[0.3em] text-muted-foreground not-italic">— Vikram Kanda</cite>
              <div className="mt-10">
                <Link
                  href="/transformation"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium btn-magnetic group"
                >
                  See The Journey <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
