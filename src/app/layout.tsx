import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { MessageCircle } from "lucide-react";
import "./globals.css";
import { CONTACT } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elmaca Adventure | Explore Life. Make Adventure. Connect Always.",
  description:
    "Unforgettable road trips, outdoor experiences and meaningful connections across Kenya. Book your next adventure with Elmaca Adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        {children}

        {/* Floating WhatsApp Button */}
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </body>
    </html>
  );
}