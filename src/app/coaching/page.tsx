import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Check, ArrowRight, Flame, Star, Users, Trophy, Medal, Zap,
  Video, MessageSquare, BarChart2,
} from "lucide-react";
import { coachingImg, competition1, avatar1, avatar2, avatar3 } from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("coaching");

const plans = [
  {
    name: "Beginner Guidance", price: "₹4,999", period: "/ month",
    desc: "Start your bodybuilding journey with the right foundation.",
    features: ["Training program framework", "Basic nutrition guidance", "Posing fundamentals", "Progress check-ins", "Competition goal planning"],
    featured: false,
  },
  {
    name: "Intermediate", price: "₹12,999", period: "/ month",
    desc: "For dedicated gym-goers targeting competition stage.",
    features: ["Personalised training plan", "Macro nutrition guidance", "Posing practice sessions", "Stage strategy", "WhatsApp support", "CG competition prep", "Monthly review"],
    featured: true,
  },
  {
    name: "Competition Prep", price: "₹24,999", period: "/ month",
    desc: "Full competition preparation from an India-level competitor.",
    features: ["Full competition prep", "Daily check-ins", "Posing refinement", "Peak week protocol", "Stage presence strategy", "CG & India level experience", "Show-day preparation"],
    featured: false,
  },
];

const whyMe = [
  { icon: Medal, label: "Mr. Durg 2018 Winner", text: "Winner of the Mr. Durg Bodybuilding Championship 2018 — champion on home soil." },
  { icon: Trophy, label: "CG State Champion", text: "Real Chhattisgarh state competition experience — not theory." },
  { icon: Users, label: "India Level Competitor", text: "Competed at national level bodybuilding events representing Chhattisgarh." },
  { icon: Star, label: "12+ Years Experience", text: "Over a decade of dedicated competitive bodybuilding experience from Durg." },
  { icon: Zap, label: "Proven Approach", text: "Training and nutrition methods battle-tested on the competition stage." },
];

const includes = [
  { icon: BarChart2, title: "Personalised Plan", text: "Training guidance built around your goals and current level of fitness." },
  { icon: MessageSquare, title: "WhatsApp Support", text: "Direct communication for questions, guidance, and progress updates." },
  { icon: Video, title: "Posing Guidance", text: "Stage-ready posing and presentation tips from a seasoned competitor." },
  { icon: Flame, title: "Competition Mindset", text: "The mental frameworks and discipline habits of a competitive bodybuilder." },
];

const reviews = [
  {
    name: "Rohan Das", role: "Gym Enthusiast, Durg", img: avatar1, stars: 5,
    text: "Vikram's competition experience is real. The guidance on posing and stage prep for Chhattisgarh state shows is genuinely valuable."
  },
  {
    name: "Meera Singh", role: "Fitness Aspirant, C.G.", img: avatar2, stars: 5,
    text: "Getting advice from someone who has actually competed at India level makes all the difference. Vikram is the real deal from Durg."
  },
  {
    name: "Karan Joshi", role: "Bodybuilding Enthusiast", img: avatar3, stars: 5,
    text: "As someone preparing for a Chhattisgarh state competition, guidance from an experienced competitor like Vikram is incredibly helpful."
  },
];

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bodybuilding Coaching by Vikram Kanda",
  description: "Three-tier coaching programs from an India-level bodybuilder.",
  brand: { "@type": "Person", name: "Vikram Kanda" },
  offers: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.replace(/[^0-9]/g, ""),
    priceCurrency: "INR",
    url: `${siteConfig.url}/coaching`,
    availability: "https://schema.org/InStock",
  })),
};

const coachingBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Coaching", path: "/coaching" },
]);

export default function CoachingPage() {
  return (
    <>
      <JsonLd id="coaching-ld" data={offerJsonLd} />
      <JsonLd id="coaching-breadcrumb-ld" data={coachingBreadcrumb} />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* HEADER */}
          <Reveal className="max-w-3xl mb-20 text-center mx-auto">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 flex items-center justify-center gap-2">
              <Flame className="w-4 h-4" /> Coaching Programs
            </p>
            <h1 className="text-5xl md:text-7xl font-display mb-4">
              Learn From <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Competition prep guidance from a Chhattisgarh state champion who has competed at the India national level.
            </p>
          </Reveal>

          {/* HERO IMAGE */}
          <div className="relative rounded-2xl overflow-hidden mb-24 animate-fade-in">
            <div className="image-zoom h-[30rem] sm:h-[35rem] relative">
              <Image src={coachingImg} alt="Vikram Kanda competition prep" fill sizes="100vw" className="object-cover" priority />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-md">
                <p className="text-primary uppercase tracking-wider text-sm mb-2">Durg, Chhattisgarh</p>
                <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
                  Compete Like a <span className="text-gradient">Champion</span>
                </h2>
                <p className="text-foreground/70 text-sm">
                  Guidance from a CG state champion and India-level competitor.
                </p>
              </div>
            </div>
          </div>

          {/* PRICING */}
          {/* <div className="grid md:grid-cols-3 gap-6 mb-24 items-stretch">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative p-8 rounded-2xl border-2 flex flex-col transition-smooth hover-lift card-glow h-full ${plan.featured
                    ? "border-primary bg-card shadow-glow md:scale-105"
                    : "border-border bg-card hover:border-primary/60"
                    }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-glow">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-display mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-5xl font-display text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md uppercase tracking-wider text-sm font-medium transition-smooth group ${plan.featured
                      ? "bg-gradient-primary text-primary-foreground btn-magnetic"
                      : "border border-primary text-foreground hover:bg-primary hover:text-primary-foreground"
                      }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div> */}

          {/* WHY ME */}
          <div className="mb-24 py-20 border-y border-border">
            <Reveal className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Why Me</p>
              <h2 className="text-4xl md:text-5xl font-display">
                Why <span className="text-gradient">Vikram Kanda?</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyMe.map((w, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group p-6 border border-border rounded-xl bg-card hover-lift hover:border-primary card-glow text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center mx-auto mb-4 transition-smooth">
                      <w.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                    </div>
                    <h3 className="font-display text-lg mb-1 transition-smooth">{w.label}</h3>
                    <p className="text-sm text-muted-foreground">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* WHAT'S INCLUDED */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal className="image-zoom rounded-2xl overflow-hidden h-[500px] md:h-[600px] shadow-elegant relative">
                <Image
                  src={competition1}
                  alt="Competition coaching"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal direction="left" className="space-y-6">
                <p className="text-primary uppercase tracking-[0.3em] text-sm">What You Get</p>
                <h2 className="text-4xl md:text-5xl font-display">
                  Full <span className="text-gradient">Support</span>
                </h2>
                <div className="space-y-5">
                  {includes.map((inc, i) => (
                    <Reveal key={i} delay={i * 0.1} direction="left">
                      <div className="group flex gap-4 p-4 border border-border rounded-xl bg-card hover:border-primary transition-smooth hover-lift">
                        <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center shrink-0 transition-smooth">
                          <inc.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                        </div>
                        <div>
                          <h3 className="font-display text-base mb-1 group-hover:text-primary transition-smooth">{inc.title}</h3>
                          <p className="text-sm text-muted-foreground">{inc.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* REVIEWS */}
          <div className="mb-20">
            <Reveal className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Community</p>
              <h2 className="text-4xl md:text-5xl font-display">What People <span className="text-gradient">Say</span></h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <figure className="group p-6 border border-border rounded-xl bg-card hover-lift hover:border-primary card-glow h-full">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: r.stars }).map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-primary text-primary group-hover:text-yellow-500 group-hover:fill-yellow-500" />
                      ))}
                    </div>
                    <blockquote className="text-sm text-foreground/80 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="flex items-center gap-3">
                      <div className="image-zoom w-10 h-10 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-smooth relative">
                        <Image src={r.img} alt={r.name} fill sizes="40px" className="object-cover" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{r.name}</div>
                        <div className="text-xs text-muted-foreground">{r.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-12 md:p-20 text-center bg-card">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-display mb-4">Ready to <span className="text-gradient">Compete?</span></h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Get competition prep guidance from Vikram Kanda — Chhattisgarh&apos;s own India-level bodybuilder, based in Durg.
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
