// src/components/SevenRSystem.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Battery,
  Wind,
  Dna,
  Flame,
  Zap,
  Target,
  FlaskConical,
  ShieldCheck,
  Activity,
} from "lucide-react";
import Reveal from "./Reveal";

const SevenRSystem = () => {
  const { t } = useTranslation();

  // 🚀 完全動態抽離的 7R 系統文字，並修復了第 7 個 R 的品牌邏輯 (Refocus)
  const systemItems = [
    {
      id: "01",
      r: t("sevenR.items.r1Title"),
      sub: t("sevenR.items.r1"),
      icon: <Battery />,
    },
    {
      id: "02",
      r: t("sevenR.items.r2Title"),
      sub: t("sevenR.items.r2"),
      icon: <Wind />,
    },
    {
      id: "03",
      r: t("sevenR.items.r3Title"),
      sub: t("sevenR.items.r3"),
      icon: <Dna />,
    },
    {
      id: "04",
      r: t("sevenR.items.r4Title"),
      sub: t("sevenR.items.r4"),
      icon: <Flame />,
    },
    {
      id: "05",
      r: t("sevenR.items.r5Title"),
      sub: t("sevenR.items.r5"),
      icon: <Zap />,
    },
    {
      id: "06",
      r: t("sevenR.items.r6Title"),
      sub: t("sevenR.items.r6"),
      icon: <ShieldCheck />,
    },
    {
      id: "07",
      r: t("sevenR.items.r7Title"),
      sub: t("sevenR.items.r7"),
      icon: <Target />,
    },
  ];

  return (
    <>
      {/* ===================== 植入的頂部震撼 Banner 區 ===================== */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-white/5 bg-gradient-to-b from-neutral-900/20 to-transparent">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
          >
            <FlaskConical size={14} className="text-amber-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-300 uppercase">
              {t("sciencePage.bannerSub")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black italic tracking-wider uppercase mb-6"
          >
            {t("sciencePage.bannerTitle1")}{" "}
            <span className="text-[#86868b] font-light">
              {t("sciencePage.bannerTitle2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm lg:text-base text-neutral-400 font-medium tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            {t("sciencePage.bannerDesc")}
          </motion.p>
        </div>
      </section>

      {/* ===================== 接續 7R 系統的程式碼 ===================== */}
      <section id="7r" className="py-24 lg:py-40 bg-[#0d0d0d] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
            {/* M-CORE 7R 主標題：突出 7R 字體 */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <Reveal x={-30}>
                <h2 className="text-4xl md:text-6xl lg:text-[70px] font-black tracking-tighter italic uppercase leading-[0.9] text-white">
                  M-CORE <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700 text-5xl md:text-7xl lg:text-[95px] font-black not-italic tracking-normal drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    7R
                  </span>{" "}
                  {/* 🚀 修正：將 System 綁定多語系 */}
                  {t("sevenR.titleSystem")}
                </h2>
              </Reveal>
            </div>

            {/* 強化後的 Beyond Energy 區塊：科技感半透明儀表板 */}
            <div className="lg:col-span-7 w-full">
              <Reveal x={30} delay={0.1}>
                <div className="relative p-6 lg:p-10 border border-white/10 bg-gradient-to-br from-[#161616] to-[#0a0a0a] backdrop-blur-md rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative z-10">
                    <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0 animate-pulse">
                      <Activity size={28} strokeWidth={2} />
                    </div>

                    <div>
                      <h4 className="text-xl lg:text-2xl font-black mb-3 italic uppercase tracking-widest text-white flex items-center justify-center sm:justify-start gap-3">
                        {t("sevenR.dashboardTitle")}
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                      </h4>
                      <p className="text-sm lg:text-base text-[#86868b] leading-relaxed font-light italic">
                        {t("sevenR.dashboardDesc1")}
                        <span className="text-white font-bold not-italic px-1">
                          {t("sevenR.dashboardHighlight")}
                        </span>
                        {t("sevenR.dashboardDesc2")}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ===================== 下半部：精簡集中呈現的 1-7 卡片 ===================== */}
          <div className="relative">
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0d0d0d] to-transparent z-20 lg:hidden" />

            <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0 scrollbar-none snap-x snap-mandatory px-2 lg:px-0">
              {systemItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-center shrink-0 lg:shrink font-sans"
                >
                  <Reveal delay={idx * 0.03} y={20}>
                    <motion.div
                      whileHover={{
                        y: -6,
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        borderColor: "#ffffff",
                      }}
                      className="group p-8 bg-[#141414] border border-white/5 transition-all duration-300 h-48 lg:h-52 flex flex-col justify-between rounded-xl shadow-lg cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black tracking-widest text-[#444] group-hover:text-black/30 transition-colors font-mono">
                          {item.id}
                        </span>
                        <div className="text-[#86868b] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                          {React.cloneElement(item.icon, {
                            size: 26,
                            strokeWidth: 1.5,
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-white group-hover:text-black transition-colors">
                          {item.r}
                        </h4>
                        <p className="text-[#86868b] text-[11px] font-bold tracking-[0.2em] group-hover:text-black/70 transition-colors mt-1">
                          {item.sub}
                        </p>
                      </div>
                    </motion.div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SevenRSystem;
