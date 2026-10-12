import Link from "next/link";

// CO5: Routing, Forms, Accessibility & Performance Engineering - framework error boundary gives users a recovery route.
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-amber-600">Destination not found</p>
      <h1 className="mt-4 font-serif text-5xl text-stone-950">That route isn’t on the map yet.</h1>
      <p className="mt-4 text-base leading-8 text-stone-600">
        Head back to the destination browser to continue exploring Andhra Pradesh and Telangana.
      </p>
      <Link
        href="/destinations"
        className="mt-8 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white"
      >
        Browse destinations
      </Link>
    </div>
  );
}
