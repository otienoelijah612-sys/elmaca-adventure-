export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1523805009345-74488420504e?w=800&q=80",
    alt: "Kenya savanna at golden hour",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1549366021-9f761d040cb2?w=800&q=80",
    alt: "Elephants in the wild",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80",
    alt: "Adventurers on a mountain trail",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    alt: "Campfire under the stars",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain lake panorama",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    alt: "Coastal beach paradise",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1516026672322-bc52c61a55d5?w=800&q=80",
    alt: "Safari jeep on open plains",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    alt: "Misty forest landscape",
  },
];
