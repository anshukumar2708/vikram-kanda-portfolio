"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Flame } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/transformation", label: "Journey" },
  { href: "/services", label: "Services" },
  { href: "/coaching", label: "Coaching" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-elegant"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Vikram Kanda — Home">
          <div className="relative">
            <Flame className="w-7 h-7 sm:w-8 sm:h-8 text-primary transition-bounce group-hover:scale-125 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-primary blur-xl opacity-50 group-hover:opacity-80 transition-smooth" />
          </div>
          <span className="font-display text-2xl sm:text-3xl tracking-wider">
            VIKRAM<span className="text-primary">.</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-smooth hover:text-primary group",
                isActive(item.href) && "text-primary"
              )}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-smooth group-hover:w-3/4" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="lg:hidden p-2 rounded-full border border-border hover:border-primary transition-smooth"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav aria-label="Mobile" className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-primary/10 hover:text-primary rounded-md transition-smooth",
                  isActive(item.href) && "text-primary bg-primary/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
