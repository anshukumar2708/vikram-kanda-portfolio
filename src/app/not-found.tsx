import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-primary animate-pulse-glow">404</h1>
        <h2 className="mt-4 text-2xl font-display">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This route doesn&apos;t exist. Let&apos;s get you back to the iron.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-primary px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground hover-glow transition-smooth"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
