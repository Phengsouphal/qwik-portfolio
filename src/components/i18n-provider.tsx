import {
  component$,
  useSignal,
  useTask$,
  $,
  Slot,
  useContextProvider,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { I18nContextId } from "../context/i18n-context";
import {
  type SupportedLocale,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  translations,
  getTranslation,
  getPluralTranslation,
} from "../i18n/config";

interface I18nProviderProps {
  initialLocale?: SupportedLocale;
}

export const I18nProvider = component$<I18nProviderProps>(
  ({ initialLocale }) => {
    const location = useLocation();
    const locale = useSignal<SupportedLocale>(initialLocale || DEFAULT_LOCALE);

    // Detect locale from URL or browser
    useTask$(({ track }) => {
      track(() => location.url.pathname);

      // Extract locale from URL path (e.g., /es/page or /fr/about)
      const pathSegments = location.url.pathname.split("/").filter(Boolean);
      const potentialLocale = pathSegments[0] as SupportedLocale;

      if (SUPPORTED_LOCALES.includes(potentialLocale)) {
        locale.value = potentialLocale;
      } else {
        // Fallback to browser language or default
        let browserLang = globalThis.navigator?.language?.split(
          "-"
        )[0] as SupportedLocale;

        if (typeof localStorage !== "undefined") {
          browserLang = (localStorage?.getItem("preferred-locale") ||
            "en") as SupportedLocale;
          console.log(
            SUPPORTED_LOCALES.includes(browserLang),
            "=--=-==-=-",
            browserLang
          );
        }

        locale.value = SUPPORTED_LOCALES.includes(browserLang)
          ? browserLang
          : DEFAULT_LOCALE;
      }
    });

    const t = $((key: string, params?: Record<string, any>) => {
      return getTranslation(translations[locale.value], key, params);
    });

    const tp = $((key: string, count: number, params?: Record<string, any>) => {
      return getPluralTranslation(
        translations[locale.value],
        key,
        count,
        params
      );
    });

    const setLocale = $((newLocale: SupportedLocale) => {
      locale.value = newLocale;
      // Optionally update URL or localStorage here
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("preferred-locale", newLocale);
      }
    });

    const contextValue: any = {
      locale,
      t,
      tp,
      setLocale,
    };

    useContextProvider(I18nContextId, contextValue);

    return <Slot />;
  }
);
