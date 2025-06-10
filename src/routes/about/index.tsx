import { component$, $, getLocale } from "@builder.io/qwik";
import { LuRocket } from "@qwikest/icons/lucide";
import {
  _,
  defaultLocale,
  setDefaultLocale,
  locales,
  setLocaleGetter,
} from "compiled-i18n";
import { LanguageSwitcher } from "~/components/language-switcher";
import { useI18n } from "~/context/i18n-context";

export default component$(() => {
  const { t, tp } = useI18n();
  const handleClick = $((id: any) => {
    console.log("object", locales);
    setLocaleGetter(() => getLocale("it"));
  });
  return (
    <>
      <nav class="border-gray-200 bg-white dark:bg-gray-900">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
              <li>
                <a
                  href="#"
                  class="block rounded-sm bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="w-full rounded-md bg-amber-300 px-4">
        <LuRocket></LuRocket>
        <span>{_`ddd`}</span>
        <p>{_`333`}</p>

        <h1>{t("welcome")}</h1>
        <LanguageSwitcher />
        <h1 class="text-teal-400">Hi 👋 About About</h1>

        <button onClick$={() => handleClick("id")}>sdfdfdf</button>
        <button
          type="button"
          class="me-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-800 focus:outline-none active:scale-90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {t("buttons.save")}
        </button>
        <button
          type="button"
          class="me-2 mb-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Alternative
        </button>
        <button
          type="button"
          class="me-2 mb-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Dark
        </button>
        <button
          type="button"
          class="me-2 mb-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Light
        </button>
      </div>
    </>
  );
});
