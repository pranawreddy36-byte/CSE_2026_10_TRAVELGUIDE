"use client";

import { Search } from "lucide-react";

interface SearchPanelProps {
  search: string;
  onSearchChange: (value: string) => void;
}

// CO5: Routing, Forms, Accessibility & Performance Engineering - accessible controlled search input exposes an aria label.
export function SearchPanel({ search, onSearchChange }: SearchPanelProps) {
  return (
    <label className="flex w-full items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
      <Search className="h-5 w-5 text-amber-300" />
      <input
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search Tirupati, Charminar, beaches, forts, temples..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-white/60"
        aria-label="Search destinations"
      />
    </label>
  );
}
