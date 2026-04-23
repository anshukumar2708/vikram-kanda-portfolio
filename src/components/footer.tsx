import Link from "next/link";
import { Instagram, Youtube, Facebook, Mail, Flame } from "lucide-react";
import { siteConfig } from "@/lib/site";

const socials = [
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Mail, href: "/contact", label: "Email" },
] as const;

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            <span className="font-display text-3xl tracking-wider">
              VIKRAM<span className="text-primary">.</span>
            </span>
          </Link>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xs">
            Competitive bodybuilder and public figure from Durg, Chhattisgarh. Representing C.G. at state and India level competitions.
          </p>
        </div>
        <nav aria-label="Footer">
          <h4 className="text-sm sm:text-base mb-4">Explore</h4>
          <div className="flex flex-col gap-2 text-base text-muted-foreground">
            <Link href="/about" className="hover:text-primary transition-smooth w-fit">About</Link>
            <Link href="/gallery" className="hover:text-primary transition-smooth w-fit">Gallery</Link>
            <Link href="/services" className="hover:text-primary transition-smooth w-fit">Services</Link>
            <Link href="/coaching" className="hover:text-primary transition-smooth w-fit">Coaching</Link>
          </div>
        </nav>
        <div>
          <h4 className="text-base mb-4">Connect</h4>
          <ul className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex p-2 rounded-full border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-110 transition-bounce"
                >
                  <Icon className="w-7 h-7" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Forged with iron and discipline.
      </div>
    </footer>
  );
}
