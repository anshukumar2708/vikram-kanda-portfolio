"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  gallery1 as g1, gallery2 as g2, gallery3 as g3,
  gallery4 as g4, gallery5 as g5, gallery6 as g6,
  gallery7 as g7, gallery8 as g8, gallery9 as g9,
  competition1, competition2, competition3,
} from "@/lib/images";

type Category = "All" | "Training" | "Competition" | "Posing";

const allItems: { src: string; title: string; tag: string; cat: Category }[] = [
  { src: g1, title: "Heavy Pulls", tag: "Deadlift Day", cat: "Training" },
  { src: competition1, title: "Stage Walk", tag: "India Level", cat: "Competition" },
  { src: g3, title: "Classic Pose", tag: "Posing Practice", cat: "Posing" },
  { src: g4, title: "Bench Press", tag: "Chest Day", cat: "Training" },
  { src: g5, title: "Back Spread", tag: "Posing", cat: "Posing" },
  { src: competition2, title: "Title Moment", tag: "National Stage", cat: "Competition" },
  { src: g7, title: "Shoulder Press", tag: "Shoulders Day", cat: "Training" },
  { src: g2, title: "Bicep Burn", tag: "Arms Day", cat: "Training" },
  { src: competition3, title: "Peak Conditioning", tag: "Competition Prep", cat: "Competition" },
  { src: g8, title: "Sprint Cardio", tag: "Conditioning", cat: "Training" },
  { src: g6, title: "Pull Power", tag: "Back Day", cat: "Training" },
  { src: g9, title: "Gym Session", tag: "Daily Training", cat: "Training" },
];

const categories: Category[] = ["All", "Training", "Competition", "Posing"];

export function GalleryClient() {
  const [active, setActive] = useState<Category>("All");
  const prefersReducedMotion = useReducedMotion();
  const filtered = active === "All" ? allItems : allItems.filter((i) => i.cat === active);

  return (
    <>
      {/* Filter */}
      <div
        role="tablist"
        aria-label="Gallery categories"
        className="flex flex-wrap gap-3 mb-12 animate-fade-in-up"
      >
        {categories.map((c) => {
          const selected = active === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={selected}
              aria-controls="gallery-grid"
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider font-medium transition-smooth ${selected
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "border border-border hover:border-primary hover:text-primary"
                }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        id="gallery-grid"
        role="tabpanel"
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-20"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((it, i) => (
            <motion.figure
              key={`${it.src}-${it.title}`}
              layout={!prefersReducedMotion}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
              className="image-zoom rounded-xl relative overflow-hidden break-inside-avoid hover-lift group"
            >
              <Image
                src={it.src}
                alt={it.title}
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-40 group-hover:opacity-85 transition-smooth" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-xl transition-smooth" />
              <div className="absolute top-4 left-4 bg-primary/0 group-hover:bg-primary text-primary-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full transition-smooth opacity-0 group-hover:opacity-100">
                {it.cat}
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-smooth">
                <p className="text-xs text-primary uppercase tracking-wider mb-1">{it.tag}</p>
                <h3 className="text-lg font-display">{it.title}</h3>
              </figcaption>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/0 group-hover:bg-primary flex items-center justify-center transition-bounce group-hover:scale-110 opacity-0 group-hover:opacity-100">
                <span className="text-primary-foreground text-xl leading-none" aria-hidden="true">+</span>
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
