import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src={HERO_IMAGE}
        alt="Kenya adventure landscape with savanna and acacia trees"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-linear-to-b from-navy/70 via-navy/50 to-navy/80" />
      <div className="absolute inset-0 bg-linear-to-r from-navy/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide text-white/90 backdrop-blur-sm animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="h-2 w-2 rounded-full bg-orange" />
            Kenya&apos;s Premier Adventure Company
          </p>

          <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
            Explore Life.{" "}
            <span className="text-orange">Make Adventure.</span>
            <br />
            Connect Always.
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Discover unforgettable road trips, breathtaking outdoor experiences,
            and meaningful connections that last a lifetime. Your next great
            adventure starts here.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button href="#contact" size="lg">
              Book Your Adventure
              <ArrowRight className="h-5 w-5" />
            </Button>

            <Button
              href={CONTACT.whatsappCommunity}
              variant="secondary"
              size="lg"
              external
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp Community
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-orange" />
        </div>
      </div>
    </section>
  );
}