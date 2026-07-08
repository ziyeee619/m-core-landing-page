import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 導入你的 JSON 檔案
import zh from "./locales/zh.json";
import en from "./locales/en.json";
import bm from "./locales/bm.json";

i18n
  .use(LanguageDetector) // 讓它全權自動處理瀏覽器偵測與 localStorage
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
      bm: { translation: bm },
    },
    // 🚀 關鍵修改：直接刪除 lng 屬性！不要寫死它，交給 LanguageDetector 決定
    fallbackLng: "en", // 萬一使用者的瀏覽器是法文，系統找不到法文，就會退回這個預設語言
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // 告訴偵測器：先看 localStorage 裡有沒有舊紀錄，沒有的話再去抓瀏覽器目前的語言
      order: ["localStorage", "navigator"],
      // 告訴偵測器：當使用者透過 i18n.changeLanguage() 切換語言時，自動幫我存進 localStorage
      caches: ["localStorage"],
    },
  });

export default i18n;
