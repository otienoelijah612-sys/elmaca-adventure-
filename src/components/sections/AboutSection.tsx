import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";

const highlights = [
  "Curated road trips across Kenya's most iconic destinations",
  "Small group sizes for authentic, personal experiences",
  "Expert guides with deep local knowledge and passion",
  "Vibrant community of adventurers and lifelong friends",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80"
                  alt="Adventurers exploring Kenya's wilderness"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 h-48 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-right-8 sm:h-56 sm:w-56">
                <Image
                  src="https://images.unsplash.com/photo-1549366021-9f761d040cb2?w=400&q=80"
                  alt="Wildlife safari experience"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <div className="absolute -top-4 -left-4 rounded-2xl bg-orange px-6 py-4 shadow-lg">
                <p className="font-display text-3xl font-bold text-white">5+</p>
                <p className="text-sm font-medium text-white/90">
                  Years of Adventures
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <SectionHeading
              label="About Us"
              title="About Elmaca Adventure"
              align="left"
            />
            <div className="space-y-4 text-navy/80 leading-relaxed">
              <p>
                Born from a passion for exploration and connection, Elmaca
                Adventure is Kenya&apos;s trusted partner for road trips, outdoor
                expeditions, and transformative travel experiences.
              </p>
              <p>
                We believe adventure is more than reaching a destination — it&apos;s
                about the stories you collect, the people you meet, and the
                memories that stay with you forever. From the golden plains of
                the Maasai Mara to the misty peaks of Mount Kenya, we craft
                journeys that inspire.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span className="text-navy/80">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
