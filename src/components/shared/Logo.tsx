import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="#home"
      className={cn(
        "group flex items-center transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg overflow-hidden">
        <Image
          src="/images/ELMACA LOGO.png"
          alt="Elmaca Adventure"
          width={40}
          height={40}
          priority
          className="object-contain scale-110"
        />
      </div>
    </Link>
  );
}