// src/components/ProductPreview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Zap, ArrowRight, ShieldCheck, ShoppingCart } from "lucide-react"; // 🚀 新增了 ShoppingCart 圖示

const ProductPreview = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // 定義交錯動畫的變數 (用於三大臨床數據)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // 每個卡片間隔 0.15 秒出現
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // 定義右側文案的交錯動畫
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* ===================== 1. 三大臨床數據看板 (信任建立區) ===================== */}
      <section className="py-20 lg:py-32 bg-black text-white border-t border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          {/* 標題區塊動畫 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] text-amber-500 uppercase font-black block mb-3">
              {t("preview.sec1.sub")}
            </span>
            <h2 className="text-2xl lg:text-4xl font-extrabold italic tracking-wider uppercase">
              {t("preview.sec1.title")}
            </h2>
          </motion.div>

          {/* 數據卡片交錯動畫群組 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-sans"
          >
            <motion.div
              variants={itemVariants}
              className="p-8 bg-neutral-900/40 border border-white/5 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 italic tracking-tighter">
                +15.13%
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mt-3 mb-2">
                {t("preview.sec1.card1.title")}
              </div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                {t("preview.sec1.card1.desc")}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-neutral-900/40 border border-white/5 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 italic tracking-tighter">
                92%
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mt-3 mb-2">
                {t("preview.sec1.card2.title")}
              </div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                {t("preview.sec1.card2.desc")}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-neutral-900/40 border border-white/5 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 italic tracking-tighter">
                40%
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mt-3 mb-2">
                {t("preview.sec1.card3.title")}
              </div>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                {t("preview.sec1.card3.desc")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== 2. 旗艦單品焦點櫥窗 (核心跳轉大動脈) ===================== */}
      <section className="py-24 lg:py-40 bg-[#060606] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* 左側：產品視覺預覽卡片 (進場動畫結合 Hover) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
              onClick={() => navigate("/product")}
              className="w-full aspect-square bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl cursor-pointer group relative overflow-hidden"
            >
              <div className="w-4/5 h-4/5 bg-gradient-to-tr from-neutral-800 to-neutral-700 rounded-xl flex items-center justify-center italic text-neutral-500 font-bold tracking-widest text-center shadow-inner group-hover:scale-[1.03] transition-transform duration-700">
                <img
                  src="/m-core-liboost-supplement-bottle.webp"
                  alt="M-CORE Male Energy Supplement - Premium Liboost Tonkat Ali Formula by ST Empires Malaysia"
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                />
              </div>
              <div className="absolute bottom-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t("preview.sec2.imgHover")}
              </div>
            </motion.div>
          </div>

          {/* 右側：文案展示與高轉化 CTA 戰術按鈕 (交錯滑入) */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="lg:col-span-7 space-y-6 lg:space-y-8 font-sans"
          >
            <motion.div variants={textItemVariants}>
              <span className="text-xs font-black tracking-[0.4em] text-neutral-500 uppercase block mb-2">
                {t("preview.sec2.sub")}
              </span>
              <h3 className="text-3xl lg:text-5xl font-black italic tracking-tight uppercase leading-none">
                {t("preview.sec2.title1")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                  {t("preview.sec2.title2")}
                </span>
              </h3>
            </motion.div>

            <motion.div variants={textItemVariants}>
              <p className="text-neutral-400 text-sm lg:text-base font-medium leading-relaxed max-w-xl">
                {t("preview.sec2.desc")}
              </p>
            </motion.div>

            {/* 快速規格勾選 */}
            <motion.div
              variants={textItemVariants}
              className="grid grid-cols-2 gap-4 text-md font-bold uppercase tracking-wider text-neutral-300 py-2 border-t border-b border-white/5"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck size={20} className="text-green-500" />
                <span>{t("preview.sec2.check1")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={20} className="text-amber-500" />
                <span>{t("preview.sec2.check2")}</span>
              </div>
            </motion.div>

            {/* 🚀 核心導流跳轉點 (改為雙按鈕排版) */}
            <motion.div
              variants={textItemVariants}
              className="pt-2 flex flex-col sm:flex-row gap-4"
            >
              {/* 原本的：了解詳情 */}
              <button
                onClick={() => navigate("/product")}
                className="w-full sm:w-auto bg-white text-black text-xs font-black tracking-[0.2em] uppercase px-8 py-5 rounded-xl hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center space-x-3 group shadow-xl cursor-pointer"
              >
                <span>{t("preview.sec2.btn")}</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* 新增的：直接前往商城購買 */}
              <button
                onClick={() => navigate("/shop")}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-white text-xs font-black tracking-[0.2em] uppercase px-8 py-5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center space-x-3 group cursor-pointer"
              >
                {/* 備用文字: 如果 i18n JSON 沒設定 buyBtn 鍵值，先以字串保底 */}
                <span>{t("preview.sec2.buyBtn", "SHOP NOW")}</span>
                <ShoppingCart
                  size={14}
                  className="group-hover:scale-110 transition-transform text-white"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductPreview;
