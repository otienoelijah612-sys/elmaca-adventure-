export type Adventure = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  duration: string;
  location: string;
  price: string;

  upcomingDate?: string;
  spotsLeft?: number;
  totalSpots?: number;
  difficulty?: "Easy" | "Moderate" | "Challenging";
  category?: string;

  highlights?: string[];
  featured: boolean;
};
