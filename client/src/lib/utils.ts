import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatYear(year: number): string {
  return year.toString();
}

export function formatLocation(location: string): string {
  return location;
}

export function getImageUrl(url: string): string {
  // In a real app, this might handle image optimization or CDN urls
  return url;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
