import Image from "next/image";
import {
  ArrowRight,
  Handshake,
  Lightbulb,
  Target,
  Users2,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";

const features = [
  {
    icon: Target,
    title: "Custom Programs",
    description: "Tailored activities aligned with your team's goals and culture.",
  },
  {
    icon: Lightbulb,
    title: "Creative Challenges",
    description: "Problem-solving tasks that spark innovation and collaboration.",
  },
  {
    icon: Handshake,
    title: "Trust Building",
    description: "Shared adventures that strengthen bonds and communication.",
  },
  {
    icon: Users2,
    title: "All Team Sizes",
    description: "From startups to enterprises — we scale to fit your needs.",
  },
];

export function TeamBuildingSection() {
  return (
    <section id="team-building" className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <SectionHeading
              label="Corporate Retreats"
              title="Team Building Adventures"
              description="Transform your team with outdoor challenges, leadership activities, and shared experiences in Kenya's most inspiring settings."
              align="left"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-navy/10 p-4 transition-all duration-300 hover:border-orange/30 hover:shadow-md"
                >
                  <feature.icon className="mb-2 h-6 w-6 text-orange" />
                  <h3 className="font-display font-bold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="#contact" size="lg">
                Plan Your Team Retreat
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Team building group activity outdoors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-2xl font-bold text-white">
                    50+ Companies Trust Us
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Delivering impactful team experiences since 2019
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
