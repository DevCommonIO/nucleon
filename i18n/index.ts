import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import translationEn from "./locales/en-US/translation.json";
import translationPt from "./locales/pt-PT/translation.json";

const resources = {
  "pt-PT": { translation: translationPt },
  "en-US": { translation: translationEn },
};

const initI18n = async () => {

  i18n.use(initReactI18next).init({
    resources,
    lng: "en-US",
    fallbackLng: "pt-PT",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;