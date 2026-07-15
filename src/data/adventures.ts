import type { Adventure } from "@/types";

export const adventures: Adventure[] = [
  {
    slug: "maasai-mara-safari",
    title: "Maasai Mara Safari Escape",
    description:
      "Witness the Great Migration, golden savannas, and Big Five wildlife on an immersive multi-day safari adventure.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    duration: "4 Days / 3 Nights",
    location: "Maasai Mara, Kenya",
    price: "From KES 45,000",
    featured: true,
  },
  {
    slug: "mount-kenya-trek",
    title: "Mount Kenya Summit Trek",
    description:
      "Challenge yourself on Africa's second-highest peak with alpine lakes, bamboo forests, and panoramic summit views.",
    image:
      "https://images.unsplash.com/photo-1456926630575-b676000dec00?w=800&q=80",
    duration: "5 Days / 4 Nights",
    location: "Mount Kenya",
    price: "From KES 38,000",
    featured: true,
  },
  {
    slug: "coastal-road-trip",
    title: "Coastal Kenya Road Trip",
    description:
      "Drive along turquoise shores from Diani to Lamu — beach camps, Swahili culture, and endless Indian Ocean sunsets.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    duration: "6 Days / 5 Nights",
    location: "Kenyan Coast",
    price: "From KES 52,000",
    featured: true,
  },
  {
    slug: "rift-valley-explorer",
    title: "Great Rift Valley Explorer",
    description:
      "Discover flamingo-filled lakes, dramatic escarpments, and geothermal wonders on this scenic overland journey.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    duration: "3 Days / 2 Nights",
    location: "Rift Valley, Kenya",
    price: "From KES 28,000",
    featured: true,
  },
];

export const featuredAdventures = adventures.filter((a) => a.featured);
