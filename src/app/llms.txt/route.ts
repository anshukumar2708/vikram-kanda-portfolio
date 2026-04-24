import { siteConfig, absoluteUrl, publishedSocialProfiles } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

/**
 * llms.txt — a machine-readable summary of this site for Large Language
 * Model powered search engines and AI assistants.
 *
 * Spec reference: https://llmstxt.org
 * Served at: /llms.txt
 */
export const dynamic = "force-static";
export const revalidate = 86400; // 1 day

function buildLlmsTxt(): string {
  const pages = Object.values(pageSeo);
  const socials = publishedSocialProfiles();

  const sections: string[] = [];

  sections.push(`# ${siteConfig.name}`);
  sections.push("");
  sections.push(`> ${siteConfig.description}`);
  sections.push("");

  sections.push("## About");
  sections.push("");
  sections.push(
    `- **Name:** ${siteConfig.name}`,
    `- **Role:** Competitive bodybuilder, coach and public figure`,
    `- **Location:** ${siteConfig.author.location}`,
    `- **Tagline:** ${siteConfig.tagline}`,
    `- **Website:** ${siteConfig.url}`,
  );
  sections.push("");

  sections.push("## Achievements");
  sections.push("");
  for (const a of siteConfig.awards) sections.push(`- ${a}`);
  sections.push("");

  sections.push("## Services");
  sections.push("");
  sections.push(
    "- Strength training programs (beginner to advanced)",
    "- Nutrition & diet planning for cutting, bulking and peak week",
    "- Posing & stage craft for bodybuilding competitions",
    "- Full competition preparation (state and national level)",
    "- Online coaching across India",
  );
  sections.push("");

  sections.push("## Pages");
  sections.push("");
  for (const p of pages) {
    sections.push(`- [${p.title}](${absoluteUrl(p.path)}): ${p.description}`);
  }
  sections.push("");

  if (socials.length > 0) {
    sections.push("## Social");
    sections.push("");
    for (const s of socials) sections.push(`- ${s}`);
    sections.push("");
  }

  sections.push("## Contact");
  sections.push("");
  sections.push(
    `- **Contact page:** ${absoluteUrl("/contact")}`,
    `- **Address:** ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion}, ${siteConfig.address.addressCountry}`,
  );
  sections.push("");

  sections.push("## Keywords");
  sections.push("");
  sections.push(siteConfig.keywords.join(", "));
  sections.push("");

  return sections.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
