import Script from "next/script";

interface JsonLdProps {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Injects a JSON-LD structured data script into the page.
 * Uses next/script with strategy="afterInteractive" so it does not block
 * the critical rendering path but is available to search crawlers.
 */
export function JsonLd({ id = "json-ld", data }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      // Safe: we own the data; JSON.stringify escapes script-closing sequences for common cases.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
