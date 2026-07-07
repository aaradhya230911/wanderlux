import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const SITEMAP = [
  {
    heading: "Explore",
    links: [
      { label: "Destinations", href: "#destinations" },
      { label: "Packages", href: "#packages" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Why WanderLux", href: "#why-us" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Travel Protection", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ivory-200 dark:border-ivory-100/10 dark:bg-ink-950">
      <div className="container-lux py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="font-display text-2xl">
              Wander<span className="text-champagne-500">Lux</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-500 dark:text-ivory-400">
              Bespoke, fully-concierged travel for people who want the trip
              designed around them — not the other way around.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 text-ink-600 transition-colors hover:border-champagne-400 hover:text-champagne-600 dark:border-ivory-100/15 dark:text-ivory-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {SITEMAP.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400 dark:text-ivory-500">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-600 transition-colors hover:text-champagne-600 dark:text-ivory-300 dark:hover:text-champagne-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-100 pt-8 text-xs text-ink-400 dark:border-ivory-100/10 dark:text-ivory-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} WanderLux Travel Co. All rights reserved.</p>
          <p>Designed for the journey, not just the destination.</p>
        </div>
      </div>
    </footer>
  );
}
