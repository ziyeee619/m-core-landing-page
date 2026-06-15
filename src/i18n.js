import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 導入你的 JSON 檔案
import zh from "./locales/zh.json";
import en from "./locales/en.json";
import bm from "./locales/bm.json";

const savedLanguage = localStorage.getItem("i18nextLng") || "en"; // 預設為英文

i18n
  .use(LanguageDetector) // 自動偵測瀏覽器語言
  .use(initReactI18next) // 綁定 react-i18next
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
      bm: { translation: bm },
    },
    lng: "en", // 預設語言
    lng: savedLanguage, // 儲存使用者選擇的語言
    fallbackLng: "zh", // 如果找不到對應語言，預設為簡中
    interpolation: {
      escapeValue: false, // React 已經防禦 XSS，不需要額外轉義
    },
  });

export default i18n;
