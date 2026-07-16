export const SITE_NAME = "Elmaca Adventure";

export const SITE_TAGLINE = "Explore Life. Make Adventure. Connect Always.";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#adventures", label: "Adventures" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const CONTACT = {
  phone: "+254 715 371364",
  email: "elmacaadventure@gmail.com",
  location: "Kisumu, Kenya",
  whatsapp: "https://wa.me/254715371364",
  whatsappCommunity: "https://chat.whatsapp.com/JqAlT3TqsI388HPrR69JL9",
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Price Guarantee",
    description:
      "Best value for unforgettable adventures with transparent pricing and no hidden charges.",
    icon: "shield",
  },
  {
    title: "Easy & Quick Booking",
    description:
      "Reserve your adventure in minutes through a simple and hassle-free booking process.",
    icon: "booking",
  },
  {
    title: "Community Driven",
    description:
      "Join a growing community of explorers, make new friends and create unforgettable memories together.",
    icon: "community",
  },
];
