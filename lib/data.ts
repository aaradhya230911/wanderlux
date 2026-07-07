// Central content module. Keeping copy and imagery here keeps components
// presentational and makes the site trivial to re-skin with real content later.

export type Destination = {
  id: string;
  name: string;
  country: string;
  image: string;
  blurb: string;
  priceFrom: number;
  tag: string;
};

export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1600&auto=format&fit=crop",
    blurb: "Whitewashed cliffs above a sunken caldera, best watched at dusk.",
    priceFrom: 3200,
    tag: "Island",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1600&auto=format&fit=crop",
    blurb: "Lantern-lit alleys, moss gardens, and centuries of quiet ritual.",
    priceFrom: 4100,
    tag: "Culture",
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",
    blurb: "Overwater villas suspended above glass-clear lagoons.",
    priceFrom: 5600,
    tag: "Beach",
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1600&auto=format&fit=crop",
    blurb: "Glacier peaks, alpine rail, and villages that time forgot.",
    priceFrom: 4800,
    tag: "Mountains",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    image:
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1600&auto=format&fit=crop",
    blurb: "Spice-scented souks and riads hidden behind unmarked doors.",
    priceFrom: 2700,
    tag: "Desert",
  },
  {
    id: "amalfi",
    name: "Amalfi Coast",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1600&auto=format&fit=crop",
    blurb: "Cliffside lemon groves and villages that spill into the sea.",
    priceFrom: 3900,
    tag: "Coastline",
  },
];

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: "compass" | "shield" | "sparkles" | "concierge" | "globe" | "gem";
};

export const features: Feature[] = [
  {
    id: "curated",
    title: "Hand-curated itineraries",
    description:
      "Every journey is designed by a destination specialist who has lived it, not licensed it from a catalogue.",
    icon: "compass",
  },
  {
    id: "concierge",
    title: "24/7 on-the-ground concierge",
    description:
      "A real person, reachable anywhere, resolves anything from a delayed flight to a last-minute table at midnight.",
    icon: "concierge",
  },
  {
    id: "access",
    title: "Access money can't usually buy",
    description:
      "Private openings, closed rooms, and chef's tables — built on relationships we've kept for over a decade.",
    icon: "gem",
  },
  {
    id: "protection",
    title: "Fully bonded & protected",
    description:
      "Every booking is financially protected, so your trip is safe from the first deposit to the final night.",
    icon: "shield",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  trip: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Eleanor Chase",
    location: "London, UK",
    quote:
      "They rebuilt our entire honeymoon in six hours after a cancellation, and it turned out better than the original plan.",
    trip: "Maldives, 9 nights",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Webb",
    location: "Toronto, Canada",
    quote:
      "The kind of detail you don't ask for — dietary notes, anniversary flowers, a driver who remembered our names by day two.",
    trip: "Amalfi Coast, 7 nights",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya Nair",
    location: "Singapore",
    quote:
      "I've used four other agencies before this one. None of them came close to the access WanderLux arranged in Kyoto.",
    trip: "Kyoto, 10 nights",
    rating: 5,
  },
  {
    id: "t4",
    name: "Julian Ferreira",
    location: "Lisbon, Portugal",
    quote:
      "Our guide in Marrakech felt like an old friend showing us his city, not a script he'd repeated a thousand times.",
    trip: "Marrakech, 5 nights",
    rating: 5,
  },
];

export type Package = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  featured?: boolean;
  perks: string[];
};

export const packages: Package[] = [
  {
    id: "essential",
    name: "Essential",
    description: "A refined introduction to bespoke travel.",
    price: 2900,
    duration: "5–7 nights",
    perks: [
      "Private airport transfers",
      "Hand-picked boutique stays",
      "One signature local experience",
      "Email & chat concierge",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    description: "Our most-booked tier, fully tailored to you.",
    price: 5400,
    duration: "7–10 nights",
    featured: true,
    perks: [
      "Everything in Essential",
      "Private guide throughout",
      "Priority reservations & closed-door access",
      "24/7 phone concierge",
      "Complimentary suite upgrade, where available",
    ],
  },
  {
    id: "atelier",
    name: "Atelier",
    description: "A fully bespoke journey, designed from a blank page.",
    price: 11500,
    duration: "10–14 nights",
    perks: [
      "Everything in Signature",
      "Dedicated trip designer from day one",
      "Private jet & yacht arrangements available",
      "Multi-destination routing",
      "On-site personal concierge",
    ],
  },
];

export const gallery: { id: string; image: string; caption: string }[] = [
  {
    id: "g1",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
    caption: "Dawn over the Dolomites",
  },
  {
    id: "g2",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1400&auto=format&fit=crop",
    caption: "The dunes at Merzouga",
  },
  {
    id: "g3",
    image:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1400&auto=format&fit=crop",
    caption: "Manhattan, from above",
  },
  {
    id: "g4",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1400&auto=format&fit=crop",
    caption: "Shibuya after rain",
  },
  {
    id: "g5",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1400&auto=format&fit=crop",
    caption: "First light, Paris",
  },
  {
    id: "g6",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1400&auto=format&fit=crop",
    caption: "Dubai at the blue hour",
  },
];

export const faqs: { id: string; question: string; answer: string }[] = [
  {
    id: "f1",
    question: "How far in advance should I book?",
    answer:
      "For Signature and Atelier journeys, we recommend 3–6 months to secure preferred properties and private experiences. Essential trips can often be arranged within 4–6 weeks.",
  },
  {
    id: "f2",
    question: "Can you build a trip that isn't on your destination list?",
    answer:
      "Yes — the list on this page is a sample of where we travel most, not a limit. Tell us where you want to go and we'll tell you honestly whether we can do it well.",
  },
  {
    id: "f3",
    question: "What happens if something goes wrong during the trip?",
    answer:
      "Your concierge line is answered day and night by someone who already knows your itinerary. Most issues are resolved before you'd have noticed something was wrong.",
  },
  {
    id: "f4",
    question: "Is my payment protected?",
    answer:
      "Yes. Every booking is financially bonded and protected in line with industry travel-protection standards, from deposit to final balance.",
  },
  {
    id: "f5",
    question: "Do you arrange group or multi-generational travel?",
    answer:
      "Regularly. We design private villas, staggered arrivals, and activities that work for both grandparents and grandchildren on the same trip.",
  },
];

export const stats = [
  { id: "s1", label: "Journeys designed", value: 4200, suffix: "+" },
  { id: "s2", label: "Countries covered", value: 68, suffix: "" },
  { id: "s3", label: "Average client rating", value: 4.9, suffix: "/5" },
  { id: "s4", label: "Years in business", value: 14, suffix: "" },
];
