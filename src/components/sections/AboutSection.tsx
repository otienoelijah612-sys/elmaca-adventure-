import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";

const highlights = [
  "Outdoor expeditions across East Africa",
  "Hiking, camping &amp; road trip experiences",
  "Meaningful community connections",
  "Sustainable and responsible travel",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <AnimatedSection>
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about-group.jpg"
                alt="Elmaca Adventure Community"
                width={900}
                height={700}
                priority
                className="h-[650px] w-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Right Content */}
          <AnimatedSection delay={200}>
            <SectionHeading
              label="About Us"
              title="About Elmaca Adventure"
              align="left"
            />

            <div className="mt-6 space-y-5 text-lg leading-8 text-navy/80">
              <p>
                <strong>Elmaca Adventure</strong> is a Kenyan adventure and
                travel company that organises outdoor expeditions and
                experiential tours across East Africa.
              </p>

              <p>
                It focuses on connecting participants with nature through
                hiking, camping, road trips, and cultural exploration
                experiences.
              </p>

              <p>
                The organisation is part of Kenya&apos;s growing eco-tourism and
                adventure-travel movement, which emphasises sustainable travel,
                meaningful connections, and community engagement.
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange" />
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