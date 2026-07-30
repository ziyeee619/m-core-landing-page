import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const Hero = ({ heroOpacity, heroScale }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-20 bg-gradient-to-br from-[#050505] via-[#1a1a1a] to-[#050505] overflow-hidden px-6 lg:px-8">
      {/* 背景紋理 */}
      {/* ===================== 高奢隱約植物背景 ===================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. 專屬葉子圖 (使用 mix-blend-screen 過濾掉圖片的死黑，只保留銀色葉脈，opacity 控制隱約程度) */}
        <div className="absolute inset-0 w-full h-full bg-[url('/hero-leaves-bg.png')] bg-cover bg-center bg-no-repeat opacity-25 mix-blend-screen"></div>

        {/* 2. (可選) 保留原本的金屬拉絲質感，疊加在一起層次感會更豐富 */}
        <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-5"></div>
      </div>

      {/* 視差淡出與縮放特效 */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="container mx-auto z-10"
      >
        {/* 使用 flex 佈局整合手機端與桌面端的排版流 */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ===================== 左側/上半部：品牌與文字區 ===================== */}
          <div className="text-center lg:text-left font-sans w-full order-1">
            {/* 1. ST Logo 區塊 (手機版最先出現) */}
            <Reveal y={20} delay={0.1}>
              <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-8">
                {/* ST Logo 圖片空間 */}
                {/* ST Logo 圖片空間 (已取消背景框) */}
                <div className="w-25 h-25 lg:w-30 lg:h-30 flex items-center justify-center mb-3 group transition-all duration-500">
                  <img
                    src="/STLogo.png"
                    alt="ST Empires Wellness Malaysia Official Logo - Premium Men's Health Brand"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] lg:group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* STEMPIRES 品牌字 */}
                <span className="text-[12px] lg:text-sm tracking-[0.6em] text-white font-black uppercase font-sans pr-[-0.6em]">
                  STEMPIRES
                </span>
                {/* 產品版本標籤 */}
                <div className="inline-block px-3 py-1 border border-white/5 rounded-full mt-3 bg-white/5 backdrop-blur-sm">
                  <span className="text-[8px] lg:text-[10px] tracking-[0.4em] text-[#86868b] uppercase font-bold font-sans">
                    {t("hero.edition")}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* 2. M-CORE 產品大字標題 (手機版在 Logo 下面) */}
            <Reveal y={30} delay={0.2}>
              <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.85] lg:leading-[0.8] mb-6 lg:mb-10 tracking-tighter italic drop-shadow-2xl text-white uppercase font-sans flex flex-wrap items-baseline justify-center lg:justify-start gap-x-4">
                M-CORE
                {/* 🌟 當語系切換到中文 (zh) 時，優雅地在後面補上「核元」 */}
                {t("hero.titleSuffix") && (
                  <span className="text-3xl md:text-5xl lg:text-6xl font-normal not-italic tracking-wide text-neutral-400 font-sans">
                    {t("hero.titleSuffix")}
                  </span>
                )}
              </h1>
            </Reveal>

            {/* 3. Slogan 與產品描述 (桌面端保持在左邊，手機端透過隱藏在中間，由順序流控制) */}
            <div className="hidden lg:block">
              <Reveal y={30} delay={0.3}>
                <p className="text-[#86868b] text-base md:text-lg lg:text-2xl max-w-lg leading-relaxed mb-8 lg:mb-12 mx-auto lg:mx-0 font-light italic px-4 lg:px-0 font-sans">
                  {t("hero.sub")}
                  <br className="hidden sm:block" />
                  {t("hero.desc")
                    .split("#")
                    .map((text, index) => (
                      <React.Fragment key={index}>
                        {text}
                        {index === 0 && (
                          <span className="text-white font-black border-b border-white/40 font-sans mx-1">
                            Liboost™
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start px-4 lg:px-0 font-sans">
                  <button
                    onClick={() =>
                      document
                        .getElementById("vision")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="w-full sm:w-auto bg-white text-black px-10 py-5 lg:px-12 lg:py-6 text-[11px] lg:text-xs font-black tracking-[0.4em] uppercase hover:bg-gray-200 transition-all flex items-center justify-center group shadow-2xl font-sans"
                  >
                    {t("hero.cta")}{" "}
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ===================== 右側/下半部：產品圖與手機端剩餘文案 ===================== */}
          <div className="w-full order-2 flex flex-col items-center">
            {/* 4. 產品圖區塊 (手機端排在 M-CORE 下方) */}
            <Reveal scale={0.9} rotate={-3} delay={0.3}>
              <div className="relative z-10 group px-10 lg:px-0 text-center mb-8 lg:mb-0">
                <img
                  src="/m-core-liboost-bottle.webp"
                  alt="M-CORE Male Energy Supplement - Premium Liboost Tonkat Ali Formula by ST Empires Malaysia"
                  className="w-full max-w-[260px] md:max-w-[300px] lg:max-w-lg mx-auto drop-shadow-[0_0_80px_rgba(255,255,255,0.06)] group-hover:scale-105 transition-transform duration-1000 font-sans"
                />
              </div>
            </Reveal>

            {/* 5. 手機端專屬的 Slogan 與按鈕區塊 (只在手機端/平板端 lg 以下顯示) */}
            <div className="block lg:hidden w-full text-center">
              <Reveal y={20} delay={0.4}>
                <p className="text-[#86868b] text-base md:text-lg leading-relaxed mb-8 italic font-light px-4 font-sans max-w-md mx-auto">
                  {t("hero.sub")}
                  <br />
                  {t("hero.desc")
                    .split("#")
                    .map((text, index) => (
                      <React.Fragment key={index}>
                        {text}
                        {index === 0 && (
                          <span className="text-white font-black border-b border-white/40 font-sans mx-1">
                            Liboost™
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                </p>
                <div className="px-4 w-full">
                  <button
                    onClick={() =>
                      document
                        .getElementById("vision")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="w-full bg-white text-black py-5 text-[11px] font-black tracking-[0.4em] uppercase hover:bg-gray-200 transition-all flex items-center justify-center group shadow-2xl font-sans cursor-pointer"
                  >
                    {t("hero.cta")}{" "}
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
