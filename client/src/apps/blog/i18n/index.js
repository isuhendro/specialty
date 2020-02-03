import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en, zh_CN } from "./locales";
const options = {
  interpolation: {
    escapeValue: false /// not needed for react!!
  },
  debug: true,
  resources: {
    en: {
      common: en.en
    },
    zh_CN: {
      common: zh_CN.zh_CN
    }
  },

  fallbackLng: "en",

  lng: window._BM_USER_LANGUAGE ? window._BM_USER_LANGUAGE : navigator.language,

  ns: ["common"],

  defaultNS: "common",

  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default"
  }
};

i18n.use(LanguageDetector).init(options);

export default i18n;
