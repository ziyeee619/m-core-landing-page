// src/components/AccountButton.jsx
import React from "react";

// 🚀 新增 isMobile 參數，預設為 false (桌面模式)
export default function AccountButton({
  currentLang = "zh",
  isMobile = false,
}) {
  const ACCOUNT_URL = "https://account.stempires.com.my";

  const i18n = {
    zh: { text: "会员登入 / 订单查询", aria: "前往会员中心" },
    en: { text: "Sign In / My Account", aria: "Go to My Account" },
    bm: { text: "Log Masuk / Akaun", aria: "Pergi ke Akaun Saya" },
  };

  const t = i18n[currentLang] || i18n.en;

  return (
    <a
      href={ACCOUNT_URL}
      aria-label={t.aria}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full font-medium text-white bg-neutral-900 border border-neutral-700 shadow-sm hover:bg-neutral-800 hover:border-neutral-500 active:scale-95 transition-all duration-200 ease-in-out ${
        // 🚀 響應式優化：如果是手機版，稍微放大字體和內距，讓手指更好點擊！
        isMobile
          ? "px-6 py-3 text-base w-full max-w-[240px]"
          : "px-5 py-2.5 text-sm"
      }`}
    >
      {/* User 圖示 (SVG) */}
      <svg
        className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>

      {/* 🚀 關鍵邏輯：
          1. 如果 isMobile 為 true，直接顯示文字 (不加 hidden)
          2. 如果 isMobile 為 false (桌面版)，則維持 hidden xl:inline 防撞車 
      */}
      <span
        className={`${isMobile ? "inline" : "hidden xl:inline"} tracking-wide whitespace-nowrap`}
      >
        {t.text}
      </span>

      {/* 右側小箭頭動畫效果 (桌面版才顯示) */}
      {!isMobile && (
        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-xs text-neutral-400 hidden xl:inline">
          ➔
        </span>
      )}
    </a>
  );
}
