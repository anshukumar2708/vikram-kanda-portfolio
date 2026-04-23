"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop({ threshold = 100 }: { threshold?: number }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const update = () => {
            setVisible(window.scrollY > threshold);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    const scrollUp = () => {
        const reducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    };

    return (
        <button
            type="button"
            aria-label="Scroll to top"
            title="Scroll to top"
            onClick={scrollUp}
            tabIndex={visible ? 0 : -1}
            aria-hidden={!visible}
            className={cn(
                "group fixed z-40 bottom-5 right-5 sm:bottom-8 sm:right-8",
                "inline-flex items-center justify-center",
                "w-12 h-12 sm:w-14 sm:h-14 rounded-full",
                "bg-gradient-primary text-primary-foreground shadow-glow",
                "border border-primary/40 backdrop-blur",
                "transition-all duration-300 ease-out will-change-transform",
                "hover:scale-110 hover:-translate-y-1 active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                visible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-6 pointer-events-none"
            )}
        >
            {/* Animated glow ring */}
            <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-primary/40 blur-md opacity-60 animate-pulse-glow"
            />
            {/* Arrow */}
            <ArrowUp className="relative w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
    );
}
