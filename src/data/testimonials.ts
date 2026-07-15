export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Elmaca Adventure completely changed how I see Kenya. The Mara safari was flawlessly organized — every detail from accommodation to game drives exceeded expectations.",
    name: "Sarah Wanjiku",
    role: "Marketing Director, Nairobi",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
  },
  {
    quote:
      "Our company team-building retreat was incredible. The guides created challenges that brought our team closer together while exploring stunning landscapes.",
    name: "James Ochieng",
    role: "CEO, TechStart Africa",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
  },
  {
    quote:
      "The coastal road trip was the adventure of a lifetime. I made friends in the WhatsApp community before the trip even started — that's the Elmaca magic.",
    name: "Amina Hassan",
    role: "Travel Blogger",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
  },
];
