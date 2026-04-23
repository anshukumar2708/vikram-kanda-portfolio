"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

type Props = {
    src: string;
    poster?: string;
    title?: string;
    tag?: string;
    /** If true, autoplay when scrolled into view (muted). */
    autoplayInView?: boolean;
    /** If true, the video loops. */
    loop?: boolean;
    /** Aspect ratio class applied to the wrapper (e.g. "aspect-[3/4]"). */
    aspectClassName?: string;
    /** Extra classes for the wrapper. */
    className?: string;
    /** Cover the full container (object-cover) vs contain. */
    cover?: boolean;
};

/**
 * Responsive, accessible video player card with:
 *  - Muted autoplay when in view (honours `prefers-reduced-motion`)
 *  - Tap / click to play-pause
 *  - Mute toggle
 *  - Optional title / tag overlay
 */
export function VideoCard({
    src,
    poster,
    title,
    tag,
    autoplayInView = true,
    loop = true,
    aspectClassName = "aspect-[3/4]",
    className = "",
    cover = true,
}: Props) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const el = videoRef.current;
        if (!el || !autoplayInView) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) return;

        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        el.play().then(() => setPlaying(true)).catch(() => {
                            /* autoplay blocked — user can tap to play */
                        });
                    } else {
                        el.pause();
                        setPlaying(false);
                    }
                }
            },
            { threshold: 0.35 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [autoplayInView]);

    const togglePlay = () => {
        const el = videoRef.current;
        if (!el) return;
        if (el.paused) {
            el.play().then(() => setPlaying(true)).catch(() => { });
        } else {
            el.pause();
            setPlaying(false);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        const el = videoRef.current;
        if (!el) return;
        el.muted = !el.muted;
        setMuted(el.muted);
    };

    return (
        <div
            className={`relative overflow-hidden rounded-xl bg-card ${aspectClassName} ${className}`}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                muted={muted}
                loop={loop}
                playsInline
                preload="metadata"
                className={`w-full h-full ${cover ? "object-cover" : "object-contain"}`}
                onClick={togglePlay}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />

            {/* Overlay gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />

            {/* Title / tag */}
            {(title || tag) && (
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4">
                    {tag && (
                        <p className="text-[10px] sm:text-xs text-primary uppercase tracking-wider mb-1">
                            {tag}
                        </p>
                    )}
                    {title && <h3 className="text-base sm:text-lg font-display">{title}</h3>}
                </div>
            )}

            {/* Controls */}
            <div className="absolute top-3 right-3 flex gap-2">
                <button
                    type="button"
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    onClick={toggleMute}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/60 backdrop-blur border border-border hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                    {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
            </div>

            {/* Play/pause centered */}
            <button
                type="button"
                aria-label={playing ? "Pause video" : "Play video"}
                onClick={togglePlay}
                className={`absolute inset-0 m-auto w-14 h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center transition-smooth hover:scale-110 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"
                    }`}
            >
                {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
        </div>
    );
}
