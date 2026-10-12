"use client";

import type { BudgetTier, StateName } from "@/types/tourism";
import { states, seasons } from "@/data/destinations";

export interface DestinationFilters {
  search: string;
  state: StateName | "All";
  budget: BudgetTier | "All";
  season: string | "All";
  minimumRating: number;
}

interface FiltersPanelProps {
  filters: DestinationFilters;
  onChange: (filters: DestinationFilters) => void;
}

// CO5: Routing, Forms, Accessibility & Performance Engineering - controlled form inputs keep filter UI state predictable.
export function FiltersPanel({ filters, onChange }: FiltersPanelProps) {
  return (
    <div className="grid gap-4 rounded-[30px] border border-stone-200 bg-white p-6 shadow-[0_18px_60px_rgba(28,25,23,0.06)] md:grid-cols-2 xl:grid-cols-5">
      <input
        value={filters.search}
        onChange={(event) => onChange({ ...filters, search: event.target.value })}
        placeholder="Search destinations (30 cities)"
        className="rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
      />
      <select
        value={filters.state}
        onChange={(event) =>
          onChange({ ...filters, state: event.target.value as DestinationFilters["state"] })
        }
        className="rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
      >
        <option value="All">All States (30 Cities)</option>
        {states.map((st) => (
          <option key={st} value={st}>
            {st}
          </option>
        ))}
      </select>
      <select
        value={filters.budget}
        onChange={(event) =>
          onChange({ ...filters, budget: event.target.value as DestinationFilters["budget"] })
        }
        className="rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
      >
        <option value="All">All Budgets</option>
        <option value="budget">Budget</option>
        <option value="mid-range">Mid Range</option>
        <option value="premium">Premium</option>
      </select>
      <select
        value={filters.season}
        onChange={(event) => onChange({ ...filters, season: event.target.value })}
        className="rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
      >
        <option value="All">All Seasons</option>
        {seasons.map((sn) => (
          <option key={sn} value={sn}>
            {sn}
          </option>
        ))}
      </select>
      <select
        value={filters.minimumRating}
        onChange={(event) => onChange({ ...filters, minimumRating: Number(event.target.value) })}
        className="rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
      >
        <option value={0}>Any Rating</option>
        <option value={4.0}>4.0+</option>
        <option value={4.5}>4.5+</option>
        <option value={4.8}>4.8+</option>
      </select>
    </div>
  );
}
