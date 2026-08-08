// src/components/Ingredients.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  BarChart3,
  Maximize2,
  Award,
  X,
  ZoomIn,
  Play,
} from "lucide-react";
import Reveal from "./Reveal";

const Ingredients = () => {
  const { t } = useTranslation();

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl =
    "https://res.cloudinary.com/f6hqjwzq/video/upload/v1786180333/Ingredients_pd0dvl.mp4";

  // 🌟 修正：將 activeReportImg 升級為物件，用來記錄點擊時的完整資訊
  const [lightboxData, setLightboxData] = useState({
    img: null,
    title: "",
    desc: "",
  });

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
      img: "/guarana-extract.webp",
      tier: "regular",
    },
    {
      title: t("ingredients.items.bilberry.title"),
      sub: t("ingredients.items.bilberry.sub"),
      text: t("ingredients.items.bilberry.text"),
      img: "/bilberry-extract.webp",
      tier: "regular",
    },
  ];

  // 🌟 修正：動態接收三組參數並寫入 State
  const openLightbox = (imgSrc, title = "", desc = "") => {
    setLightboxData({ img: imgSrc, title, desc });
  };

  const closeLightbox = () => {
    setLightboxData({ img: null, title: "", desc: "" });
  };

  return (
    <section
      id="ingredients"
      className="py-12 lg:py-20 bg-[#080808] text-white"
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#050505] shadow-2xl p-6 lg:p-12 group">
              {/* 背景層 (z-0)：植物大圖 */}
              <div className="absolute inset-0 z-0 opacity-55 group-hover:scale-105 transition-all duration-1000">
                <img
                  src="/assets/liboost-turnera-diffusa-extract-spain.png"
                  alt="Spain Patent Liboost Extract Premium Selection"
                  className="w-full h-full object-cover max-md:object-contain max-md:object-right-top transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent"></div>
              </div>

              {/* 前景層 (z-10)：徽章與按鈕 */}
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
                    openLightbox(
                      "/HPLC.png",
                      t("ingredients.liboost.btn"),
                      t("ingredients.descHighlight"),
                    );
                  }}
                  className="flex items-center gap-1.5 text-[12px] text-[#070707] hover:text-white transition-colors bg-white/25 order border-white/5 hover:border-white/20 px-3 py-1.5 rounded-full font-bold cursor-pointer"
                >
                  <FileText size={12} /> {t("ingredients.liboost.btn")}{" "}
                  <Maximize2 size={10} />
                </button>
              </div>

              {/* 前景層 (z-10)：Logo 圖與文案 */}
              <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <img
                      src="/liboost-logo.png"
                      alt={t("ingredients.liboost.title1")}
                      className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] mb-4"
                    />
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-sans not-italic">
                        {t("ingredients.liboost.title2")}
                      </span>
                    </h3>
                  </div>

                  <p className="text-[#86868b] text-base lg:text-lg font-light leading-relaxed italic">
                    {t("ingredients.liboost.desc")}
                  </p>
                </div>

                {/* 🚀 右側數據區：4個小卡完美傳入各自獨立的 Lightbox 語系內容 */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {/* CARD 1: 一氧化氮釋放 */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(
                        "/assets/NO-Release.jpeg",
                        t("ingredients.liboost.lightbox.card1.title"),
                        t("ingredients.liboost.lightbox.card1.desc"),
                      );
                    }}
                    className="p-6 bg-[#181818]/80 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-2xl shadow-inner group/card transition-all duration-300 relative cursor-pointer hover:-translate-y-1"
                  >
                    {/* 「點擊放大」按鈕 */}
                    <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover/card:bg-amber-500/20 transition-all duration-300">
                      <ZoomIn
                        size={16}
                        className="text-[#666] group-hover/card:text-amber-400 group-hover/card:scale-110 transition-all duration-300"
                      />
                    </div>
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

                  {/* CARD 2: PDE-5 阻斷 */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(
                        "/assets/PDE-5-Inhibition.jpeg",
                        t("ingredients.liboost.lightbox.card2.title"),
                        t("ingredients.liboost.lightbox.card2.desc"),
                      );
                    }}
                    className="p-6 bg-[#181818]/80 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-2xl shadow-inner group/card transition-all duration-300 relative cursor-pointer hover:-translate-y-1"
                  >
                    {/* 「點擊放大」按鈕 */}
                    <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover/card:bg-amber-500/20 transition-all duration-300">
                      <ZoomIn
                        size={16}
                        className="text-[#666] group-hover/card:text-amber-400 group-hover/card:scale-110 transition-all duration-300"
                      />
                    </div>
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

                  {/* CARD 3: 激發性慾 (image_455ba7.png) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(
                        "/sexual-desire.png",
                        t("ingredients.liboost.lightbox.card3.title"),
                        t("ingredients.liboost.lightbox.card3.desc"),
                      );
                    }}
                    className="p-6 bg-[#181818]/80 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-2xl shadow-inner group/card transition-all duration-300 relative cursor-pointer hover:-translate-y-1"
                  >
                    <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover/card:bg-amber-500/20 transition-all duration-300">
                      <ZoomIn
                        size={16}
                        className="text-[#666] group-hover/card:text-amber-400 group-hover/card:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-white italic tracking-tighter bg-clip-text bg-gradient-to-b from-white to-gray-400">
                      +45.00%
                    </div>
                    <div className="text-[11px] text-white font-black tracking-[0.1em] uppercase mt-2">
                      {t("ingredients.liboost.card3Title")}
                    </div>
                    <p className="text-[11px] text-[#86868b] mt-1 font-light leading-snug">
                      {t("ingredients.liboost.card3Desc")}
                    </p>
                  </div>

                  {/* CARD 4: 性指標提升 (已精準聚焦 Sexual Satisfaction) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(
                        "/sexual-indexes.png",
                        t("ingredients.liboost.lightbox.card4.title"),
                        t("ingredients.liboost.lightbox.card4.desc"),
                      );
                    }}
                    className="p-6 bg-[#181818]/80 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-2xl shadow-inner group/card transition-all duration-300 relative cursor-pointer hover:-translate-y-1"
                  >
                    <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover/card:bg-amber-500/20 transition-all duration-300">
                      <ZoomIn
                        size={16}
                        className="text-[#666] group-hover/card:text-amber-400 group-hover/card:scale-110 transition-all duration-300"
                      />
                    </div>
                    {/* 🌟 修正：大數字改為親密滿意度爆發值 */}
                    <div className="text-3xl lg:text-4xl font-black text-white italic tracking-tighter bg-clip-text bg-gradient-to-b from-white to-gray-400">
                      +49.37%
                    </div>
                    <div className="text-[11px] text-white font-black tracking-[0.1em] uppercase mt-2">
                      {t("ingredients.liboost.card4Title")}
                    </div>
                    <p className="text-[11px] text-[#86868b] mt-1 font-light leading-snug">
                      {t("ingredients.liboost.card4Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ===================== 第二與第三梯隊 ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 font-sans">
          {secondaryIngredients.map((item, idx) => (
            <div
              key={idx}
              className={`${item.tier === "gold" ? "md:col-span-12 lg:col-span-6" : "md:col-span-6 lg:col-span-3"}`}
            >
              <Reveal delay={idx * 0.08} y={30}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col transition-all group"
                >
                  <div
                    className={`${item.tier === "gold" ? "h-56 lg:h-64" : "h-40 lg:h-48"} relative overflow-hidden`}
                  >
                    <img
                      src={item.img}
                      alt={`${item.title} M-CORE Premium Selection`}
                      className="w-full h-full object-cover transition-all duration-700 lg:group-hover:scale-105"
                    />
                  </div>

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
      {/* ===================== 影片區塊 (🚀 電腦版左右排版優化) ===================== */}
      <section className="py-12 lg:py-16 bg-[#080808] relative overflow-hidden font-sans">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          {/* 🚀 改用 Grid 左右排版，解決電腦版空洞的問題 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 左側：文字標題與敘述 (電腦版靠左，手機版置中) */}
            <div className="text-center lg:text-left space-y-6">
              <div>
                <h3 className="text-[10px] lg:text-xs font-black tracking-[0.3em] text-[#86868b] uppercase mb-4">
                  {t("materials.tag")}
                </h3>
                <h2 className="text-3xl lg:text-5xl font-black italic text-white uppercase tracking-tighter leading-tight">
                  {t("materials.title")}
                </h2>
              </div>
              {/* 🚀 新增一段簡短的描述，用來填補左側空間，增加視覺重量與質感 */}
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                {t("materials.desc")}
              </p>
            </div>

            {/* 右側：直式影片封面 (電腦版靠右，手機版置中) */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                // 寬度微調，讓它在右邊看起來精緻且不突兀
                className="relative aspect-[9/16] w-full max-w-[260px] lg:max-w-[300px] rounded-2xl lg:rounded-[32px] overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
                onClick={() => setIsVideoOpen(true)}
              >
                {/* 封面 */}
                <img
                  src="/CoreIngredients.png"
                  alt="Philosophy Video Cover"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* 🚀 極簡微縮版按鈕：縮小尺寸並提升透明度 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <Play
                      className="text-white w-4 h-4 lg:w-5 lg:h-5 ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ===================== 劇院模式彈窗 (Modal) ===================== */}
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 lg:p-12"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-50"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ delay: 0.1 }}
                // 🚀 關鍵修改 1：拔掉 aspect-[9/16]，讓容器變成自適應包覆 (w-fit)
                className="relative bg-black rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center w-fit"
              >
                {/* 🚀 關鍵修改 2：把 object-cover 改成 object-contain，並把高度控制寫在 video 本身 */}
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  playsInline // Safari/iOS 必備防跳出全螢幕
                  className="w-auto h-auto max-w-[90vw] max-h-[80vh] lg:max-h-[90vh] object-contain outline-none rounded-xl lg:rounded-2xl"
                ></video>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ===================== 全域 Lightbox 彈出燈箱 ===================== */}
      <AnimatePresence>
        {lightboxData.img && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white p-3 bg-white/5 rounded-full border border-white/10 transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* 🌟 修正：在圖片上方動態渲染出當前小卡對應的臨床報告標題 */}
            <div className="text-center mb-4 max-w-2xl px-4 select-none pointer-events-none">
              <h3 className="text-white text-lg md:text-xl font-black tracking-wide">
                {lightboxData.title}
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm font-light mt-1.5 leading-relaxed">
                {lightboxData.desc}
              </p>
            </div>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="max-w-4xl w-full max-h-[70vh] flex items-center justify-center relative p-2 bg-[#111] border border-white/10 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxData.img}
                alt="M-CORE Laboratory Verified Report Full Size"
                className="w-full h-full max-h-[68vh] object-contain rounded-xl"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200";
                }}
              />
            </motion.div>

            {/* 🌟 修正：底部統一渲染「點擊任意空白處即可關閉預覽」 */}
            <p className="text-[#86868b] text-xs font-medium tracking-widest mt-6 uppercase text-center max-w-md">
              {t("ingredients.liboost.lightbox.common.closeHint")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Ingredients;
