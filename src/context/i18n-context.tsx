import { createContextId, useContext, type Signal } from "@builder.io/qwik";
import { type SupportedLocale, type TranslationFn } from "../i18n/config";

export interface I18nContext {
  locale: Signal<SupportedLocale>;
  t: TranslationFn;
  tp: (key: string, count: number, params?: Record<string, any>) => string;
  setLocale: (locale: SupportedLocale) => void;
}

export const I18nContextId = createContextId<I18nContext>("i18n-context");

export const useI18n = () => {
  const context = useContext(I18nContextId);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
