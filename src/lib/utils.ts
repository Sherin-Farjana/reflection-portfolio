import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to conditionally merge Tailwind class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type-safe string validation helper
export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};
