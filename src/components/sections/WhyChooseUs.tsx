import { Compass, Map, Shield, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap = {
  map: Map,
  shield: Shield,
  users: Users,
  compass: Compass,
};

export function WhyChooseUs() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Why Elmaca"
            title="Why Choose Us"
            description="We're not just a travel company — we're your partners in discovery, committed to delivering exceptional adventures every step of the way."
            light
          />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-orange/50 hover:bg-white/10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange/20 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
