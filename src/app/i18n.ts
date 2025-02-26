import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "../shared/lib/i18n/locales/en.json";
import RU from "../shared/lib/i18n/locales/ru.json";
import UZ from "../shared/lib/i18n/locales/uz.json";

const resources = {
  en: { translation: EN },
  ru: { translation: RU },
  uz: { translation: UZ },
} as const;

const lng = localStorage.getItem("LOCALE") || "ru";

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: "ru",
  keySeparator: ".",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
