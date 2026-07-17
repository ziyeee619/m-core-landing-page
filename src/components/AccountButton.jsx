// components/AccountButton.jsx
import React from "react";

export default function AccountButton({ currentLang = "zh" }) {
  // 1. 這裡填入你剛剛在 Shopify 設定好的會員專屬網址
  // （如果 account.stempires.com.my 還在 DNS 生效中，可以先暫時用 Shopify 後台預設的 https://shopify.com/xxxx/account 測試）
  const ACCOUNT_URL = "https://account.stempires.com.my";

  // 2. 多語言文案對照表 (可以直接對接你專案裡的 .json i18n 檔案)
  const i18n = {
    zh: { text: "會員登入 / 訂單查詢", aria: "前往會員中心" },
    en: { text: "Sign In / My Account", aria: "Go to My Account" },
    bm: { text: "Log Masuk / Akaun", aria: "Pergi ke Akaun Saya" },
  };

  // 獲取當前語言，若無匹配則預設為英文或中文
  const t = i18n[currentLang] || i18n.en;

  return (
    <a
      href={ACCOUNT_URL}
      aria-label={t.aria}
      className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-neutral-900 border border-neutral-700 shadow-sm hover:bg-neutral-800 hover:border-neutral-500 active:scale-95 transition-all duration-200 ease-in-out"
    >
      {/* 簡潔的 User 圖示 (SVG) */}
      <svg
        className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>

      {/* 按鈕文字 */}
      <span className="tracking-wide">{t.text}</span>

      {/* 右側小箭頭動畫效果 */}
      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-xs text-neutral-400">
        ➔
      </span>
    </a>
  );
}
