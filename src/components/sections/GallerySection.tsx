import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-navy/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Memories"
            title="Adventure Gallery"
            description="A glimpse into the breathtaking moments our adventurers experience across Kenya's diverse landscapes."
          />
        </AnimatedSection>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={image.src} delay={index * 80}>
              <div
                className={cn(
                  "group relative mb-4 overflow-hidden rounded-2xl break-inside-avoid lg:mb-5",
                  image.span === "wide" && "sm:col-span-2",
                )}
              >
                <div
                  className={cn(
                    "relative w-full",
                    image.span === "tall" ? "aspect-3/4" : "aspect-4/3",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-all duration-500 group-hover:bg-navy/40" />
                  <p className="absolute bottom-4 left-4 translate-y-4 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {image.alt}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
