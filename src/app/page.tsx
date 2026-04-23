import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight, Trophy, Dumbbell, Flame, Star,
  Medal, Quote, ChevronRight, Zap, Target, Shield,
} from "lucide-react";
import {
  gallery1, gallery3,
  competition1, competition2, competition3,
  coachingImg, nutritionImg,
  avatar1, avatar2, avatar3, avatar4,
  physique1,
  heroBannerDesktop, heroBannerMobile,
  videoClips,
} from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { VideoCard } from "@/components/media/video-card";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Official portfolio of Vikram Kanda — competitive bodybuilder and public figure from Durg, Chhattisgarh. Competing at India & CG state level.",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description:
      "Official portfolio of Vikram Kanda — competitive bodybuilder and public figure from Durg, Chhattisgarh.",
    url: "/",
    images: ["/images/vikram-banner-5.png"],
  },
};

const testimonials = [
  { name: "Rahul Sharma", role: "Bodybuilding Enthusiast, Durg", img: avatar1, text: "Vikram is a true inspiration in the Chhattisgarh bodybuilding scene. His dedication on stage is unmatched." },
  { name: "Priya Verma", role: "Fitness Follower", img: avatar2, text: "Following Vikram's journey has motivated me to start my own fitness path. A true public figure in CG." },
  { name: "Arjun Mehta", role: "Gym Enthusiast, Durg", img: avatar3, text: "Watching Vikram compete at the India level while representing Chhattisgarh is something every gym-goer from our city is proud of." },
  { name: "Sneha Kapoor", role: "Fitness Fan", img: avatar4, text: "Vikram's physique and discipline on stage represent what hard work looks like. A true champion of Chhattisgarh!" },
];

const achievements = [
  { year: "2013", title: "Competition Debut", category: "Chhattisgarh State Level", icon: Flame },
  { year: "2016", title: "CG State Champion", category: "Classic Physique Category", icon: Trophy },
  { year: "2018", title: "Mr. Durg — Winner 🏆", category: "Mr. Durg Bodybuilding Championship", icon: Medal },
  { year: "2018", title: "India Level — Qualifier", category: "National Bodybuilding Circuit", icon: Star },
  { year: "2019", title: "Chhattisgarh Title", category: "Men's Physique Open — Gold", icon: Trophy },
  { year: "2021", title: "India Level Competitor", category: "National Championship Stage", icon: Shield },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Vikram Kanda",
    jobTitle: "Competitive Bodybuilder",
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd id="home-ld" data={homeJsonLd} />
      <div>
        {/* ── HERO ── */}
        <section className="relative h-screen min-h-[40rem] w-full overflow-hidden" aria-label="Hero">
          <div className="absolute right-0 top-0 inset-0 animate-ken-burns">
            <Image
              src={heroBannerDesktop}
              alt="Vikram Kanda flexing in dark gym"
              fill
              priority
              sizes="100vw"
              className="object-cover hidden md:block"
            />
            <Image
              src={heroBannerMobile}
              alt="Vikram Kanda flexing in dark gym"
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
            />
          </div>
          <div className="absolute inset-0 bg-background/40" />

          <div className="relative h-full container mx-auto px-4 sm:px-6 flex flex-col justify-center pt-16 sm:pt-24">
            <div className="max-w-3xl w-full flex flex-col items-start gap-6">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-display leading-[0.85] animate-fade-in-up delay-100">
                VIKRAM
                <span className="text-gradient ml-2">KANDA</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-xl animate-fade-in-up delay-200">
                Forged in iron. Driven by discipline. Mr. India stage veteran building champions — one rep at a time.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
                {["Mr. Durg 2018 Winner", "Chhattisgarh State Champion", "India Level Competitor"].map((b) => (
                  <span key={b} className="text-[10px] sm:text-xs uppercase tracking-wider border border-primary/40 text-white sm:text-primary px-3 py-1 rounded-full bg-primary/10">
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 animate-fade-in-up delay-500 mt-5">
                <Link
                  href="/coaching"
                  className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium btn-magnetic"
                >
                  Connect
                  <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth hover:-translate-y-1"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="container mx-auto px-4 sm:px-6 py-20" aria-label="Stats">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "12+", label: "Years Training", icon: Dumbbell },
              { num: "20+", label: "Competitions Entered", icon: Trophy },
              { num: "C.G.", label: "State Champion", icon: Medal },
              { num: "India", label: "National Competitor", icon: Star },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="group p-6 border border-border rounded-xl bg-card tilt-card hover:border-primary card-glow h-full">
                  <s.icon className="w-8 h-8 text-primary mb-4 transition-bounce group-hover:scale-125 group-hover:rotate-12" />
                  <div className="text-4xl font-display text-gradient mb-1">{s.num}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── MARQUEE TICKER ── */}
        <section className="py-6 border-y border-border overflow-hidden bg-primary/5" aria-hidden="true">
          <div className="ticker-wrap">
            <div className="ticker-track">
              {[0, 1].map((ri) => (
                <div key={ri} className="flex items-center gap-12 px-6">
                  {["Mr. India Champion", "North India Title", "Classic Physique", "500+ Clients", "12 Years Experience", "Competition Prep", "Elite Nutrition", "Online Coaching", "Stage Ready"].map((t) => (
                    <span key={t} className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                      <Flame className="w-4 h-4 text-primary shrink-0" /> {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT PREVIEW ── */}
        <section className="container mx-auto px-4 sm:px-6 py-24" aria-label="About preview">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right" className="relative">
              <div className="image-zoom rounded-2xl overflow-hidden aspect-[4/5] shadow-elegant relative">
                <Image src={physique1} alt="Vikram Kanda" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-primary/30 rounded-xl p-5 shadow-glow animate-float hidden md:block">
                <div className="text-3xl font-display text-gradient">C.G.</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">State Champion</div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
            </Reveal>
            <Reveal direction="left" className="space-y-6">
              <p className="text-primary uppercase tracking-[0.3em] text-sm">About Vikram</p>
              <h2 className="text-4xl md:text-6xl font-display">
                Built From <span className="text-gradient">Nothing</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Vikram Kanda is a competitive bodybuilder and public figure from Durg, Chhattisgarh — winner of the <span className="text-primary font-semibold">Mr. Durg 2018 Championship</span>, Chhattisgarh state champion, and national-level competitor.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                His philosophy is simple: <span className="text-primary font-semibold">discipline beats talent every time.</span> From the gyms of Chandrakr Gali Santrabadi, Durg to the national stage — every title is built on relentless consistency.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { val: "Mr. Durg", label: "2018 Winner" },
                  { val: "C.G.", label: "State Champ" },
                  { val: "India", label: "National Stage" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 border border-border rounded-lg bg-card hover:border-primary transition-smooth">
                    <div className="text-2xl font-display text-gradient">{s.val}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary uppercase tracking-wider text-sm group hover:gap-4 transition-all"
              >
                Full Story <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-2" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section className="py-24 bg-card/50 border-y border-border" aria-label="Achievements">
          <div className="container mx-auto px-4 sm:px-6">
            <Reveal className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Achievements</p>
              <h2 className="text-4xl md:text-6xl font-display">
                Chhattisgarh & <span className="text-gradient">India Level</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                A journey of dedication — from C.G. state stages to India-level national championships.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((a, i) => (
                <Reveal key={a.title + i} delay={i * 0.08}>
                  <div className="group p-6 border border-border rounded-xl bg-card hover-lift hover:border-primary card-glow h-full">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider border border-primary/30 text-primary px-2 py-1 rounded">{a.year}</span>
                      <a.icon className="w-6 h-6 text-primary transition-bounce group-hover:scale-125 group-hover:rotate-12" />
                    </div>
                    <h3 className="text-xl font-display mb-1 group-hover:text-primary transition-smooth">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">{a.category}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY PREVIEW ── */}
        <section className="container mx-auto px-4 sm:px-6 py-24" aria-label="Gallery preview">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-2">On Stage</p>
              <h2 className="text-4xl md:text-6xl font-display">The <span className="text-gradient">Grind</span></h2>
            </div>
            <Link href="/gallery" className="text-sm uppercase tracking-wider hover:text-primary transition-smooth flex items-center gap-2 group">
              View All <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: gallery1, label: "Heavy Pulls", tag: "Training" },
              { src: competition1, label: "Stage Ready", tag: "India Level" },
              { src: gallery3, label: "Posing", tag: "Competition" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="image-zoom rounded-xl relative aspect-[3/4] hover-lift group overflow-hidden">
                  <Image src={item.src} alt={item.label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-smooth" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-xl transition-smooth" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-smooth">
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">{item.tag}</p>
                    <h3 className="text-xl font-display">{item.label}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── REELS / VIDEOS ── */}
        <section className="py-24 bg-card/50 border-y border-border" aria-label="Video reels">
          <div className="container mx-auto px-4 sm:px-6">
            <Reveal className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-2">In Motion</p>
                <h2 className="text-4xl md:text-6xl font-display">
                  Reels & <span className="text-gradient">Moments</span>
                </h2>
                <p className="text-muted-foreground mt-3 max-w-xl">
                  Training drills, posing practice, and behind-the-scenes clips — muted autoplay, tap for sound.
                </p>
              </div>
              <Link href="/gallery" className="text-sm uppercase tracking-wider hover:text-primary transition-smooth flex items-center gap-2 group">
                More Videos <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {videoClips.slice(0, 4).map((v, i) => (
                <Reveal key={v.src} delay={i * 0.08}>
                  <VideoCard
                    src={v.src}
                    poster={v.poster}
                    title={v.title}
                    tag={v.tag}
                    aspectClassName="aspect-[9/16]"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES SNAPSHOT ── */}
        <section className="py-24" aria-label="Services">
          <div className="container mx-auto px-4 sm:px-6">
            <Reveal className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">What I Offer</p>
              <h2 className="text-4xl md:text-6xl font-display">
                Elite <span className="text-gradient">Services</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: coachingImg, icon: Dumbbell, title: "Personal Training", text: "In-person & online programming engineered for your specific goals and body type." },
                { img: nutritionImg, icon: Target, title: "Nutrition Coaching", text: "Custom macro plans, meal timing, and supplement stacks for maximum results." },
                { img: competition2, icon: Zap, title: "Competition Prep", text: "Peak week protocols, posing coaching, and stage-ready conditioning." },
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="group rounded-2xl overflow-hidden border border-border hover:border-primary transition-smooth card-glow h-full">
                    <div className="image-zoom h-48 relative">
                      <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </div>
                    <div className="p-6">
                      <s.icon className="w-8 h-8 text-primary mb-3 transition-bounce group-hover:scale-125" />
                      <h3 className="text-xl font-display mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{s.text}</p>
                      <Link href="/services" className="text-xs uppercase tracking-wider text-primary flex items-center gap-1 group/link hover:gap-3 transition-all">
                        Learn More <ChevronRight className="w-3 h-3 transition-smooth group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE ── */}
        <section className="py-24 container mx-auto px-4 sm:px-6" aria-label="Philosophy">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image src={competition3} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
              <div className="absolute inset-0 bg-background/80" />
            </div>
            <div className="relative text-center py-20 px-6 max-w-3xl mx-auto">
              <Quote className="w-12 h-12 text-primary/40 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-4xl font-display leading-tight mb-6">
                &ldquo;The <span className="text-gradient">body</span> achieves what the <span className="text-gradient">mind</span> believes. Every rep is a vote for the person you want to become.&rdquo;
              </blockquote>
              <cite className="text-sm uppercase tracking-[0.3em] text-muted-foreground not-italic">— Vikram Kanda, Bodybuilder — Durg, Chhattisgarh</cite>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-card/50 border-y border-border" aria-label="Testimonials">
          <div className="container mx-auto px-4 sm:px-6">
            <Reveal className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Community</p>
              <h2 className="text-4xl md:text-6xl font-display">
                Voices of <span className="text-gradient">Support</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <figure className="group p-6 border border-border rounded-xl bg-card hover-lift hover:border-primary card-glow h-full">
                    <Quote className="w-6 h-6 text-primary/40 mb-4" />
                    <blockquote className="text-sm text-foreground/80 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</blockquote>
                    <figcaption className="flex items-center gap-3">
                      <div className="image-zoom w-10 h-10 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-smooth relative">
                        <Image src={t.img} alt={t.name} fill sizes="40px" className="object-cover" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="container mx-auto px-4 sm:px-6 py-24" aria-label="Call to action">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-12 md:p-20 text-center bg-card">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Follow the Journey</p>
              <h2 className="text-4xl md:text-6xl font-display mb-4">Get <span className="text-gradient">Inspired</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Follow Vikram&apos;s bodybuilding journey — from the gyms of Durg, Chhattisgarh to the national competition stage.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium btn-magnetic group"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/coaching"
                  className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
