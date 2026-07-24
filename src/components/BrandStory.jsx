// src/components/BrandStory.jsx
import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const BrandStory = () => {
  const { t } = useTranslation();

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl =
    "https://res.cloudinary.com/f6hqjwzq/video/upload/v1784881156/BrandCore_1_inleph.mp4";

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* 1. 我們的理念 (About Us) */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[75vh] flex flex-col justify-center border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
          <img
            src="/brand-pills-tray.png"
            alt="ST EMPIRES Core Belief"
            className="absolute inset-0 w-full h-full object-cover object-[70%_bottom] lg:w-[60%] lg:left-auto lg:right-0 lg:object-center opacity-80 lg:opacity-100"
          />
          <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent lg:hidden z-10"></div>
          <div className="hidden lg:block absolute inset-0 left-auto right-0 w-[60%] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20"></div>
        </div>

        <div className="relative z-30 container mx-auto px-6 lg:px-8 max-w-7xl py-16 lg:py-0 mt-[-5vh] lg:mt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8 max-w-[20rem] sm:max-w-xl"
          >
            <h3 className="text-xs font-black tracking-[0.25em] text-[#ECE8D0] uppercase">
              {t("home.aboutTag") || "OUR BRAND CORE"}
            </h3>
            <h2 className="text-[1.75rem] leading-[1.3] lg:text-5xl font-extrabold italic tracking-wide uppercase text-white font-sans drop-shadow-lg">
              {t("home.aboutTitle") || "We don't stimulate. We support."}
            </h2>
            <div className="space-y-6 text-[#CCCCCC] text-sm lg:text-base leading-relaxed tracking-wide font-medium drop-shadow-lg">
              <p>{t("home.aboutDesc1")}</p>
              <p>{t("home.aboutDesc2")}</p>
              <p>{t("home.aboutDesc3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== 理念影片區塊 (🚀 電腦版左右排版優化) ===================== */}
      <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden font-sans">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          {/* 🚀 改用 Grid 左右排版，解決電腦版空洞的問題 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 左側：文字標題與敘述 (電腦版靠左，手機版置中) */}
            <div className="text-center lg:text-left space-y-6">
              <div>
                <h3 className="text-[10px] lg:text-xs font-black tracking-[0.3em] text-[#86868b] uppercase mb-4">
                  {t("philosophy.tag") || "Our Philosophy"}
                </h3>
                <h2 className="text-3xl lg:text-5xl font-black italic text-white uppercase tracking-tighter leading-tight">
                  {t("philosophy.title") || "超越極限的科學理念"}
                </h2>
              </div>
              {/* 🚀 新增一段簡短的描述，用來填補左側空間，增加視覺重量與質感 */}
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                {t("philosophy.desc") ||
                  "探索 M-CORE 核心配方的誕生歷程。我們如何透過嚴謹的科學數據與頂級植物萃取，為您打造出無可取代的極致體驗。"}
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
                  src="/BrandCore.png"
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

      {/* 2. 科學與製造 (Formulation & Manufacturing) */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <div className="aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                  <img
                    src="/manufacturing-1.jpg"
                    alt="Botanical Ingredients"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                  <img
                    src="/manufacturing-2.png"
                    alt="Lab Support"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-8 order-1 lg:order-2"
            >
              <h3 className="text-sm font-black tracking-[0.2em] text-[#ECE8D0] uppercase">
                {t("home.scienceTag") || "SCIENCE-LED"}
              </h3>
              <h2 className="text-3xl lg:text-4xl font-extrabold italic tracking-wide uppercase text-white font-sans leading-tight">
                {t("home.scienceTitle") || "Botanical Formulation"}
              </h2>
              <p className="text-[#CCCCCC] text-base leading-relaxed tracking-wide font-medium">
                {t("home.scienceDesc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandStory;
