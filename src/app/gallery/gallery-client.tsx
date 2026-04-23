"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  gallery1 as g1, gallery2 as g2, gallery3 as g3,
  gallery4 as g4, gallery5 as g5, gallery6 as g6,
  gallery7 as g7, gallery8 as g8, gallery9 as g9,
  competition1, competition2, competition3,
  extraImages, videoClips,
} from "@/lib/images";
import { VideoCard } from "@/components/media/video-card";

type Category = "All" | "Training" | "Competition" | "Posing" | "Videos";

type MediaItem = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  tag: string;
  cat: Category;
};

const photoItems: MediaItem[] = [
  { kind: "image", src: g1, title: "Heavy Pulls", tag: "Deadlift Day", cat: "Training" },
  { kind: "image", src: competition1, title: "Stage Walk", tag: "India Level", cat: "Competition" },
  { kind: "image", src: g3, title: "Classic Pose", tag: "Posing Practice", cat: "Posing" },
  { kind: "image", src: g4, title: "Bench Press", tag: "Chest Day", cat: "Training" },
  { kind: "image", src: g5, title: "Back Spread", tag: "Posing", cat: "Posing" },
  { kind: "image", src: competition2, title: "Title Moment", tag: "National Stage", cat: "Competition" },
  { kind: "image", src: g7, title: "Shoulder Press", tag: "Shoulders Day", cat: "Training" },
  { kind: "image", src: g2, title: "Bicep Burn", tag: "Arms Day", cat: "Training" },
  { kind: "image", src: competition3, title: "Peak Conditioning", tag: "Competition Prep", cat: "Competition" },
  { kind: "image", src: g8, title: "Sprint Cardio", tag: "Conditioning", cat: "Training" },
  { kind: "image", src: g6, title: "Pull Power", tag: "Back Day", cat: "Training" },
  { kind: "image", src: g9, title: "Gym Session", tag: "Daily Training", cat: "Training" },
];

// Distribute extra images across categories to flesh out the gallery
const extraTags: { tag: string; cat: Category; title: string }[] = [
  { tag: "Training", cat: "Training", title: "Gym Floor" },
  { tag: "Competition", cat: "Competition", title: "Stage Moment" },
  { tag: "Posing", cat: "Posing", title: "Mandatory Pose" },
  { tag: "Training", cat: "Training", title: "Heavy Day" },
  { tag: "Posing", cat: "Posing", title: "Front Double Bicep" },
  { tag: "Competition", cat: "Competition", title: "Championship Day" },
];

const extraItems: MediaItem[] = extraImages.map((src, i) => ({
  kind: "image" as const,
  src,
  ...extraTags[i % extraTags.length],
}));

const videoItems: MediaItem[] = videoClips.map((v) => ({
  kind: "video" as const,
  src: v.src,
  poster: v.poster,
  title: v.title,
  tag: v.tag,
  cat: "Videos" as Category,
}));

const allItems: MediaItem[] = [...photoItems, ...extraItems, ...videoItems];

const categories: Category[] = ["All", "Training", "Competition", "Posing", "Videos"];

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
              className="rounded-xl relative overflow-hidden break-inside-avoid hover-lift group"
            >
              {it.kind === "image" ? (
                <>
                  <div className="image-zoom overflow-hidden rounded-xl">
                    <Image
                      src={it.src}
                      alt={it.title}
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-40 group-hover:opacity-85 transition-smooth pointer-events-none" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-xl transition-smooth pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-primary/0 group-hover:bg-primary text-primary-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full transition-smooth opacity-0 group-hover:opacity-100">
                    {it.cat}
                  </div>
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-smooth pointer-events-none">
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">{it.tag}</p>
                    <h3 className="text-lg font-display">{it.title}</h3>
                  </figcaption>
                </>
              ) : (
                <VideoCard
                  src={it.src}
                  poster={it.poster}
                  title={it.title}
                  tag={it.tag}
                  aspectClassName="aspect-[9/16]"
                />
              )}
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
