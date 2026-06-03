// src/components/ProductPreview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Zap, ArrowRight, ShieldCheck } from "lucide-react";

const ProductPreview = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* ===================== 1. 三大臨床數據看板 (信任建立區) ===================== */}
      <section className="py-20 lg:py-32 bg-black text-white border-t border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] text-amber-500 uppercase font-black block mb-3">
              {t("preview.sec1.sub")}
            </span>
            <h2 className="text-2xl lg:text-4xl font-extrabold italic tracking-wider uppercase">
              {t("preview.sec1.title")}
            </h2>
          </div>

          {/* 基於西班牙官方簡報的真實科學數據大字報 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-sans">
            <div className="p-8 bg-neutral-900/40 border border-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 italic tracking-tighter">
                +15.13%
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mt-3 mb-2">
                {t("preview.sec1.card1.title")}
              </div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                {t("preview.sec1.card1.desc")}
              </p>
            </div>

            <div className="p-8 bg-neutral-900/40 border border-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 italic tracking-tighter">
                92%
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mt-3 mb-2">
                {t("preview.sec1.card2.title")}
              </div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                {t("preview.sec1.card2.desc")}
              </p>
            </div>

            <div className="p-8 bg-neutral-900/40 border border-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 italic tracking-tighter">
                40%
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mt-3 mb-2">
                {t("preview.sec1.card3.title")}
              </div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                {t("preview.sec1.card3.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 2. 旗艦單品焦點櫥窗 (核心跳轉大動脈) ===================== */}
      <section className="py-24 lg:py-40 bg-[#060606] text-white relative">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* 左側：產品視覺預覽卡片 */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate("/product")}
              className="w-full aspect-square bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl cursor-pointer group relative overflow-hidden"
            >
              <div className="w-4/5 h-4/5 bg-gradient-to-tr from-neutral-800 to-neutral-700 rounded-xl flex items-center justify-center italic text-neutral-500 font-bold tracking-widest text-center shadow-inner group-hover:scale-[1.03] transition-transform duration-700">
                <img
                  src="/m-core-liboost-supplement-bottle.webp"
                  alt="M-CORE Male Energy Supplement - Premium Liboost Tonkat Ali Formula by ST Empires Malaysia"
                />
              </div>
              <div className="absolute bottom-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t("preview.sec2.imgHover")}
              </div>
            </motion.div>
          </div>

          {/* 右側：文案展示與高轉化 CTA 戰術按鈕 */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 font-sans">
            <div>
              <span className="text-xs font-black tracking-[0.4em] text-neutral-500 uppercase block mb-2">
                {t("preview.sec2.sub")}
              </span>
              <h3 className="text-3xl lg:text-5xl font-black italic tracking-tight uppercase leading-none">
                {t("preview.sec2.title1")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                  {t("preview.sec2.title2")}
                </span>
              </h3>
            </div>

            <p className="text-neutral-400 text-sm lg:text-base font-medium leading-relaxed max-w-xl">
              {t("preview.sec2.desc")}
            </p>

            {/* 快速規格勾選 */}
            <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-wider text-neutral-300 py-2 border-t border-b border-white/5">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={14} className="text-green-500" />
                <span>{t("preview.sec2.check1")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={14} className="text-amber-500" />
                <span>{t("preview.sec2.check2")}</span>
              </div>
            </div>

            {/* 核心導流跳轉點 */}
            <div className="pt-2">
              <button
                onClick={() => navigate("/product")}
                className="w-full sm:w-auto bg-white text-black text-xs font-black tracking-[0.2em] uppercase px-8 py-5 rounded-xl hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center space-x-3 group shadow-xl"
              >
                <span>{t("preview.sec2.btn")}</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPreview;
