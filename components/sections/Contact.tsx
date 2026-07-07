"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

type Status = "idle" | "submitting" | "success";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // NOTE: wire this up to your form endpoint / API route of choice
  // (e.g. Resend, Formspree, or a Next.js Route Handler at /api/contact).
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-lux grid grid-cols-1 gap-14 lg:grid-cols-2">
        <FadeIn>
          <p className="eyebrow">Start a conversation</p>
          <h2 className="mt-4 max-w-md text-4xl font-light sm:text-5xl">
            Tell us where, we&apos;ll handle how
          </h2>
          <p className="mt-4 max-w-sm text-sm text-ink-500 dark:text-ivory-400">
            Share a few details and a trip designer will reply within one
            business day with a first draft of your itinerary.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/10 text-teal-500 dark:text-teal-200">
                <Mail size={18} />
              </span>
              <span className="text-sm">hello@wanderlux.example</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/10 text-teal-500 dark:text-teal-200">
                <Phone size={18} />
              </span>
              <span className="text-sm">+1 (555) 018 2043</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/10 text-teal-500 dark:text-teal-200">
                <MapPin size={18} />
              </span>
              <span className="text-sm">Studio 4, 12 Mercer Street, New York</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-4xl border border-ink-100 bg-white p-8 shadow-soft dark:border-ivory-100/10 dark:bg-ink-800">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[380px] flex-col items-center justify-center text-center"
              >
                <CheckCircle2 size={40} className="text-teal-500 dark:text-teal-200" />
                <h3 className="mt-4 font-display text-2xl">Message sent</h3>
                <p className="mt-2 max-w-xs text-sm text-ink-500 dark:text-ivory-400">
                  Thank you — a trip designer will reach out within one
                  business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="lux-input"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="lux-input"
                    />
                  </Field>
                </div>

                <Field label="Destination in mind" htmlFor="destination">
                  <input id="destination" name="destination" type="text" className="lux-input" />
                </Field>

                <Field label="Tell us about the trip" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="lux-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-ivory-100 transition-colors hover:bg-champagne-500 hover:text-ink-900 disabled:opacity-60 dark:bg-champagne-400 dark:text-ink-900 dark:hover:bg-ivory-100"
                >
                  {status === "submitting" ? "Sending…" : "Send enquiry"}
                  {status !== "submitting" && <Send size={15} />}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Scoped input styling — kept local to this form */}
      <style jsx global>{`
        .lux-input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgb(228 230 235);
          background: transparent;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .dark .lux-input {
          border-color: rgba(247, 244, 238, 0.12);
        }
        .lux-input:focus-visible {
          border-color: #c9a869;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-ink-500 dark:text-ivory-400">
        {label}
      </label>
      {children}
    </div>
  );
}
