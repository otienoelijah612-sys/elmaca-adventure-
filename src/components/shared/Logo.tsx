import Link from "next/link";
import { Mountain } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "light" }: LogoProps) {
  return (
    <Link
      href="#home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
          variant === "light"
            ? "bg-orange text-white"
            : "bg-navy text-white",
        )}
      >
        <Mountain className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            variant === "light" ? "text-white" : "text-navy",
          )}
        >
          {SITE_NAME.split(" ")[0]}
        </span>
        <span
          className={cn(
            "text-xs font-medium tracking-[0.2em] uppercase",
            variant === "light" ? "text-orange" : "text-orange",
          )}
        >
          {SITE_NAME.split(" ")[1]}
        </span>
      </span>
    </Link>
  );
}
