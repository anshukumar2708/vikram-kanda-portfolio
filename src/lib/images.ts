/**
 * Centralised image sources.
 *
 * Remote images are sourced from Unsplash with Next.js-friendly URLs.
 * Local images (hero banners, portraits) live in /public/images and are
 * referenced via absolute paths so they work with <Image /> out of the box.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// ── Local assets (served from /public) ─────────────────────────────────────
export const heroBannerDesktop = "/images/vikram-banner-5.png";
export const heroBannerMobile = "/images/vikram-mobile-banner.jpg";

// ── Remote assets ──────────────────────────────────────────────────────────
export const heroBanner = u("photo-1583454110551-21f2fa2afe61", 1920);
export const aboutPortrait = u("photo-1567013127542-490d757e51fc", 1200);
export const aboutPortrait2 = u("photo-1577221084712-45b0445d2b00", 1200);

export const transformation = u("photo-1517836357463-d25dfeac3438", 1800);
export const physique1 = u("photo-1583454155184-870a1f63aebc", 1200);
export const physique2 = u("photo-1534438327276-14e5300c3a48", 1200);

export const gallery1 = u("photo-1581009146145-b5ef050c2e1e");
export const gallery2 = u("photo-1532029837206-abbe2b7620e3");
export const gallery3 = u("photo-1534438327276-14e5300c3a48");
export const gallery4 = u("photo-1534438097545-a2c22c57f2ad", 1800);
export const gallery5 = u("photo-1571019613454-1cb2f99b2d8b");
export const gallery6 = u("photo-1546483875-ad9014c88eba");
export const gallery7 = u("photo-1581009137042-c552e485697a");
export const gallery8 = u("photo-1526506118085-60ce8714f8c5");
export const gallery9 = u("photo-1549060279-7e168fcee0c2");

export const competition1 = u("photo-1567013127542-490d757e51fc", 1200);
export const competition2 = u("photo-1583454155184-870a1f63aebc", 1200);
export const competition3 = u("photo-1517836357463-d25dfeac3438", 1200);

export const coachingImg = u("photo-1571019614242-c5c5dee9f50b", 1200);
export const nutritionImg = u("photo-1490645935967-10de6ba17061", 1200);
export const onlineImg = u("photo-1611532736597-de2d4265fba3", 1200);

export const avatar1 = u("photo-1500648767791-00dcc994a43e", 400);
export const avatar2 = u("photo-1494790108377-be9c29b29330", 400);
export const avatar3 = u("photo-1507003211169-0a1dd7228f2d", 400);
export const avatar4 = u("photo-1438761681033-6461ffad8d80", 400);
