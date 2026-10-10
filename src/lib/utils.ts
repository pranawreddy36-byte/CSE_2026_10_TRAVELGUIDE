import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// CO2: JavaScript & TypeScript Engineering - reusable module helper composes class values predictably.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// CO2: JavaScript & TypeScript Engineering - pure formatting function keeps display transforms isolated.
export function formatCurrencyLabel(value: string) {
  return value.replace("INR", "Rs.");
}
