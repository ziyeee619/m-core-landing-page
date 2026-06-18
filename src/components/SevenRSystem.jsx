// src/components/SevenRSystem.jsx
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  MoveRight,
} from "lucide-react";
import Reveal from "./Reveal";

const SevenRSystem = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(null);
  const scrollContainerRef = useRef(null);

  // 🚀 關鍵修正：使用 useEffect 綁定非被動監聽器，徹底鎖死上下滾動
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheelNative = (e) => {
      // 檢查是否還有可滾動的空間（防止卡死整頁滾動）
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isScrollingLeft = e.deltaY < 0;
      const isScrollingRight = e.deltaY > 0;

      // 如果卡片還能往右滾，或還能往左滾，就攔截瀏覽器行為，只做左右移動
      if (
        (isScrollingRight && scrollLeft < scrollWidth - clientWidth - 1) ||
        (isScrollingLeft && scrollLeft > 0)
      ) {
        e.preventDefault(); // 🛑 鎖死網頁上下動
        container.scrollLeft += e.deltaY * 1.2;
      }
    };

    // 關鍵：必須用 { passive: false } 瀏覽器才允許我們使用 preventDefault()
    container.addEventListener("wheel", handleWheelNative, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheelNative);
    };
  }, []);

  const systemItems = [
    {
      id: "01",
      r: t("sevenR.items.r1Title"),
      sub: t("sevenR.items.r1"),
      fullText: t("sevenR.items.details.r1Text"),
      icon: <Battery />,
    },
    {
      id: "02",
      r: t("sevenR.items.r2Title"),
      sub: t("sevenR.items.r2"),
      fullText: t("sevenR.items.details.r2Text"),
      icon: <Wind />,
    },
    {
      id: "03",
      r: t("sevenR.items.r3Title"),
      sub: t("sevenR.items.r3"),
      fullText: t("sevenR.items.details.r3Text"),
      icon: <Dna />,
    },
    {
      id: "04",
      r: t("sevenR.items.r4Title"),
      sub: t("sevenR.items.r4"),
      fullText: t("sevenR.items.details.r4Text"),
      icon: <Flame />,
    },
    {
      id: "05",
      r: t("sevenR.items.r5Title"),
      sub: t("sevenR.items.r5"),
      fullText: t("sevenR.items.details.r5Text"),
      icon: <Zap />,
    },
    {
      id: "06",
      r: t("sevenR.items.r6Title"),
      sub: t("sevenR.items.r6"),
      fullText: t("sevenR.items.details.r6Text"),
      icon: <ShieldCheck />,
    },
    {
      id: "07",
      r: t("sevenR.items.r7Title"),
      sub: t("sevenR.items.r7"),
      fullText: t("sevenR.items.details.r7Text"),
      icon: <Target />,
    },
  ];

  return (
    <>
      {/* ===================== 頂部 Banner 區 ===================== */}
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

      {/* ===================== 7R 系統卡片區 ===================== */}
      <section id="7r" className="py-24 lg:py-40 bg-[#0d0d0d] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
            <div className="lg:col-span-5 text-center lg:text-left">
              <Reveal x={-30}>
                <h2 className="text-4xl md:text-6xl lg:text-[70px] font-black tracking-tighter italic uppercase leading-[0.9] text-white">
                  M-CORE <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700 text-5xl md:text-7xl lg:text-[95px] font-black not-italic tracking-normal drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    7R
                  </span>{" "}
                  {t("sevenR.titleSystem")}
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-7 w-full">
              <Reveal x={30} delay={0.1}>
                <div className="relative p-6 lg:p-10 border border-white/10 bg-gradient-to-br from-[#161616] to-[#0a0a0a] backdrop-blur-md rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative z-10">
                    <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0">
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

          {/* ===================== 7R 卡片列表 ===================== */}
          <div className="relative mt-8 lg:mt-0">
            {/* 🚀 新增：手機版專屬滑動提示 */}
            <div className="flex items-center justify-end mb-4 pr-2 lg:hidden">
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-1.5 text-[#86868b]/80"
              >
                <span className="text-[9px] font-black tracking-[0.2em] uppercase">
                  Swipe
                </span>
                <MoveRight size={12} strokeWidth={2.5} />
              </motion.div>
            </div>

            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0d0d0d] to-transparent z-20 lg:hidden" />

            {/* 移除原本 JSX 上的 onWheel，改用 useEffect 中的原生監聽器 */}
            <div
              ref={scrollContainerRef}
              /* 🚀 修正：加入 overflow-y-hidden 彻底杀掉竖向滑条，并补上 pt-4 确保往上浮动时不会被切掉 */
              className="flex gap-4 overflow-x-auto overflow-y-hidden pt-4 pb-6 lg:pb-4 scrollbar-none px-2 lg:px-0"
              style={{ contentVisibility: "auto" }}
            >
              {systemItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-center shrink-0 font-sans"
                >
                  <Reveal delay={idx * 0.03} y={20}>
                    <motion.div
                      onClick={() => setActiveItem(item)}
                      whileHover={{
                        y: -6,
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        borderColor: "#ffffff",
                      }}
                      className="group p-6 lg:p-8 bg-[#141414] border border-white/5 transition-all duration-300 h-48 lg:h-52 flex flex-col justify-between rounded-xl shadow-lg cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black tracking-widest text-[#444] group-hover:text-black/30 transition-colors font-mono">
                          {item.id}
                        </span>
                        <div className="text-[#86868b] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                          {React.cloneElement(item.icon, {
                            size: 24,
                            strokeWidth: 1.5,
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-white group-hover:text-black transition-colors leading-tight">
                          {item.r}
                        </h4>
                        <p className="text-[#86868b] text-[10px] font-bold tracking-[0.15em] group-hover:text-black/70 transition-colors mt-1 whitespace-nowrap">
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

      {/* ===================== 全域 7R 實驗室報告彈出視窗 ===================== */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white p-3 bg-white/5 rounded-full border border-white/10 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-xl w-full bg-[#111] border border-white/15 p-8 lg:p-10 rounded-2xl shadow-2xl relative overflow-hidden cursor-default"
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-black font-mono tracking-widest text-neutral-600 block mb-1">
                    M-CORE SYSTEM MODULE // {activeItem.id}
                  </span>
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white">
                    {activeItem.r}
                  </h3>
                  <p className="text-sm text-neutral-400 font-bold tracking-widest uppercase mt-1">
                    {activeItem.sub}
                  </p>
                </div>
                <div className="text-white bg-white/5 border border-white/10 p-3 rounded-xl shadow-inner">
                  {React.cloneElement(activeItem.icon, {
                    size: 32,
                    strokeWidth: 1.5,
                  })}
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-6"></div>

              <p className="text-neutral-300 text-sm lg:text-base leading-relaxed font-light text-justify tracking-wide whitespace-pre-line">
                {activeItem.fullText}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SevenRSystem;
