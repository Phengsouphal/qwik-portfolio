/* eslint-disable qwik/valid-lexical-scope */
import { component$, Slot, $, useVisibleTask$ } from "@builder.io/qwik";
import {
  useLocation,
  useNavigate,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { BaseButton } from "~/components/base-button";
import Image from "~/assets/images/myImg.jpg?jsx";

import ImageVue from "~/assets/images/vuejs-original.png?jsx";
import ImageNuxt from "~/assets/images/nuxtjs-original.png?jsx";
import ImageTs from "~/assets/images/typescript-plain.png?jsx";
import ImageDart from "~/assets/images/dart-original.png?jsx";
import ImageJs from "~/assets/images/javascript-plain.png?jsx";
import ImageLaravel from "~/assets/images/laravel-plain.png?jsx";
import ImageReact from "~/assets/images/react-original.png?jsx";
import ImageTailwind from "~/assets/images/tailwindcss-plain.png?jsx";
import ImageFigma from "~/assets/images/figma-original.png?jsx";
import ImageFlutter from "~/assets/images/flutter-original.png?jsx";
import ImageJava from "~/assets/images/java-original.png?jsx";
import ImageQwik from "~/assets/images/qwik.png?jsx";

import ImageKh from "~/assets/images/flag/kh-flag.png?jsx";
import ImageEn from "~/assets/images/flag/en-flag.png?jsx";
import ImageZh from "~/assets/images/flag/zh-flag.png?jsx";

import { useI18n } from "~/context/i18n-context";
import { SupportedLocale } from "~/i18n/config";
import {
  LuFile,
  LuFolderClosed,
  LuFolderOpen,
  LuGithub,
  LuLanguages,
  LuLinkedin,
  LuMail,
  LuPalette,
  LuRocket,
  LuSend,
  LuUserSquare,
} from "@qwikest/icons/lucide";

export default component$(() => {
  const { setLocale, t } = useI18n();
  const nav = useNavigate();
  const location = useLocation();

  const listTheme = [
    {
      title: "Classic Dark",
      background: "#121212",
      surface: "#1E1E1E",
      primary: "#BB86FC",
      accent: "#03DAC6",
      text: "#FFFFFF",
    },
    {
      title: "Midnight Blue",
      background: "#0D1117",
      surface: "#161B22",
      primary: "#58A6FF",
      accent: "#1F6FEB",
      text: "#C9D1D9",
    },
    {
      title: "Dracula",
      background: "#282A36",
      surface: "#44475A",
      primary: "#BD93F9",
      accent: "#FF79C6",
      text: "#F8F8F2",
    },
    {
      title: "Nord Dark",
      background: "#2E3440",
      surface: "#3B4252",
      primary: "#81A1C1",
      accent: "#88C0D0",
      text: "#ECEFF4",
    },
    {
      title: "Classic Dark",
      background: "#121212",
      surface: "#1E1E1E",
      primary: "#BB86FC",
      accent: "#03DAC6",
      text: "#FFFFFF",
    },
    {
      title: "Charcoal",
      background: "#1C1C1C",
      surface: "#2D2D2D",
      primary: "#E94560",
      accent: "#0F3460",
      text: "#F5F5F5",
    },
    {
      title: "Light Themes",
      background: "#FFFFFF",
      surface: "#F5F5F5",
      primary: "#6200EE",
      accent: "#03DAC6",
      text: "#000000",
    },
    {
      title: "Minimal White",
      background: "#FAFAFA",
      surface: "#FFFFFF",
      primary: "#1E88E5",
      accent: "#43A047",
      text: "#212121",
    },
    {
      title: "Material Light",
      background: "#F0F0F0",
      surface: "#FFFFFF",
      primary: "#6200EE",
      accent: "#03DAC5",
      text: "#000000",
    },
    {
      title: "Pastel",
      background: "#FFF1F1",
      surface: "#FFFFFF",
      primary: "#FFB6B6",
      accent: "#BEE3DB",
      text: "#333333",
    },
    {
      title: "Nord Light",
      background: "#ECEFF4",
      surface: "#E5E9F0",
      primary: "#5E81AC",
      accent: "#81A1C1",
      text: "#2E3440",
    },
  ];

  const changeTheme = $((i: any) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("preferred-theme", i.title);
    }
    console.log("changeTheme", i);
    // accent: "#FF79C6";
    // background: "#282A36";
    // primary: "#BD93F9";
    // surface: "#44475A";
    // text: "#F8F8F2";
    document.documentElement.style.setProperty("--color-mc-bg", i?.background);
    document.documentElement.style.setProperty(
      "--color-mc-bg-card",
      i?.surface
    );
    document.documentElement.style.setProperty("--color-mc-accent", i?.accent);
    document.documentElement.style.setProperty("--color-mc-text", i?.text);
    document.documentElement.style.setProperty("--color-mc-btn", i?.primary);
    document.documentElement.style.setProperty("--color-mc-border", i?.primary);
  });

  useVisibleTask$(() => {
    // This code runs when component is visible (client-side only)
    console.log("Component is now visible");
    if (typeof localStorage !== "undefined") {
      const lang = (localStorage?.getItem("preferred-locale") ||
        "en") as SupportedLocale;
      setLocale(lang);

      const themeKey = localStorage?.getItem("preferred-theme");
      const theme = listTheme.find((i) => i.title == themeKey);
      if (theme) {
        changeTheme(theme);
      }
    }

    return () => {
      // Cleanup code
      console.log("Component is being destroyed");
    };
  });

  const handleClick = $((type: "git" | "tg" | "li" | "fb") => {
    const url =
      type == "git"
        ? "https://github.com/Phengsouphal"
        : type == "tg"
          ? "https://t.me/souphal"
          : type == "li"
            ? "https://www.linkedin.com/in/souphal-pheng-233449225"
            : type == "fb"
              ? "https://www.facebook.com/pheng.sophal.94/"
              : "";
    window.open(url, "_blank");
  });

  const handleDownloadCv = $(() => {
    console.log("object, dldfkkdkf");

    window.open(
      "https://drive.google.com/file/d/1jxVJPEVwWUsCBjAf3XiRBoo-aysDV999/view",
      "_blank"
    );
  });

  return (
    <>
      <div class="w-full max-w-6xl mx-auto">
        <div class="relative mx-auto flex max-w-[1280px] flex-col pt-10 sm:flex-row">
          <div class="mx-auto flex shrink-0 flex-col px-4">
            <div class="bg-mc-bg z-10 -mb-16">
              <div class="profile-anime relative w-fit overflow-hidden rounded-full border-4 border-mc-accent bg-white p-1">
                <Image class="!h-[285px] profile-anime !w-[285px] rounded-full !object-cover"></Image>
              </div>
              <p class="mt-4 text-2xl 2md:text-left text-center font-semibold">
                {t("Pheng Souphal")}
              </p>
              <p class="mb-6 text-lg 2md:text-left text-center">
                {t("5 Year of experience")}
              </p>
            </div>

            <div class="sticky top-0 left-0 !w-[285px]">
              <div class="mb-4 border-b border-mc-accent pt-2">
                <div class="flex-between h-[40px] w-full !justify-start">
                  <Image class="!h-[30px] !w-[30px] rounded-full !object-cover"></Image>
                  <p class="mx-2 text-sm">{t("Pheng Souphal")}</p>
                  <p class="text-xs font-light">{t("5 Year of experience")}</p>
                </div>
              </div>
              <BaseButton
                name="Download CV"
                class="w-full border border-mc-accent"
                onClick$={() => handleDownloadCv()}
              >
                <div q:slot="prefix" class="mr-2">
                  <LuFile></LuFile>
                </div>
              </BaseButton>

              <p class="mt-6 text-center text-lg font-medium">
                {t("Frontend Developer")}
              </p>
              <p class="text-base">{t("My Self Des")}</p>

              <p class="mt-6 text-xl font-semibold">{t("Preference")}</p>
              <div class="mt-4 flex w-full flex-wrap items-start justify-start gap-3">
                {Array.from({ length: 8 }).map((i, index) => (
                  <div
                    key={index}
                    class="bg-mc-bg-card mc-icon-hover flex h-[60px] w-[60px] items-center justify-center rounded-xl shadow-lg"
                  >
                    <>
                      {index == 0 ? (
                        <ImageVue class="h-[42px] w-[42px]"></ImageVue>
                      ) : index == 1 ? (
                        <ImageNuxt class="h-[42px] w-[42px]"></ImageNuxt>
                      ) : index == 2 ? (
                        <ImageJs class="h-[42px] w-[42px]"></ImageJs>
                      ) : index == 3 ? (
                        <ImageTs class="h-[42px] w-[42px]"></ImageTs>
                      ) : index == 4 ? (
                        <ImageTailwind class="h-[42px] w-[42px]"></ImageTailwind>
                      ) : index == 5 ? (
                        <ImageReact class="h-[42px] w-[42px]"></ImageReact>
                      ) : index == 6 ? (
                        <ImageFlutter class="h-[42px] w-[42px]"></ImageFlutter>
                      ) : index == 7 ? (
                        <ImageFigma class="h-[42px] w-[42px]"></ImageFigma>
                      ) : index == 8 ? (
                        <ImageNuxt class="h-[42px] w-[42px]"></ImageNuxt>
                      ) : index == 9 ? (
                        <ImageNuxt class="h-[42px] w-[42px]"></ImageNuxt>
                      ) : (
                        <ImageNuxt class="h-[42px] w-[42px]"></ImageNuxt>
                      )}
                    </>
                  </div>
                ))}
              </div>
              <p class="mt-6 text-xl font-semibold">
                {t("Learning and Reviewing")}
              </p>
              <div class="mt-4 flex w-full flex-wrap items-start justify-start gap-3">
                {Array.from({ length: 4 }).map((i, index) => (
                  <div
                    key={index}
                    class="bg-mc-bg-card mc-icon-hover flex h-[60px] w-[60px] items-center justify-center rounded-xl shadow-lg"
                  >
                    <>
                      {index == 0 ? (
                        <ImageQwik class="h-[42px] w-[42px]"></ImageQwik>
                      ) : index == 1 ? (
                        <ImageLaravel class="h-[42px] w-[42px]"></ImageLaravel>
                      ) : index == 2 ? (
                        <ImageDart class="h-[42px] w-[42px]"></ImageDart>
                      ) : index == 3 ? (
                        <ImageJava class="h-[42px] w-[42px]"></ImageJava>
                      ) : index == 4 ? (
                        <ImageTailwind class="h-[42px] w-[42px]"></ImageTailwind>
                      ) : index == 5 ? (
                        <ImageReact class="h-[42px] w-[42px]"></ImageReact>
                      ) : index == 6 ? (
                        <ImageFlutter class="h-[42px] w-[42px]"></ImageFlutter>
                      ) : index == 7 ? (
                        <ImageFigma class="h-[42px] w-[42px]"></ImageFigma>
                      ) : index == 8 ? (
                        <ImageNuxt class="h-[42px] w-[42px]"></ImageNuxt>
                      ) : index == 9 ? (
                        <ImageNuxt class="h-[42px] w-[42px]"></ImageNuxt>
                      ) : (
                        <ImageNuxt class="h-[42px] w-[42px]"></ImageNuxt>
                      )}
                    </>
                  </div>
                ))}
              </div>

              <p class="mt-6 text-xl font-semibold">{t("Contact")}</p>

              <div class="mt-4 flex w-full flex-col items-start justify-center">
                <BaseButton
                  name="GitHub"
                  class="cursor-pointer hover:!bg-transparent"
                  onClick$={() => handleClick("git")}
                >
                  <div q:slot="prefix">
                    <LuGithub class="text-mc-text mr-2 text-lg"></LuGithub>
                  </div>
                </BaseButton>
                <BaseButton
                  name="Telegram"
                  class="cursor-pointer hover:!bg-transparent"
                  onClick$={() => handleClick("tg")}
                >
                  <div q:slot="prefix">
                    <LuSend class="text-mc-text mr-2 text-lg"></LuSend>
                  </div>
                </BaseButton>

                <BaseButton
                  name="LinkedIn"
                  class="cursor-pointer hover:!bg-transparent"
                  onClick$={() => handleClick("li")}
                >
                  <div q:slot="prefix">
                    <LuLinkedin class="text-mc-text mr-2 text-lg"></LuLinkedin>
                  </div>
                </BaseButton>

                <a href="mailto:phengsouphal@gmail.com" class="gmail">
                  <BaseButton
                    name="Gmail"
                    class="cursor-pointer hover:!bg-transparent"
                  >
                    <div q:slot="prefix">
                      <LuMail class="text-mc-text mr-2 text-lg"></LuMail>
                    </div>
                  </BaseButton>
                </a>
              </div>
            </div>
          </div>
          <div class="flex w-full flex-col px-4 pb-8">
            <div class="bg-mc-bg sticky top-0 right-0 mb-6 flex w-full items-center justify-between border-b  border-mc-accent pt-2">
              <div class="flex items-center justify-start">
                <BaseButton name="CV" onClick$={() => nav("/")}>
                  <div q:slot="prefix">
                    <LuUserSquare class="text-mc-text mr-2 text-lg"></LuUserSquare>
                  </div>
                </BaseButton>
                <BaseButton name="Projects" onClick$={() => nav("/demo")}>
                  <div q:slot="prefix">
                    {location.url.pathname?.replaceAll("/", "") == "demo" ? (
                      <LuFolderOpen class="text-mc-text mr-2 text-lg"></LuFolderOpen>
                    ) : (
                      <LuFolderClosed class="text-mc-text mr-2 text-lg"></LuFolderClosed>
                    )}
                  </div>
                </BaseButton>
              </div>

              <div class="flex items-center justify-end">
                <BaseButton name="">
                  <div q:slot="prefix">
                    <LuRocket class="text-base text-mc-text"></LuRocket>
                  </div>
                </BaseButton>
                <BaseButton
                  name="Theme"
                  id="dropdownDefaultButton"
                  data="dropdown"
                >
                  <div q:slot="prefix" class="mr-2">
                    <LuPalette class="text-base text-mc-text"></LuPalette>
                  </div>
                </BaseButton>
                <BaseButton name="" id="dropdownLanguage" data="dropdownLang">
                  <div q:slot="prefix">
                    <LuLanguages class="text-base text-mc-text"></LuLanguages>
                  </div>
                </BaseButton>
              </div>

              <div
                id="dropdown"
                class="bg-mc-bg-card z-10 hidden max-h-[400px] min-w-40 divide-y divide-gray-100 overflow-y-auto rounded-lg shadow-xl"
              >
                <ul
                  class="px-3 py-3 text-sm"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {listTheme.map((i, index) => (
                    <li
                      key={index}
                      class="mb-3 flex cursor-pointer items-center justify-between rounded-lg px-2 py-3"
                      style={`background-color: ${i.background}`}
                      onClick$={() => changeTheme(i)}
                    >
                      <div class="mr-4 flex items-center justify-start">
                        <p
                          class="text-base font-medium"
                          style={`color: ${i.text}`}
                        >
                          {i.title}
                        </p>
                      </div>
                      <div class="flex items-center justify-end gap-x-1">
                        <div
                          class="h-[20px] w-1.5 rounded-full shadow-xl"
                          style={`background-color: ${i.accent}`}
                        ></div>
                        <div
                          class="h-[20px] w-1.5 rounded-full shadow-xl"
                          style={`background-color: ${i.surface}`}
                        ></div>
                        <div
                          class="h-[20px] w-1.5 rounded-full shadow-xl"
                          style={`background-color: ${i.primary}`}
                        ></div>
                        <div
                          class="h-[20px] w-1.5 rounded-full shadow-xl"
                          style={`background-color: ${i.text}`}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                id="dropdownLang"
                class="bg-mc-bg-card z-10 mr-4 hidden max-h-[400px] min-w-40 divide-y divide-gray-100 overflow-y-auto rounded-lg shadow-xl"
              >
                <ul class=" py-3 text-sm" aria-labelledby="dropdownLanguage">
                  <li>
                    <BaseButton
                      name="English"
                      class="cursor-pointer hover:!bg-transparent"
                      onClick$={() => setLocale("en" as SupportedLocale)}
                    >
                      <div q:slot="prefix">
                        <ImageEn class="h-[20px] w-[20px] mr-2"></ImageEn>
                      </div>
                    </BaseButton>
                  </li>
                  <li>
                    <BaseButton
                      name="ខ្មែរ"
                      class="cursor-pointer hover:!bg-transparent"
                      // eslint-disable-next-line qwik/valid-lexical-scope
                      onClick$={() => setLocale("kh" as SupportedLocale)}
                    >
                      <div q:slot="prefix">
                        <ImageKh class="h-[20px] w-[20px] mr-2"></ImageKh>
                      </div>
                    </BaseButton>
                  </li>
                  <li>
                    <BaseButton
                      name="中文(简体)"
                      class="cursor-pointer hover:!bg-transparent"
                      onClick$={() => {
                        setLocale("zh" as SupportedLocale);
                      }}
                    >
                      <div q:slot="prefix">
                        <ImageZh class="h-[20px] w-[20px] mr-2"></ImageZh>
                      </div>
                    </BaseButton>
                  </li>
                </ul>
              </div>
            </div>
            <Slot></Slot>
          </div>
        </div>

        <p class=" w-full text-center text-xs font-light mt-8 pb-4 ">
          {t("Copy Right")}
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
