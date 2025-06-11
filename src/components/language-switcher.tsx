import { component$ } from "@builder.io/qwik";
import { useI18n } from "../context/i18n-context";
import { SUPPORTED_LOCALES, type SupportedLocale } from "../i18n/config";

const LOCALE_NAMES: Record<SupportedLocale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export const LanguageSwitcher = component$(() => {
  const { locale, setLocale, t } = useI18n();

  return (
    <div class="language-switcher">
      <label for="locale-select">{t("language")}: </label>
      <select
        id="locale-select"
        value={locale.value}
        onChange$={(e) => {
          const target = e.target as HTMLSelectElement;
          // eslint-disable-next-line qwik/valid-lexical-scope
          setLocale(target.value as SupportedLocale);
        }}
        class="locale-select"
      >
        {SUPPORTED_LOCALES.map((loc) => (
          <option key={loc} value={loc}>
            {LOCALE_NAMES[loc]}
          </option>
        ))}
      </select>
    </div>
  );
});
