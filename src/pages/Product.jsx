// src/pages/ProductInfo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// 引入子元件（不引入 ProductPurchase）
import Ingredients from "../components/Ingredients";
import Usage from "../components/Usage";

const ProductInfo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden min-h-screen">
      {/* 1. 頂部直接開始產品深度解構 */}
      <div className="pt-24 lg:pt-32">
        <Ingredients />
        <Usage />
      </div>

      {/* 2. 網頁最底部：單獨設計的跳轉引流區 (CTA) — 🚀 已全數改為三語動態渲染 */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-neutral-950 border-t border-white/5 text-center px-6">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold italic tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 font-sans">
            {t("productInfo.ctaTitle") || "Ready to Unlock Peak Performance?"}
          </h2>

          <p className="text-sm text-neutral-400 max-w-sm mx-auto font-medium tracking-wide">
            {t("productInfo.ctaDesc")}
          </p>

          <div className="pt-6">
            <button
              onClick={() => navigate("/shop")} // 🚀 點擊直接絲滑跳轉到獨立商城頁面
              className="inline-flex items-center justify-center bg-white text-black font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-xl hover:bg-neutral-200 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-white/5 font-sans cursor-pointer"
            >
              {t("productInfo.ctaBtn")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
