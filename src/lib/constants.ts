export const SITE_NAME = "Elmaca Adventure";

export const SITE_TAGLINE = "Explore Life. Make Adventure. Connect Always.";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#adventures", label: "Adventures" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team-building", label: "Team Building" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const CONTACT = {
  phone: "+254 712 345 678",
  email: "hello@elmacaadventure.com",
  location: "Nairobi, Kenya",
  whatsapp: "https://wa.me/254712345678",
  whatsappCommunity: "https://chat.whatsapp.com/example",
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "map" as const,
    title: "Expert Local Guides",
    description:
      "Our passionate guides know every trail, hidden gem, and cultural story across Kenya's most breathtaking landscapes.",
  },
  {
    icon: "shield" as const,
    title: "Safety First",
    description:
      "Fully insured trips, vetted routes, and professional equipment ensure your adventure is thrilling yet secure.",
  },
  {
    icon: "users" as const,
    title: "Community Driven",
    description:
      "Join a vibrant community of explorers who share stories, tips, and lifelong friendships beyond every journey.",
  },
  {
    icon: "compass" as const,
    title: "Curated Experiences",
    description:
      "From sunrise safaris to coastal road trips, every itinerary is thoughtfully designed for unforgettable moments.",
  },
] as const;
