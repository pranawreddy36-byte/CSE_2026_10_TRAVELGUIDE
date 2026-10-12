import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

// CO3: React Component Model - composition wrapper lets children reuse one visual container style.
export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.18)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
