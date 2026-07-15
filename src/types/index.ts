export type NavItem = {
  href: string;
  label: string;
};

export type Adventure = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  duration: string;
  location: string;
  price: string;
  upcomingDate: string;
  spotsLeft: number;
  totalSpots: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  category: string;
  highlights?: string[];
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall";
};

export type TeamBuildingFeature = {
  title: string;
  description: string;
  icon: "target" | "lightbulb" | "handshake" | "users";
};
