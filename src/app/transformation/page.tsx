import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Flame, Quote, Trophy } from "lucide-react";
import {
  transformation, physique1, physique2,
  competition1, competition2, gallery5, aboutPortrait,
  avatar1, avatar2, avatar3, avatar4,
  videoClips,
  competition4,
} from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { VideoCard } from "@/components/media/video-card";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "The transformation journey of Vikram Kanda — from beginnings in Durg to Chhattisgarh state champion and India-level bodybuilding competitor.",
  alternates: { canonical: "/transformation" },
  openGraph: {
    title: "Transformation Journey — Vikram Kanda",
    description: "From beginnings to bodybuilder — the full transformation journey.",
    url: "/transformation",
    images: [transformation],
  },
};

const milestones = [
  { year: "2012", title: "First Step", text: "Walked into a gym in Durg for the first time. 58kg, skinny, unsure — but hungry for something more.", img: physique1, tag: "The Beginning" },
  { year: "2015", title: "First Competition", text: "Stepped on stage for the first time at a Chhattisgarh state-level bodybuilding show. Placed top 5.", img: competition1, tag: "CG State Debut" },
  { year: "2016", title: "Chhattisgarh Champion", text: "Won the Chhattisgarh state bodybuilding title in Classic Physique — my first championship gold.", img: competition2, tag: "CG State Gold" },
  { year: "2018", title: "Mr. Durg — Champion", text: "Won the prestigious Mr. Durg Bodybuilding Championship in 2018 — a defining victory on home soil.", img: competition4, tag: "Mr. Durg 2018 🏆" },
  { year: "2018", title: "India Level Stage", text: "Riding the momentum of the Mr. Durg title, qualified and competed at the national level championship — representing Chhattisgarh.", img: gallery5, tag: "India Level" },
  { year: "2019", title: "State Title Retained", text: "Reclaimed the Chhattisgarh state title in Men's Physique category — consistency and dedication year after year.", img: physique2, tag: "CG Champion" },
  { year: "2021", title: "Growing Presence", text: "Continued competing and growing as a public figure in Chhattisgarh's bodybuilding community.", img: aboutPortrait, tag: "Public Figure" },
  { year: "Today", title: "The Journey Continues", text: "Still pushing limits on the competition stage, representing Durg and Chhattisgarh at India-level events.", img: competition1, tag: "Ongoing Legacy" },
];

const competitionHighlights = [
  { event: "CG State Championship", result: "Gold — Classic Physique", year: "2016", name: "Durg, CG", img: avatar1 },
  { event: "Mr. Durg Championship", result: "Winner 🏆 — Mr. Durg 2018", year: "2018", name: "Durg, CG", img: avatar2 },
  { event: "India Level National", result: "Represented Chhattisgarh", year: "2018", name: "National Stage", img: avatar3 },
  { event: "CG State Title", result: "Gold — Men's Physique", year: "2019", name: "Durg, CG", img: avatar4 },
];

const journeyJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Transformation Journey of Vikram Kanda",
  about: { "@type": "Person", name: "Vikram Kanda" },
  hasPart: milestones.map((m) => ({
    "@type": "Event",
    name: m.title,
    startDate: m.year,
    description: m.text,
  })),
};

export default function TransformationPage() {
  return (
    <>
      <JsonLd id="journey-ld" data={journeyJsonLd} />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* HEADER */}
          <Reveal className="max-w-3xl mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4" /> Journey
            </p>
            <h1 className="text-5xl md:text-7xl font-display mb-4">
              From <span className="text-gradient">Then</span> to <span className="text-gradient">Now</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Transformation isn&apos;t a single moment — it&apos;s a thousand small decisions stacked over years of relentless consistency.
            </p>
          </Reveal>

          {/* HERO IMAGE */}
          <div className="image-zoom rounded-2xl shadow-elegant mb-24 animate-fade-in overflow-hidden relative h-[18rem] sm:h-[28rem]">
            <Image src={transformation} alt="Transformation physique" fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* TIMELINE */}
          <div className="mb-24">
            <Reveal className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Timeline</p>
              <h2 className="text-4xl md:text-5xl font-display">The <span className="text-gradient">Road</span> to the Top</h2>
            </Reveal>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />

              {milestones.map((m, i) => (
                <Reveal
                  key={`${m.year}-${i}`}
                  delay={i * 0.08}
                  className={`relative mb-12 flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                >
                  <div className="w-full md:w-[45%] group">
                    <div className="p-6 border border-border bg-card rounded-xl hover-lift hover:border-primary">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-wider border border-primary/30 text-primary px-2 py-0.5 rounded">{m.year}</span>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">{m.tag}</span>
                      </div>
                      <h3 className="text-2xl font-display mb-2 group-hover:text-primary transition-smooth">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-card animate-pulse-glow z-10" />

                  <div className="w-full md:w-[45%]">
                    <div className="image-zoom rounded-xl overflow-hidden hover-lift relative h-[400px] md:h-[500px]">
                      <Image
                        src={m.img}
                        alt={m.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* TRAINING REELS */}
          <div className="mb-24">
            <Reveal className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">In Motion</p>
              <h2 className="text-4xl md:text-5xl font-display">Training <span className="text-gradient">Reels</span></h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                A closer look at the workouts, drills, and stage prep that built the journey.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {videoClips.slice(0, 8).map((v, i) => (
                <Reveal key={v.src} delay={i * 0.06}>
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

          {/* QUOTE */}
          <div className="py-20 border-y border-border mb-24 text-center">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-4xl font-display max-w-3xl mx-auto leading-tight">
              &ldquo;I didn&apos;t have the best genetics. I didn&apos;t have the best gym. I had <span className="text-gradient">the best work ethic</span> — and that was enough.&rdquo;
            </blockquote>
            <cite className="text-sm uppercase tracking-[0.3em] text-muted-foreground mt-6 block not-italic">— Vikram Kanda, Bodybuilder — Durg, Chhattisgarh</cite>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mb-24">
            <Reveal className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Competition Record</p>
              <h2 className="text-4xl md:text-5xl font-display">Key <span className="text-gradient">Highlights</span></h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A track record of competing and winning at Chhattisgarh state and India national level events.</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {competitionHighlights.map((c, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group p-6 border border-border rounded-xl bg-card hover-lift hover:border-primary card-glow h-full">
                    <div className="image-zoom w-20 h-20 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-smooth mx-auto mb-4 relative">
                      <Image src={c.img} alt={c.event} fill sizes="80px" className="object-cover" />
                    </div>
                    <h3 className="text-center font-display text-lg mb-4 transition-smooth">{c.event}</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Year</dt>
                        <dd className="text-foreground/80">{c.year}</dd>
                      </div>
                      <div className="h-0.5 bg-border" />
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Result</dt>
                        <dd className="text-primary font-semibold group-hover:text-muted-foreground">{c.result}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Location</dt>
                        <dd className="text-foreground/80">{c.name}</dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* BANNER */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 p-12 md:p-16 bg-card mb-20">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <Trophy className="w-12 h-12 text-primary mb-4 mx-auto md:mx-0" />
                <h2 className="text-3xl md:text-5xl font-display mb-2">The Chhattisgarh <span className="text-gradient">Legacy</span></h2>
                <p className="text-muted-foreground max-w-md">
                  State champion. India-level competitor. Public figure from Durg, Chhattisgarh — the journey is far from over.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-md uppercase tracking-wider text-sm font-medium btn-magnetic group shrink-0"
              >
                Get in Touch <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
