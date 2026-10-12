import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

// CO3: React Component Model - props configure a reusable heading component across page sections.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-stone-600 md:text-lg">{description}</p>
    </div>
  );
}
