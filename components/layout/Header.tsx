"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#destinations", label: "Destinations" },
  { href: "#why-us", label: "Why Us" },
  { href: "#packages", label: "Packages" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="container-lux">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled && "glass glass-border shadow-soft"
          )}
        >
          <a
            href="#top"
            className="font-display text-xl tracking-tight text-ink-900 dark:text-ivory-200"
          >
            Wander<span className="text-champagne-500">Lux</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-600 transition-colors hover:text-champagne-600 dark:text-ivory-400 dark:hover:text-champagne-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full bg-ink-900 px-5 py-2 text-sm font-medium text-ivory-100 transition-colors hover:bg-champagne-500 hover:text-ink-900 dark:bg-champagne-400 dark:text-ink-900 dark:hover:bg-ivory-100"
            >
              Plan a Trip
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 text-ink-700 dark:border-ivory-100/15 dark:text-ivory-300"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ivory-300 dark:bg-ink-900 lg:hidden"
          >
            <div className="container-lux flex items-center justify-between py-6">
              <span className="font-display text-xl text-ink-900 dark:text-ivory-200">
                Wander<span className="text-champagne-500">Lux</span>
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 text-ink-700 dark:border-ivory-100/15 dark:text-ivory-300"
              >
                <X size={18} />
              </button>
            </div>
            <nav
              className="container-lux mt-6 flex flex-col gap-2"
              aria-label="Mobile primary"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-ink-100 py-4 font-display text-3xl text-ink-900 dark:border-ivory-100/10 dark:text-ivory-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 rounded-full bg-ink-900 px-6 py-3 text-center text-sm font-medium text-ivory-100 dark:bg-champagne-400 dark:text-ink-900"
              >
                Plan a Trip
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
