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
            description="Hear from members who have explored Kenya with Elmaca Adventure."
          />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              delay={index * 150}
            >
              <div className="relative flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                {/* Quote Icon */}
                <Quote className="absolute right-6 top-6 h-10 w-10 text-orange/20" />

                {/* Rating */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange text-orange"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="flex-1 text-base italic leading-relaxed text-navy/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Customer */}
                <div className="mt-8 border-t border-navy/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-navy">
                        {testimonial.name}
                      </h4>
                    </div>
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