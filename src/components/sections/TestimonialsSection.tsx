import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Testimonials"
            title="What Our Adventurers Say"
            description="Real stories from real explorers who've experienced the Elmaca difference."
          />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 150}>
              <div className="relative flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-orange/20" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange text-orange"
                    />
                  ))}
                </div>
                <p className="flex-1 text-navy/80 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-navy/10 pt-6">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-navy/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
