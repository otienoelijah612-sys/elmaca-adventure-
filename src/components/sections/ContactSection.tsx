"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CONTACT } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Get In Touch"
            title="Start Your Adventure"
            description="Ready to explore? Reach out and let's plan your next unforgettable journey together."
            light
          />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2" delay={100}>
            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/20 text-orange">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="mt-1 text-sm text-white/70">{CONTACT.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/20 text-orange">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-orange"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/20 text-orange">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-orange"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3" delay={200}>
            <form
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-white/90"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-white/90"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-white/90"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+254 700 000 000"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                  />
                </div>
                <div>
                  <label
                    htmlFor="adventure"
                    className="mb-1.5 block text-sm font-medium text-white/90"
                  >
                    Adventure Interest
                  </label>
                  <select
                    id="adventure"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white transition-colors outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-navy">
                      Select an adventure
                    </option>
                    <option value="safari" className="text-navy">
                      Maasai Mara Safari
                    </option>
                    <option value="trek" className="text-navy">
                      Mount Kenya Trek
                    </option>
                    <option value="coastal" className="text-navy">
                      Coastal Road Trip
                    </option>
                    <option value="team" className="text-navy">
                      Team Building
                    </option>
                    <option value="custom" className="text-navy">
                      Custom Adventure
                    </option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-white/90"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your dream adventure..."
                    className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
