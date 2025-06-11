import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  LuPalette,
  LuRocket,
  LuLanguages,
  LuGithub,
  LuLinkedin,
  LuSend,
  LuFile,
  LuMail,
  LuLibraryBig,
} from "@qwikest/icons/lucide";
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
import ImageGit from "~/assets/images/git-plain.png?jsx";
import ImageFigma from "~/assets/images/figma-original.png?jsx";
import ImageFlutter from "~/assets/images/flutter-original.png?jsx";
import ImagePython from "~/assets/images/python-original.png?jsx";
import ImagePhp from "~/assets/images/php-plain.png?jsx";
import ImageNext from "~/assets/images/nextjs-original.png?jsx";
import ImageVercel from "~/assets/images/vercel.webp?jsx";
import ImageVuetify from "~/assets/images/vuetify-original.png?jsx";
import ImageJava from "~/assets/images/java-original.png?jsx";
import ImageHtml from "~/assets/images/html5-plain.png?jsx";
import ImageCss from "~/assets/images/css3-plain.png?jsx";
import ImageVaadin from "~/assets/images/vaadin.webp?jsx";
import ImageBootstrap from "~/assets/images/bootstrap-plain.png?jsx";
import ImageQwik from "~/assets/images/qwik.png?jsx";
import ImageAngular from "~/assets/images/angularjs-plain.png?jsx";

import ImageFirebase from "~/assets/images/firebase-plain.png?jsx";
import ImageGoogleMap from "~/assets/images/google-map.png?jsx";

import ImagePhotopea from "~/assets/images/photopea.webp?jsx";
import ImagePhotoshop from "~/assets/images/photoshop-plain.png?jsx";
import ImageIll from "~/assets/images/illustrator-plain.png?jsx";
import ImageXd from "~/assets/images/xd-plain.png?jsx";

import ImageNpm from "~/assets/images/npm.png?jsx";
import ImageYarn from "~/assets/images/yarn.webp?jsx";
import ImageVite from "~/assets/images/vite.png?jsx";
import ImagePrettier from "~/assets/images/prettier.png?jsx";

import ImageVueX from "~/assets/images/vuex-store.png?jsx";
import ImageRecoil from "~/assets/images/recoil.png?jsx";
import ImageRedux from "~/assets/images/redux-original.png?jsx";
import ImageGetx from "~/assets/images/getx.png?jsx";
import ImagePinia from "~/assets/images/pinia.png?jsx";

import ImageAntd from "~/assets/images/antd.png?jsx";
import ImageVuetifyy from "~/assets/images/vuetify.png?jsx";
import ImageArco from "~/assets/images/arco.png?jsx";
import ImageViewUi from "~/assets/images/view-ui.png?jsx";
import ImageFlowbite from "~/assets/images/flowbite.png?jsx";
import ImageVant from "~/assets/images/vant.png?jsx";

import ImageScss from "~/assets/images/scss.png?jsx";
import ImageSwiper from "~/assets/images/swiper-logo.png?jsx";
import ImageAos from "~/assets/images/aos.png?jsx";
import ImageEchart from "~/assets/images/e-chart.png?jsx";
import ImageFramer from "~/assets/images/framer.webp?jsx";

import { useI18n } from "~/context/i18n-context";

export default component$(() => {
  const { t } = useI18n();

  const handleClick = $((type: "git" | "tg" | "li" | "fb") => {
    console.log("object, dldfkkdkf");
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

  const listFrontend = [
    {
      title: "Vue",
      com: <ImageVue></ImageVue>,
      isFocus: true,
    },
    {
      title: "Nuxt",
      com: <ImageNuxt></ImageNuxt>,
      isFocus: true,
    },
    {
      title: "React",
      com: <ImageReact></ImageReact>,
      isFocus: false,
    },
    {
      title: "Next",
      com: <ImageNext></ImageNext>,
      isFocus: false,
    },
    {
      title: "Qwik",
      com: <ImageQwik></ImageQwik>,
      isFocus: false,
    },

    {
      title: "Angular",
      com: <ImageAngular></ImageAngular>,
      isFocus: false,
    },
  ];
  const listBackend = [
    {
      title: "Laravel",
      com: <ImageLaravel></ImageLaravel>,
      isFocus: true,
    },
    {
      title: "Python",
      com: <ImagePython></ImagePython>,
      isFocus: false,
    },
    {
      title: "PHP",
      com: <ImagePhp></ImagePhp>,
      isFocus: false,
    },
  ];

  const listStyleLib = [
    {
      title: "Tailwind",
      com: <ImageTailwind></ImageTailwind>,
      isFocus: true,
    },
    {
      title: "Scss",
      com: <ImageScss></ImageScss>,
      isFocus: true,
    },
    {
      title: "E Chart",
      com: <ImageEchart></ImageEchart>,
      isFocus: true,
    },
    {
      title: "AOS",
      com: <ImageAos class="object-cover"></ImageAos>,
      isFocus: false,
    },
    {
      title: "Swiper",
      com: <ImageSwiper></ImageSwiper>,
      isFocus: false,
    },
    {
      title: "Framer",
      com: <ImageFramer></ImageFramer>,
      isFocus: false,
    },
  ];

  const listComponentLib = [
    {
      title: "Vant",
      com: <ImageVant></ImageVant>,
      isFocus: true,
    },
    {
      title: "Arco",
      com: <ImageArco></ImageArco>,
      isFocus: true,
    },
    {
      title: "Vuetify",
      com: <ImageVuetifyy></ImageVuetifyy>,
      isFocus: true,
    },
    {
      title: "View UI",
      com: <ImageViewUi></ImageViewUi>,
      isFocus: true,
    },
    {
      title: "Antd",
      com: <ImageAntd></ImageAntd>,
      isFocus: false,
    },
    {
      title: "Flowbite",
      com: <ImageFlowbite></ImageFlowbite>,
      isFocus: false,
    },
    {
      title: "Bootstrap",
      com: <ImageBootstrap></ImageBootstrap>,
      isFocus: false,
    },
  ];
  const listStateManagement = [
    {
      title: "Pinia",
      com: <ImagePinia></ImagePinia>,
      isFocus: true,
    },
    {
      title: "Vuex",
      com: <ImageVueX></ImageVueX>,
      isFocus: true,
    },
    {
      title: "Redux",
      com: <ImageRedux></ImageRedux>,
      isFocus: false,
    },
    {
      title: "Recoil",
      com: <ImageRecoil></ImageRecoil>,
      isFocus: false,
    },
    {
      title: "GetX",
      com: <ImageGetx></ImageGetx>,
      isFocus: false,
    },
  ];

  const listTool = [
    {
      title: "Git",
      com: <ImageGit></ImageGit>,
      isFocus: true,
    },
    {
      title: "Vite",
      com: <ImageVite></ImageVite>,
      isFocus: true,
    },
    {
      title: "Prettier",
      com: <ImagePrettier></ImagePrettier>,
      isFocus: false,
    },
  ];

  const listMultiPlatform = [
    {
      title: "React Native",
      com: <ImageReact></ImageReact>,
      isFocus: false,
    },
    {
      title: "Flutter",
      com: <ImageFlutter></ImageFlutter>,
      isFocus: false,
    },
  ];
  const listDependency = [
    {
      title: "Npm",
      com: <ImageNpm></ImageNpm>,
      isFocus: true,
    },
    {
      title: "Yarn",
      com: <ImageYarn></ImageYarn>,
      isFocus: false,
    },
  ];
  const listDesign = [
    {
      title: "Figma",
      com: <ImageFigma></ImageFigma>,
      isFocus: true,
    },
    {
      title: "Illustrator",
      com: <ImageIll></ImageIll>,
      isFocus: false,
    },
    {
      title: "Abode XD",
      com: <ImageXd></ImageXd>,
      isFocus: false,
    },
    {
      title: "Photoshop",
      com: <ImagePhotoshop></ImagePhotoshop>,
      isFocus: false,
    },
    {
      title: "Photopea",
      com: <ImagePhotopea></ImagePhotopea>,
      isFocus: false,
    },
  ];
  const listOther = [
    {
      title: "Vercel",
      com: <ImageVercel></ImageVercel>,
      isFocus: true,
    },
    {
      title: "Firebase",
      com: <ImageFirebase></ImageFirebase>,
      isFocus: false,
    },
    {
      title: "Google Map",
      com: <ImageGoogleMap></ImageGoogleMap>,
      isFocus: false,
    },
  ];

  const KnowledgeList = [
    {
      title: "Frontend",
      list: listFrontend,
    },
    {
      title: "Backend",
      list: listBackend,
    },
    {
      title: "Styling Libraries",
      list: listStyleLib,
    },
    {
      title: "Component UI Libraries",
      list: listComponentLib,
    },
    {
      title: "State Management ",
      list: listStateManagement,
    },
    {
      title: "Tools",
      list: listTool,
    },
    {
      title: "MultiPlatform",
      list: listMultiPlatform,
    },
    {
      title: "Dependency",
      list: listDependency,
    },
    {
      title: "Design",
      list: listDesign,
    },
    {
      title: "Other",
      list: listOther,
    },
  ];

  const changeTheme = $((i: any) => {
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

  return (
    <>
      <div class="relative mx-auto flex max-w-[1280px] flex-col pt-10 sm:flex-row">
        <div class="mx-auto flex shrink-0 flex-col px-4">
          <div class="bg-mc-bg z-10 -mb-16">
            <div class="relative w-fit overflow-hidden rounded-full border-4 border-blue-500 bg-white p-1">
              <Image class="!h-[285px] !w-[285px] rounded-full !object-cover"></Image>
            </div>
            <p class="mt-4 text-2xl font-semibold">Pheng Souphal</p>
            <p class="mb-6 text-lg">+5 Year of experience</p>
          </div>

          <div class="sticky top-0 left-0 !w-[285px]">
            <div class="mb-4 border-b border-blue-400 pt-2">
              <div class="flex-between h-[40px] w-full !justify-start">
                <Image class="!h-[30px] !w-[30px] rounded-full !object-cover"></Image>
                <p class="mx-2 text-sm">{"Pheng Souphal"}</p>
                <p class="text-xs font-light">+5 Year of experience</p>
              </div>
            </div>
            <BaseButton
              name="Download CV"
              class="w-full border border-blue-300"
            >
              <div q:slot="prefix" class="mr-2">
                <LuFile></LuFile>
              </div>
            </BaseButton>

            <p class="mt-6 text-center text-lg font-medium">
              Frontend Developer
            </p>
            <p class="text-base">
              I'm a frontend developer with full-stack skills, passionate about
              developing smooth and engaging user interfaces. My work centers
              around creating responsive and accessible applications that
              delight users. Currently, I'm contributing to the creation of
              top-tier digital experiences at DR Tech Co.,Ltd
            </p>

            <p class="mt-6 text-xl font-semibold">Preference</p>
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
            <p class="mt-6 text-xl font-semibold">Learning and Reviewing</p>
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

            <p class="mt-6 text-xl font-semibold">Contact</p>

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
          <div class="bg-mc-bg sticky top-0 right-0 mb-6 flex w-full items-center justify-between border-b border-blue-400 pt-2">
            <div class="flex items-center justify-start">
              <BaseButton name="Cv"></BaseButton>
              <BaseButton name="Demo"></BaseButton>
            </div>

            <div class="flex items-center justify-end">
              <BaseButton name="">
                <div q:slot="prefix">
                  <LuRocket class="text-base"></LuRocket>
                </div>
              </BaseButton>
              <BaseButton
                name="Theme"
                id="dropdownDefaultButton"
                data="dropdown"
              >
                <div q:slot="prefix" class="mr-2">
                  <LuPalette class="text-base"></LuPalette>
                </div>
              </BaseButton>
              <BaseButton name="">
                <div q:slot="prefix">
                  <LuLanguages class="text-base"></LuLanguages>
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
          </div>
          <div class="flex w-full flex-col">
            <div class="flex items-center justify-start gap-x-2">
              <p>👷‍♂️ {"Work experience"}</p>
              <p class="bg-mc-accent ml-3 rounded-md px-2 py-1.5 text-sm">
                {"+5 years of experience"}
              </p>
            </div>

            <div class="2md:grid-cols-2 mt-4 grid grid-cols-1 gap-4">
              <div class="bg-mc-bg-card flex w-full flex-col items-center justify-between rounded-xl p-4 shadow-lg">
                <div class="w-full">
                  <div class="flex items-center justify-start gap-x-2">
                    <p class="text-xl font-semibold"> {"Dr Tech "}</p>
                    <p class="bg-mc-accent ml-3 rounded-full px-2 py-1 text-xs font-semibold">
                      {"18 Month"}
                    </p>
                  </div>
                  <div class="mc-des p-4">
                    <p>{t("Dr Des 1")}</p>
                    <p>{t("Dr Des 2")}</p>
                    <p>{t("Dr Des 3")}</p>
                    <p>{t("Dr Des 4")}</p>
                    <p>{t("Dr Des 5")}</p>
                  </div>
                </div>

                <div class="flex w-full flex-wrap items-start justify-start gap-3 pl-4">
                  {Array.from({ length: 8 }).map((i, index) => (
                    <div
                      key={index}
                      class="mc-icon-hover bg-mc-bg flex h-[36px] w-[36px] items-center justify-center rounded-lg"
                    >
                      <>
                        {index == 0 ? (
                          <ImageVue class="h-[24px] w-[24px]"></ImageVue>
                        ) : index == 1 ? (
                          <ImageNuxt class="h-[24px] w-[24px]"></ImageNuxt>
                        ) : index == 3 ? (
                          <ImageJs class="h-[24px] w-[24px]"></ImageJs>
                        ) : index == 4 ? (
                          <ImageTs class="h-[24px] w-[24px]"></ImageTs>
                        ) : index == 5 ? (
                          <ImageTailwind class="h-[24px] w-[24px]"></ImageTailwind>
                        ) : index == 6 ? (
                          <ImageGit class="h-[24px] w-[24px]"></ImageGit>
                        ) : index == 7 ? (
                          <ImageVuetify class="h-[24px] w-[24px]"></ImageVuetify>
                        ) : index == 8 ? (
                          <ImageVuetify class="h-[24px] w-[24px]"></ImageVuetify>
                        ) : index == 9 ? (
                          <ImageNuxt class="h-[24px] w-[24px]"></ImageNuxt>
                        ) : index == 10 ? (
                          <ImageNuxt class="h-[24px] w-[24px]"></ImageNuxt>
                        ) : (
                          <ImageReact class="h-[24px] w-[24px]"></ImageReact>
                        )}
                      </>
                    </div>
                  ))}
                </div>
              </div>
              <div class="bg-mc-bg-card flex w-full flex-col items-center justify-between rounded-xl p-4 shadow-lg">
                <div class="">
                  <div class="flex items-center justify-start gap-x-2">
                    <p class="text-xl font-semibold">{"Gambit"}</p>
                    <p class="bg-mc-accent ml-3 rounded-full px-2 py-1 text-xs font-semibold">
                      {"12 month"}
                    </p>
                  </div>
                  <div class="mc-des p-4">
                    <p>{t("GamBit Des 1")}</p>
                    <p>{t("GamBit Des 2")}</p>
                    <p>{t("GamBit Des 3")}</p>
                    <p>{t("GamBit Des 4")}</p>
                    <p>{t("GamBit Des 5")}</p>
                  </div>
                </div>

                <div class="flex w-full flex-wrap items-start justify-start gap-3 pl-4">
                  {Array.from({ length: 9 }).map((i, index) => (
                    <div
                      key={index}
                      class="mc-icon-hover bg-mc-bg flex h-[36px] w-[36px] items-center justify-center rounded-lg"
                    >
                      <>
                        {index == 0 ? (
                          <ImageVue class="h-[24px] w-[24px]"></ImageVue>
                        ) : index == 1 ? (
                          <ImageNuxt class="h-[24px] w-[24px]"></ImageNuxt>
                        ) : index == 2 ? (
                          <ImageJs class="h-[24px] w-[24px]"></ImageJs>
                        ) : index == 3 ? (
                          <ImageTs class="h-[24px] w-[24px]"></ImageTs>
                        ) : index == 4 ? (
                          <ImageHtml class="h-[24px] w-[24px]"></ImageHtml>
                        ) : index == 5 ? (
                          <ImageCss class="h-[24px] w-[24px]"></ImageCss>
                        ) : index == 6 ? (
                          <ImageTailwind class="h-[24px] w-[24px]"></ImageTailwind>
                        ) : index == 7 ? (
                          <ImageDart class="h-[24px] w-[24px]"></ImageDart>
                        ) : index == 8 ? (
                          <ImageFlutter class="h-[24px] w-[24px]"></ImageFlutter>
                        ) : index == 9 ? (
                          <ImageGit class="h-[24px] w-[24px]"></ImageGit>
                        ) : index == 10 ? (
                          <ImageVercel class="h-[24px] w-[24px]"></ImageVercel>
                        ) : (
                          <ImageNuxt class="h-[24px] w-[24px]"></ImageNuxt>
                        )}
                      </>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="bg-mc-bg-card mt-4 flex w-full flex-col items-center justify-between rounded-xl p-4 shadow-lg">
              <div class="w-full">
                <div class="flex items-center justify-start gap-x-2">
                  <p class="text-xl font-semibold"> {"VTech"}</p>
                  <p class="bg-mc-accent ml-3 rounded-full px-2 py-1 text-xs font-semibold">
                    {"12 Months"}
                  </p>
                </div>
                <div class="mc-des p-4">
                  <p>{t("Vtech Des 1")}</p>
                  <p>{t("Vtech Des 2")}</p>
                  <p>{t("Vtech Des 3")}</p>
                  <p>{t("Vtech Des 4")}</p>
                  <p>{t("Vtech Des 5")}</p>
                </div>
              </div>

              <div class="flex w-full flex-wrap items-start justify-start gap-3">
                {Array.from({ length: 9 }).map((i, index) => (
                  <div
                    key={index}
                    class="mc-icon-hover bg-mc-bg flex h-[36px] w-[36px] items-center justify-center rounded-lg"
                  >
                    <>
                      {index == 0 ? (
                        <ImageNext class="h-[24px] w-[24px]"></ImageNext>
                      ) : index == 1 ? (
                        <ImageReact class="h-[24px] w-[24px]"></ImageReact>
                      ) : index == 2 ? (
                        <ImageJs class="h-[24px] w-[24px]"></ImageJs>
                      ) : index == 3 ? (
                        <ImageTs class="h-[24px] w-[24px]"></ImageTs>
                      ) : index == 4 ? (
                        <ImageTailwind class="h-[24px] w-[24px]"></ImageTailwind>
                      ) : index == 5 ? (
                        <ImagePhp class="h-[24px] w-[24px]"></ImagePhp>
                      ) : index == 6 ? (
                        <ImageVercel class="h-[24px] w-[24px]"></ImageVercel>
                      ) : index == 7 ? (
                        <ImageGit class="h-[24px] w-[24px]"></ImageGit>
                      ) : index == 8 ? (
                        <ImageVue class="h-[24px] w-[24px]"></ImageVue>
                      ) : index == 9 ? (
                        <ImageNuxt class="h-[24px] w-[24px]"></ImageNuxt>
                      ) : (
                        <ImageNuxt class="h-[24px] w-[24px]"></ImageNuxt>
                      )}
                    </>
                  </div>
                ))}
              </div>
            </div>
            <div class="2md:grid-cols-2 mt-4 grid grid-cols-1 gap-4">
              <div class="bg-mc-bg-card flex w-full flex-col items-center justify-between rounded-xl p-4 shadow-lg">
                <div class="w-full">
                  <div class="flex items-center justify-start gap-x-2">
                    <p class="text-xl font-semibold"> {"Bikay "}</p>
                    <p class="bg-mc-accent ml-3 rounded-full px-2 py-1 text-xs font-semibold">
                      {"16 Months"}
                    </p>
                  </div>
                  <div class="mc-des p-4">
                    <p>{t("Bikay Des 1")}</p>
                    <p>{t("Bikay Des 2")}</p>
                    <p>{t("Bikay Des 3")}</p>
                    <p>{t("Bikay Des 4")}</p>
                    <p>{t("Bikay Des 5")}</p>
                  </div>
                </div>

                <div class="flex w-full flex-wrap items-start justify-start gap-3">
                  {Array.from({ length: 9 }).map((i, index) => (
                    <div
                      key={index}
                      class="mc-icon-hover bg-mc-bg flex h-[36px] w-[36px] items-center justify-center rounded-lg"
                    >
                      <>
                        {index == 1 ? (
                          <ImageReact class="h-[24px] w-[24px]"></ImageReact>
                        ) : index == 2 ? (
                          <ImageLaravel class="h-[24px] w-[24px]"></ImageLaravel>
                        ) : index == 3 ? (
                          <ImageJs class="h-[24px] w-[24px]"></ImageJs>
                        ) : index == 4 ? (
                          <ImageTs class="h-[24px] w-[24px]"></ImageTs>
                        ) : index == 5 ? (
                          <ImageBootstrap class="h-[24px] w-[24px]"></ImageBootstrap>
                        ) : index == 6 ? (
                          <ImagePhp class="h-[24px] w-[24px]"></ImagePhp>
                        ) : index == 7 ? (
                          <ImageFirebase class="h-[24px] w-[24px]"></ImageFirebase>
                        ) : index == 8 ? (
                          <ImageGit class="h-[24px] w-[24px]"></ImageGit>
                        ) : index == 9 ? (
                          <ImagePhp class="h-[24px] w-[24px]"></ImagePhp>
                        ) : index == 10 ? (
                          <ImageGit class="h-[24px] w-[24px]"></ImageGit>
                        ) : (
                          <ImageTailwind class="h-[24px] w-[24px]"></ImageTailwind>
                        )}
                      </>
                    </div>
                  ))}
                </div>
              </div>
              <div class="bg-mc-bg-card flex w-full flex-col items-center justify-between rounded-xl p-4 shadow-lg">
                <div class="">
                  <div class="flex items-center justify-start gap-x-2">
                    <p class="text-xl font-semibold">{"Iota"}</p>
                    <p class="bg-mc-accent ml-3 rounded-full px-2 py-1 text-xs font-semibold">
                      {"12 Month"}
                    </p>
                  </div>
                  <div class="mc-des p-4">
                    <p>{t("Iota Des 1")}</p>
                    <p>{t("Iota Des 2")}</p>
                    <p>{t("Iota Des 3")}</p>
                    <p>{t("Iota Des 4")}</p>
                    <p>{t("Iota Des 5")}</p>
                  </div>
                </div>

                <div class="flex w-full flex-wrap items-start justify-start gap-3">
                  {Array.from({ length: 5 }).map((i, index) => (
                    <div
                      key={index}
                      class="mc-icon-hover bg-mc-bg flex h-[36px] w-[36px] items-center justify-center rounded-lg"
                    >
                      <>
                        {index == 1 ? (
                          <ImageJava class="h-[24px] w-[24px]"></ImageJava>
                        ) : index == 2 ? (
                          <ImageVaadin class="h-[24px] w-[24px]"></ImageVaadin>
                        ) : index == 3 ? (
                          <ImageHtml class="h-[24px] w-[24px]"></ImageHtml>
                        ) : index == 4 ? (
                          <ImageCss class="h-[24px] w-[24px]"></ImageCss>
                        ) : index == 0 ? (
                          <ImageJs class="h-[24px] w-[24px]"></ImageJs>
                        ) : (
                          <ImageVercel class="h-[24px] w-[24px]"></ImageVercel>
                        )}
                      </>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="bg-mc-bg-card mt-4 flex w-full flex-col items-center justify-between rounded-xl p-4 shadow-lg">
              <div class="w-full">
                <div class="flex items-center justify-start gap-x-2">
                  <p class="text-xl font-semibold"> {"Freelancer "}</p>
                  <p class="bg-mc-accent ml-3 rounded-full px-2 py-1 text-xs font-semibold">
                    {"16 Month"}
                  </p>
                </div>
                <div class="mc-des p-4">
                  <p>{t("Freelance Des 1")}</p>
                  <p>{t("Freelance Des 2")}</p>
                  <p>{t("Freelance Des 8")}</p>
                  <p>{t("Freelance Des 3")}</p>
                  <p>{t("Freelance Des 4")}</p>
                  <p>{t("Freelance Des 5")}</p>
                  <p>{t("Freelance Des 6")}</p>
                  <p>{t("Freelance Des 7")}</p>
                </div>
              </div>

              <div class="flex w-full flex-wrap items-start justify-start gap-3">
                {Array.from({ length: 8 }).map((i, index) => (
                  <div
                    key={index}
                    class="mc-icon-hover bg-mc-bg flex h-[36px] w-[36px] items-center justify-center rounded-lg"
                  >
                    <>
                      {index == 0 ? (
                        <ImageVue class="h-[24px] w-[24px]"></ImageVue>
                      ) : index == 1 ? (
                        <ImageVuetify class="h-[24px] w-[24px]"></ImageVuetify>
                      ) : index == 2 ? (
                        <ImageJs class="h-[24px] w-[24px]"></ImageJs>
                      ) : index == 3 ? (
                        <ImageTs class="h-[24px] w-[24px]"></ImageTs>
                      ) : index == 4 ? (
                        <ImagePython class="h-[24px] w-[24px]"></ImagePython>
                      ) : index == 5 ? (
                        <ImagePhp class="h-[24px] w-[24px]"></ImagePhp>
                      ) : index == 6 ? (
                        <ImageGit class="h-[24px] w-[24px]"></ImageGit>
                      ) : index == 8 ? (
                        <ImageNuxt class="h-[24px] w-[24px]"></ImageNuxt>
                      ) : (
                        <ImageVercel class="h-[24px] w-[24px]"></ImageVercel>
                      )}
                    </>
                  </div>
                ))}
              </div>
            </div>

            <div class="mt-6 w-full">
              <div class="flex-between !justify-start">
                <LuLibraryBig class="mr-1 text-xl"> </LuLibraryBig>
                <p class="text-xl font-semibold"> {"Knowledge"}</p>
              </div>
              {KnowledgeList.map((i, index) => (
                <>
                  <p key={index} class="my-4">
                    {i.title}
                  </p>
                  <div class="flex w-full flex-wrap items-center justify-start gap-2">
                    {i.list.map((i, index) => (
                      <div
                        key={index}
                        class={[
                          "flex items-center justify-center rounded-lg px-2 py-2 shadow-lg",
                          i.isFocus
                            ? "bg-mc-accent"
                            : "bg-mc-bg-card border-mc-accent border-[0.5px]",
                        ]}
                      >
                        <div class="bg-mc-bg flex h-[36px] w-[36px] items-center justify-center rounded-xl p-1.5">
                          {i.com}
                        </div>
                        <p class="ml-2.5 pr-2 text-sm">{i.title}</p>
                      </div>
                    ))}
                  </div>
                </>
              ))}
              {/* <p class="my-4">{"Frontend"}</p>
              <div class="flex w-full flex-wrap items-start justify-start gap-3"></div>
              <p class="my-4">{"Backend"}</p>

              <p class="my-4">{"Styling Libraries"}</p>

              <p class="my-4">{"Component UI Libraries"}</p>
              <p class="my-4">{"State Management"}</p>

              <p class="my-4">{"Tools"}</p>
              <p class="my-4">{"Multiplateform "}</p>
              <p class="my-4">{"Programming Languages "}</p>
              <p class="my-4">{"Design"}</p> */}
            </div>
          </div>
        </div>
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
