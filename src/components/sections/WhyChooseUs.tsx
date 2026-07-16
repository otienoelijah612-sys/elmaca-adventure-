import { ShieldCheck, CalendarCheck2, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap = {
  shield: ShieldCheck,
  booking: CalendarCheck2,
  community: Users,
};

export function WhyChooseUs() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Why Elmaca"
            title="Why Travel With Us"
            description="Simple, affordable and community-focused adventures designed to help you explore with confidence."
            light
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange hover:bg-white/10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/20 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white">
                    {Icon && <Icon className="h-8 w-8" />}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/75">
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