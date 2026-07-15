import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { CONTACT, NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons = {
  Instagram,
  Facebook,
  Twitter,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Creating unforgettable road trips, outdoor experiences, and
              meaningful connections across Kenya and beyond.
            </p>
            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon =
                  socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-orange hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {CONTACT.location}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-orange" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-orange"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-orange" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-orange"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm text-white/70">
              Join our community for exclusive trips, travel tips, and adventure
              inspiration.
            </p>
            <a
              href={CONTACT.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-dark hover:-translate-y-0.5"
            >
              Join WhatsApp Community
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="transition-colors hover:text-orange">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-orange">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
