"use client";

import { useState } from "react";
import {
  Mail, Phone, MapPin, Instagram, Send, Youtube, Facebook,
  Clock, MessageCircle, CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const inquiryTypes = [
  "Bodybuilding Guidance",
  "Competition Prep Advice",
  "Nutrition Guidance",
  "Collaboration / Sponsorship",
  "Event / Guest Appearance",
  "Media / Press",
  "Other",
] as const;

export function ContactInfoPanel() {
  const items = [
    { icon: Mail, label: "Email", value: "vikram@gmail.com", href: "mailto:vikram@gmail.com" },
    { icon: Phone, label: "Phone / WhatsApp", value: "+91 98765 XXXXX", href: "tel:+919876543210" },
    { icon: MapPin, label: "Location", value: "Station Road Santrabadi, Durg, C.G.", href: "#" },
    { icon: Instagram, label: "Instagram", value: "@ai_vikramkanda", href: "https://www.instagram.com/ai_vikramkanda?igsh=MWd6aGtuczJvYXd0OA==" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
  ];

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/ai_vikramkanda?igsh=MWd6aGtuczJvYXd0OA==", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/9198765XXXXX", label: "WhatsApp" },
  ];

  return (
    <div className="space-y-5">
      {items.map((item) => {
        const isExternal = item.href.startsWith("http");
        return (
          <Link
            key={item.label}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="flex items-start gap-4 p-5 border border-border rounded-xl bg-card hover-lift hover:border-primary group transition-smooth card-glow"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary transition-smooth shrink-0">
              <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
              <p className="font-medium transition-smooth">{item.value}</p>
            </div>
          </Link>
        );
      })}

      <div className="pt-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Follow the Journey</p>
        <ul className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => {
            const isExternal = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex p-3 rounded-xl border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-bounce hover:scale-110 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Wire up to an API route / email service here.
    // For now we just simulate success so the UX remains identical to the original.
    await new Promise((r) => setTimeout(r, 400));
    setSubmitting(false);
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setSelected("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className="p-8 border border-border bg-card rounded-2xl space-y-5"
    >
      {sent && (
        <div role="status" className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-xl animate-scale-in">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-primary font-medium">Message sent! I&apos;ll reply within 24 hours.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
            Name *
          </label>
          <input
            id="contact-name"
            name="name"
            required
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-smooth placeholder:text-muted-foreground/50 hover:border-muted-foreground/50"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            required
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-smooth placeholder:text-muted-foreground/50 hover:border-muted-foreground/50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
          Phone / WhatsApp
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 XXXXX XXXXX"
          className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-smooth placeholder:text-muted-foreground/50 hover:border-muted-foreground/50"
        />
      </div>

      <fieldset>
        <legend className="text-xs uppercase tracking-wider text-muted-foreground mb-3 block">
          I&apos;m interested in
        </legend>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map((t) => {
            const isSelected = selected === t;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelected(t)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-smooth ${isSelected
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
                  }`}
              >
                {t}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="inquiryType" value={selected} />
      </fieldset>

      <div>
        <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your inquiry, collaboration idea, or what you'd like to discuss..."
          className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-smooth resize-none placeholder:text-muted-foreground/50 hover:border-muted-foreground/50"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-4 rounded-xl uppercase tracking-wider text-sm font-medium btn-magnetic group disabled:opacity-60 disabled:pointer-events-none"
      >
        {submitting ? "Sending…" : sent ? "Message Sent!" : "Send Message"}
        <Send className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
      </button>
    </form>
  );
}
