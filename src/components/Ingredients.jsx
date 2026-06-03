// src/components/Ingredients.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, BarChart3, Maximize2, X } from "lucide-react";
import Reveal from "./Reveal";

const Ingredients = () => {
  const { t } = useTranslation();
  const [activeReportImg, setActiveReportImg] = useState(null);

  // 🚀 將資料陣列與 JSON i18n 系統完美對齊
  const secondaryIngredients = [
    {
      title: t("ingredients.items.tongkat.title"),
      sub: t("ingredients.items.tongkat.sub"),
      text: t("ingredients.items.tongkat.text"),
      img: "/assets/tongkat-ali-extract-100-1-purity.png",
      tier: "gold",
    },
    {
      title: t("ingredients.items.maca.title"),
      sub: t("ingredients.items.maca.sub"),
      text: t("ingredients.items.maca.text"),
      img: "/assets/peruvian-maca-root-extract-energy.jpg",
      tier: "regular",
    },
    {
      title: t("ingredients.items.cordyceps.title"),
      sub: t("ingredients.items.cordyceps.sub"),
      text: t("ingredients.items.cordyceps.text"),
      img: "/assets/cordyceps-sinensis-atp-booster.jpg",
      tier: "regular",
    },
    {
      title: t("ingredients.items.guarana.title"),
      sub: t("ingredients.items.guarana.sub"),
      text: t("ingredients.items.guarana.text"),
      img: "/public/guarana-extract.webp",
      tier: "regular",
    },
    {
      title: t("ingredients.items.bilberry.title"),
      sub: t("ingredients.items.bilberry.sub"),
      text: t("ingredients.items.bilberry.text"),
      img: "/public/bilberry-extract.webp",
      tier: "regular",
    },
  ];

  const openLightbox = (imgSrc) => {
    setActiveReportImg(imgSrc);
  };

  return (
    <section
      id="ingredients"
      className="py-24 lg:py-40 bg-[#080808] text-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* ===================== 主標題區 ===================== */}
        <Reveal y={30}>
          <div className="text-center mb-16 lg:mb-28">
            <span className="text-xs tracking-[0.6em] text-[#86868b] uppercase font-black block mb-4">
              {t("ingredients.headerSub")}
            </span>
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter italic uppercase text-white">
              {t("ingredients.headerTitle")}
            </h2>
            <div className="h-[2px] w-16 bg-white mx-auto mt-6 mb-4"></div>
            {/* 🚀 動態切割高亮文字區塊 */}
            <p className="text-[#86868b] max-w-2xl mx-auto text-base lg:text-lg font-light italic">
              {t("ingredients.desc1")}
              <span className="text-white font-bold not-italic">
                {t("ingredients.descHighlight")}
              </span>
              {t("ingredients.desc2")}
            </p>
          </div>
        </Reveal>

        {/* ===================== 第一梯隊：頂級地王 Liboost™ ===================== */}
        <div className="mb-12 font-sans">
          <Reveal y={40}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#050505] shadow-2xl p-6 lg:p-12 group cursor-pointer">
              <div className="absolute inset-0 z-0 opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-1000">
                <img
                  src="/assets/liboost-turnera-diffusa-extract-spain.png"
                  alt="Spain Patent Liboost Extract Premium Selection"
                  className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-wrap gap-3 mb-8 justify-between items-start">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white text-black text-[10px] font-black tracking-widest uppercase italic rounded-sm shadow-lg">
                    {t("ingredients.liboost.badge1")}
                  </span>
                  <span className="px-3 py-1 border border-white/10 bg-white/5 text-[#86868b] text-[10px] font-black tracking-widest uppercase rounded-sm flex items-center gap-1">
                    <ShieldCheck size={12} className="text-green-500" />{" "}
                    {t("ingredients.liboost.badge2")}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox("/HPLC.png");
                  }}
                  className="flex items-center gap-1.5 text-[11px] text-[#86868b] hover:text-white transition-colors bg-white/5 border border-white/5 hover:border-white/20 px-3 py-1.5 rounded-full font-bold"
                >
                  <FileText size={12} /> {t("ingredients.liboost.btn")}{" "}
                  <Maximize2 size={10} />
                </button>
              </div>

              <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-4xl lg:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
                    {t("ingredients.liboost.title1")} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-sans not-italic">
                      {t("ingredients.liboost.title2")}
                    </span>
                  </h3>
                  <p className="text-[#86868b] text-base lg:text-lg font-light leading-relaxed italic">
                    {t("ingredients.liboost.desc")}
                  </p>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox("/assets/NO-Release.jpeg");
                    }}
                    className="p-6 bg-[#181818]/80 backdrop-blur-sm border border-white/5 hover:border-white/20 rounded-2xl shadow-inner group/card transition-all relative"
                  >
                    <BarChart3
                      size={14}
                      className="absolute top-4 right-4 text-[#444] group-hover/card:text-white transition-colors"
                    />
                    <div className="text-3xl lg:text-4xl font-black text-white italic tracking-tighter bg-clip-text bg-gradient-to-b from-white to-gray-400">
                      +15.13%
                    </div>
                    <div className="text-[11px] text-white font-black tracking-[0.1em] uppercase mt-2">
                      {t("ingredients.liboost.card1Title")}
                    </div>
                    <p className="text-[11px] text-[#86868b] mt-1 font-light leading-snug">
                      {t("ingredients.liboost.card1Desc")}
                    </p>
                  </div>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox("/assets/PDE-5-Inhibition.jpeg");
                    }}
                    className="p-6 bg-[#181818]/80 backdrop-blur-sm border border-white/5 hover:border-white/20 rounded-2xl shadow-inner group/card transition-all relative"
                  >
                    <BarChart3
                      size={14}
                      className="absolute top-4 right-4 text-[#444] group-hover/card:text-white transition-colors"
                    />
                    <div className="text-3xl lg:text-4xl font-black text-white italic tracking-tighter bg-clip-text bg-gradient-to-b from-white to-gray-400">
                      -42.41%
                    </div>
                    <div className="text-[11px] text-white font-black tracking-[0.1em] uppercase mt-2">
                      {t("ingredients.liboost.card2Title")}
                    </div>
                    <p className="text-[11px] text-[#86868b] mt-1 font-light leading-snug">
                      {t("ingredients.liboost.card2Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ===================== 第二與第三梯隊 (1+5 完美對齊排版) ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 font-sans">
          {secondaryIngredients.map((item, idx) => (
            <div
              key={idx}
              className={`${item.tier === "gold" ? "md:col-span-12 lg:col-span-6" : "md:col-span-6 lg:col-span-3"}`}
            >
              <Reveal delay={idx * 0.08} y={30}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col transition-all group cursor-pointer"
                >
                  {/* 圖片展示區 */}
                  <div
                    className={`${item.tier === "gold" ? "h-56 lg:h-64" : "h-40 lg:h-48"} relative overflow-hidden`}
                  >
                    <img
                      src={item.img}
                      alt={`${item.title} M-CORE Premium Selection`}
                      className="w-full h-full object-cover transition-all duration-700 lg:grayscale lg:opacity-40 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-105"
                    />
                  </div>

                  {/* 文字介紹區 */}
                  <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl lg:text-2xl font-black italic uppercase tracking-tighter text-white">
                        {item.title}
                      </h4>
                      <div className="text-[9px] text-[#86868b] tracking-[0.3em] uppercase mb-4 font-bold font-mono">
                        {item.sub}
                      </div>
                      <p className="text-[#86868b] text-xs lg:text-sm font-medium leading-relaxed font-sans">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== 全域 Lightbox 彈出燈箱 ===================== */}
      <AnimatePresence>
        {activeReportImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveReportImg(null)}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setActiveReportImg(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white p-3 bg-white/5 rounded-full border border-white/10 transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="max-w-4xl w-full max-h-[80vh] flex items-center justify-center relative p-2 bg-[#111] border border-white/10 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeReportImg}
                alt="M-CORE Laboratory Verified Report Full Size"
                className="w-full h-full max-h-[78vh] object-contain rounded-xl"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200";
                }}
              />
            </motion.div>
            <p className="text-[#86868b] text-xs font-medium tracking-widest mt-6 uppercase text-center max-w-md">
              {t("ingredients.lightboxText")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Ingredients;
