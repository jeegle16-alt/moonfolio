export const LOCALE_STORAGE_KEY = "moonfolio-locale";

export const locales = ["kr", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "kr" || value === "en";
}
