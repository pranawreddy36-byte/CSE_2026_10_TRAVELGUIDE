import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "pill";

// CO3: React Component Model - variant map centralizes reusable component styling.
const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#f7d9a9_0%,#f4b860_50%,#d8872a_100%)] text-stone-950 shadow-[0_20px_60px_rgba(196,120,35,0.35)] hover:scale-[1.02]",
  secondary:
    "border border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/15",
  ghost: "text-white/80 hover:text-white hover:bg-white/10",
  pill: "border border-stone-200 bg-white text-stone-700 hover:border-amber-300 hover:text-stone-950",
};

interface SharedProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = SharedProps & { href: string };

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  // CO5: Routing, Forms, Accessibility & Performance Engineering - focus-visible ring preserves keyboard accessibility.
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[0.2em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: LinkButtonProps) {
  // CO5: Routing, Forms, Accessibility & Performance Engineering - Next Link enables client-side route navigation.
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[0.2em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
