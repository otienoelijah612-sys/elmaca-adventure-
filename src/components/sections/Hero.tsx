import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

const HERO_IMAGE = "/images/hero.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src={HERO_IMAGE}
        alt="Elmaca Adventure"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-left">
        <h1 className="font-display text-5xl font-bold text-white md:text-7xl">
          Explore Kenya &
          <br />
          <span className="text-orange">
            the World Differently
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Experience unforgettable road trips, team building, hiking,
          camping and outdoor adventures across Kenya and beyond.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
          <Button href="#contact" size="lg">
            Reserve Your Slot
            <ArrowRight className="h-5 w-5" />
          </Button>

          <Button
            href={CONTACT.whatsappCommunity}
            variant="secondary"
            size="lg"
            external
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}