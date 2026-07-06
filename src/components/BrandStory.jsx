// src/components/BrandStory.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const BrandStory = () => {
  const { t } = useTranslation();

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
      {/* 1. 我們的理念 (About Us) - 🚀 新增底部融合漸層 & 文字置中對齊 */}
      {/* 修改點：改用 justify-center 讓內部元素自然垂直置中，微調高度 */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[75vh] flex flex-col justify-center border-t border-white/5 overflow-hidden">
        {/* --- 背景圖層 --- */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
          <img
            src="/brand-pills-tray.png" // 記得換成你的圖片
            alt="ST EMPIRES Core Belief"
            className="absolute inset-0 w-full h-full object-cover object-[70%_bottom] lg:w-[60%] lg:left-auto lg:right-0 lg:object-center opacity-80 lg:opacity-100"
          />

          {/* 📱 手機版專屬：頂部漸層 (保護文字) */}
          <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent lg:hidden z-10"></div>

          {/* 💻 電腦版專屬：左側漸層 (融合文字區) */}
          <div className="hidden lg:block absolute inset-0 left-auto right-0 w-[60%] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>

          {/* 🚀 全端通用：底部漸層 (消除生硬邊界，完美過渡到下一區塊) */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20"></div>
        </div>

        {/* --- 文字圖層 --- */}
        {/* 修改點：移除了 pt-28，改用 py-16 配合父層的 justify-center，讓文字塊更居中 */}
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

      {/* 2. 科學與製造 (Formulation & Manufacturing) - 維持不變 */}
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
                <div className="aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                  <img
                    src="/manufacturing-1.jpg"
                    alt="Botanical Ingredients"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                  <img
                    src="/manufacturing-2.jpg"
                    alt="Lab Support"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
