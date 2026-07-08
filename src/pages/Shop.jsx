// src/pages/Shop.jsx
import React from "react";
import ProductPurchase from "../components/ProductPurchase";
import { useTranslation } from "react-i18next";

const Shop = () => {
  // 補上翻譯宣告，確保 t 功能正常
  const { t } = useTranslation();

  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* ==================== 商城標頭區 (完美置中) ==================== */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black italic tracking-widest uppercase text-white">
            {t("store.title")}
          </h1>
          <div className="h-[2px] w-12 bg-white mx-auto mt-4 mb-3 opacity-80"></div>
          <p className="text-xs text-neutral-500 tracking-wide">
            {t("store.badge")}
          </p>
        </div>

        {/* ==================== 商品展示區 ==================== */}
        <div className="bg-neutral-950/40 border border-white/5 rounded-3xl p-4 lg:p-8 backdrop-blur-sm">
          <ProductPurchase />
        </div>
      </div>
    </div>
  );
};

export default Shop;
