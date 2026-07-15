import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { featuredAdventures } from "@/data/adventures";

export function FeaturedAdventures() {
  return (
    <section id="adventures" className="bg-navy/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Our Trips"
            title="Featured Adventures"
            description="Handpicked journeys designed to showcase the very best of Kenya — from wildlife safaris to mountain treks and coastal escapes."
          />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAdventures.map((adventure, index) => (
            <AnimatedSection key={adventure.slug} delay={index * 100}>
              <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={adventure.image}
                    alt={adventure.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {adventure.price && (
                    <span className="absolute top-4 right-4 rounded-full bg-orange px-3 py-1 text-xs font-bold text-white">
                      {adventure.price}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy transition-colors group-hover:text-orange">
                    {adventure.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy/70">
                    {adventure.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-navy/60">
                    {adventure.duration && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-orange" />
                        {adventure.duration}
                      </span>
                    )}
                    {adventure.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-orange" />
                        {adventure.location}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/adventures/${adventure.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange transition-all group-hover:gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={400}>
          <Button href="#contact" variant="outline" size="lg">
            View All Adventures
            <ArrowRight className="h-5 w-5" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
