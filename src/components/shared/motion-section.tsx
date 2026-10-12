import type { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
}

// CO3: React Component Model - lightweight CSS-only animation wrapper replaces framer-motion to cut ~50KB from the client bundle.
export function MotionSection({ children, className }: MotionSectionProps) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}
