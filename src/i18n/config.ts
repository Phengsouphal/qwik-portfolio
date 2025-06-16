export interface TranslationFn {
  (key: string, params?: Record<string, any>): string;
}

export interface Translations {
  [key: string]: any;
}

export const SUPPORTED_LOCALES = ["en", "es", "fr", "zh", "kh"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = "en";

// Import translations
import enTranslations from "../locale/en.json";
import esTranslations from "../locale/es.json";
import frTranslations from "../locale/fr.json";
import zhTranslations from "../locale/zh.json";
import khTranslations from "../locale/kh.json";

export const translations: Record<SupportedLocale, Translations> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  zh: zhTranslations,
  kh: khTranslations,
};

// Helper function to get nested translation
export function getTranslation(
  translations: Translations,
  key: string,
  params?: Record<string, any>
): string {
  // console.log(key);

  const keys = key?.split(".") || [];
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  if (typeof value !== "string") {
    return key;
  }

  // Handle parameter interpolation
  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramName) => {
      return params[paramName]?.toString() || match;
    });
  }

  return value;
}

// Plural handling function
export function getPluralTranslation(
  translations: Translations,
  key: string,
  count: number,
  params?: Record<string, any>
): string {
  let pluralKey: string;

  if (count === 0) {
    pluralKey = `${key}_zero`;
  } else if (count === 1) {
    pluralKey = `${key}_one`;
  } else {
    pluralKey = `${key}_other`;
  }

  return getTranslation(translations, pluralKey, {
    count,
    ...params,
  });
}
