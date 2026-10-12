// CO2: JavaScript & TypeScript Engineering - data array feeds a deterministic stats presentation.
const stats = [
  { value: "8", label: "Primary destinations" },
  { value: "19+", label: "Iconic attractions covered" },
  { value: "2", label: "States on one map" },
  { value: "100%", label: "Planning-focused guidance" },
];

// CO1: Foundations of Front-End Engineering & Framework Design - declarative rendering keeps metrics separate from layout.
export function StatsBand() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[28px] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-xl"
        >
          <div className="font-serif text-4xl">{stat.value}</div>
          <p className="mt-3 text-sm uppercase tracking-[0.26em] text-white/65">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
