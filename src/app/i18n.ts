import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "../shared/lib/i18n/locales/en.json";
import RU from "../shared/lib/i18n/locales/ru.json";
import UZ from "../shared/lib/i18n/locales/uz.json";

import "dayjs/locale/en";
import "dayjs/locale/ru";
import "dayjs/locale/uz";
import dayjs from "dayjs";

const resources = {
  en: { translation: EN },
  ru: { translation: RU },
  uz: { translation: UZ },
} as const;

const lng = localStorage.getItem("LOCALE") || "ru";

function capitalizeFirstLetter(word: string) {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeMonth(dateStr: string) {
  const parts = dateStr.split(" ");
  if (parts.length >= 2) {
    parts[1] = capitalizeFirstLetter(parts[1] as string);
  }
  return parts.join(" ");
}

const originalFormat = dayjs.prototype.format;
dayjs.prototype.format = function (formatStr: string) {
  const formatted = originalFormat.call(this, formatStr);
  return capitalizeMonth(formatted);
};

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: "ru",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

dayjs.locale(lng);

i18n.on("languageChanged", (language) => {
  dayjs.locale(language);
});

export default i18n;
