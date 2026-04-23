/**
 * Centralised image + video sources.
 *
 * All assets live in /public/images and are referenced via absolute
 * paths so they work with next/image out of the box.
 *
 * Filenames with spaces or special characters are URL-encoded.
 */

// ── Helper ─────────────────────────────────────────────────────────────────
const img = (name: string) => `/images/${encodeURI(name)}`;

// ── Hero / Banner ──────────────────────────────────────────────────────────
export const heroBannerDesktop = img("vikram-banner-1.png");
export const heroBannerMobile = img("vikram-mobile-banner.jpg");
export const heroBanner = heroBannerDesktop;

// ── Portraits / About ──────────────────────────────────────────────────────
export const aboutPortrait = img("vikram-1.jpg");
export const aboutPortrait2 = img("vikram-2.jpg");

// ── Transformation / Physique ──────────────────────────────────────────────
export const transformation = img("vikram-3.jpg");
export const physique1 = img("vikram-4.png");
export const physique2 = img("vikram-5.jpg");

// ── Gallery (curated mix) ──────────────────────────────────────────────────
export const gallery1 = img("vikram-6.jpg");
export const gallery2 = img("vikram-7.jpg");
export const gallery3 = img("vikram-8.jpg");
export const gallery4 = img("vikram-9.jpg");
export const gallery5 = img("vikram-11.jpg");
export const gallery6 = img("vikram-14.jpg");
export const gallery7 = img("vikram-15.jpg");
export const gallery8 = img("vikram-16.jpg");
export const gallery9 = img("vikram-17.jpg");

// ── Competition shots ──────────────────────────────────────────────────────
export const competition1 = img("vikram-18.jpg");
export const competition2 = img("vikram-19.jpg");
export const competition3 = img("vikram-20.jpg");

// ── Coaching / services imagery ────────────────────────────────────────────
export const coachingImg = img("vikram-21.jpg");
export const nutritionImg = img("Pav bread saturday breakfast.jpg");
export const onlineImg = img("vikram-22.jpg");

// ── Avatars (used in testimonial cards) ────────────────────────────────────
export const avatar1 = img("vikram-23.jpg");
export const avatar2 = img("vikram-24.jpg");
export const avatar3 = img("vikram-25.jpg");
export const avatar4 = img("vikram-26.jpg");

// ── Extra curated images (for gallery expansion) ───────────────────────────
export const extraImages: string[] = [
  img("vikram-27.jpg"),
  img("vikram-28.jpg"),
  img("vikram-29.jpg"),
  img("vikram-30.jpg"),
  img("vikram-31.jpg"),
  img("vikram-32.jpg"),
  img("vikram-33.jpg"),
  img("vikram-34.jpg"),
  img("vikram-35.jpg"),
  img("vikram-36.jpg"),
  img("vikram-37.jpg"),
  img("vikram-49.jpg"),
  img("vikram-50.jpg"),
  img("vikram-51.jpg"),
  img("vikram-52.jpg"),
  img("vikram-53.jpg"),
  img("vikram-54.jpg"),
  img("vikram-55.jpg"),
  img("vikram-57.jpg"),
  img("vikram-58.jpg"),
  img("vikram-62.jpg"),
  img("vikram-63.jpg"),
  img("One of old pic.jpg"),
  img("Pic credit pawan gill.jpg"),
  img("Rule your mind or it will rule you.jpg"),
  img("Yatra hemkund sahib #hemkundsahib.jpg"),
];

// ── Videos ─────────────────────────────────────────────────────────────────
export type VideoClip = {
  src: string;
  poster?: string;
  title: string;
  tag: string;
};

export const heroVideo = img("vikram-10.mp4");

export const videoClips: VideoClip[] = [
  {
    src: img("vikram-10.mp4"),
    poster: img("vikram-11.jpg"),
    title: "Posing Practice",
    tag: "Stage Prep",
  },
  {
    src: img("vikram-12.mp4"),
    poster: img("vikram-14.jpg"),
    title: "Training Session",
    tag: "Gym Floor",
  },
  {
    src: img("vikram-13.mp4"),
    poster: img("vikram-15.jpg"),
    title: "Heavy Lifting",
    tag: "Strength",
  },
  {
    src: img("Stretching is one of the most important parts of any workout routine, yet it is the most ignored.mp4"),
    poster: img("vikram-16.jpg"),
    title: "Stretching Routine",
    tag: "Recovery",
  },
  {
    src: img("Thank-you @gymnaxys for teaching me this skill,Still working for better improvement 💪#gymnastic.mp4"),
    poster: img("vikram-17.jpg"),
    title: "Gymnastics Skill",
    tag: "Mobility",
  },
  {
    src: img("U have to getup every morning and tell your self i can do this #mensphysiquepic #mentalhealthawa.mp4"),
    poster: img("vikram-18.jpg"),
    title: "Morning Mindset",
    tag: "Motivation",
  },
  {
    src: img("Various types of planks, add this once in a week, If you reach the last one, that means ur core .mp4"),
    poster: img("vikram-19.jpg"),
    title: "Plank Variations",
    tag: "Core Strength",
  },
  {
    src: img("vikram-38.mp4"),
    poster: img("vikram-20.jpg"),
    title: "Workout Flow",
    tag: "Training",
  },
  {
    src: img("vikram-39.mp4"),
    poster: img("vikram-21.jpg"),
    title: "Power Reps",
    tag: "Strength",
  },
  {
    src: img("vikram-40.mp4"),
    poster: img("vikram-22.jpg"),
    title: "Chest Day",
    tag: "Training",
  },
  {
    src: img("vikram-41.mp4"),
    poster: img("vikram-23.jpg"),
    title: "Back Builder",
    tag: "Training",
  },
  {
    src: img("vikram-42.mp4"),
    poster: img("vikram-24.jpg"),
    title: "Arm Sculpt",
    tag: "Training",
  },
  {
    src: img("vikram-43.mp4"),
    poster: img("vikram-25.jpg"),
    title: "Leg Crushers",
    tag: "Training",
  },
  {
    src: img("vikram-44.mp4"),
    poster: img("vikram-26.jpg"),
    title: "Shoulder Pump",
    tag: "Training",
  },
  {
    src: img("vikram-45.mp4"),
    poster: img("vikram-27.jpg"),
    title: "Cardio Blast",
    tag: "Conditioning",
  },
  {
    src: img("vikram-46.mp4"),
    poster: img("vikram-28.jpg"),
    title: "Posing Flow",
    tag: "Stage Prep",
  },
  {
    src: img("vikram-47.mp4"),
    poster: img("vikram-29.jpg"),
    title: "Stage Walk",
    tag: "Competition",
  },
  {
    src: img("vikram-48.mp4"),
    poster: img("vikram-30.jpg"),
    title: "Prep Mindset",
    tag: "Motivation",
  },
  {
    src: img("vikram-56.mp4"),
    poster: img("vikram-31.jpg"),
    title: "Gym Grind",
    tag: "Training",
  },
  {
    src: img("vikram-64.mp4"),
    poster: img("vikram-32.jpg"),
    title: "Championship Reel",
    tag: "Highlights",
  },
  {
    src: img("Yatra hemkund sahib #hemkundsahib.mp4"),
    poster: img("Yatra hemkund sahib #hemkundsahib.jpg"),
    title: "Hemkund Sahib Yatra",
    tag: "Off-Stage",
  },
];
