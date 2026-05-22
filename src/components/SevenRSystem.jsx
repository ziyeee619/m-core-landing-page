import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Battery,
  Wind,
  Dna,
  Flame,
  Zap,
  ShieldCheck,
  Target,
  Activity,
} from "lucide-react";
import Reveal from "./Reveal";

const SevenRSystem = () => {
  const { t } = useTranslation();

  const systemItems = [
    { id: "01", r: "Restore", sub: "能量回血", icon: <Battery /> },
    { id: "02", r: "Relieve", sub: "釋放壓力", icon: <Wind /> },
    { id: "03", r: "Rebuild", sub: "重建健康", icon: <Dna /> },
    { id: "04", r: "Reignite", sub: "重燃巔峰", icon: <Flame /> },
    { id: "05", r: "Revitalize", sub: "煥活持久", icon: <Zap /> },
    { id: "06", r: "Reinforce", sub: "免疫加固", icon: <ShieldCheck /> },
    { id: "07", r: "Focus", sub: "恢復專注", icon: <Target /> },
  ];

  return (
    <section id="7r" className="py-24 lg:py-40 bg-[#0d0d0d] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* ===================== 上半部：標題與強化的 Beyond 區塊 ===================== */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* M-CORE 7R 主標題：突出 7R 字體 */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <Reveal x={-30}>
              <h2 className="text-4xl md:text-6xl lg:text-[70px] font-black tracking-tighter italic uppercase leading-[0.9] text-white">
                M-CORE <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700 text-5xl md:text-7xl lg:text-[95px] font-black not-italic tracking-normal drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  7R
                </span>{" "}
                System
              </h2>
            </Reveal>
          </div>

          {/* 強化後的 Beyond Energy 區塊：科技感半透明儀表板 */}
          <div className="lg:col-span-7 w-full">
            <Reveal x={30} delay={0.1}>
              <div className="relative p-6 lg:p-10 border border-white/10 bg-gradient-to-br from-[#161616] to-[#0a0a0a] backdrop-blur-md rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                {/* 背景裝飾微光 */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative z-10">
                  {/* 動態發光 Icon 容器 */}
                  <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0 animate-pulse">
                    <Activity size={28} strokeWidth={2} />
                  </div>

                  <div>
                    <h4 className="text-xl lg:text-2xl font-black mb-3 italic uppercase tracking-widest text-white flex items-center justify-center sm:justify-start gap-3">
                      BEYOND ENERGY
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                    </h4>
                    <p className="text-sm lg:text-base text-[#86868b] leading-relaxed font-light italic">
                      拒絕短暫興奮，
                      <span className="text-white font-bold not-italic">
                        從細胞底層
                      </span>
                      提供持久穩定動力。
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ===================== 下半部：精簡集中呈現的 1-7 卡片 ===================== */}
        {/* 手機端 (lg 以下): 變成一行橫向滑動履帶，不佔空間，手感極佳。
          桌面端 (lg 以上): 保持精緻的 4 欄網格。
        */}
        <div className="relative">
          {/* 手機端左右滑動提示微光（右側邊緣淡出） */}
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
                    {/* 上半部：編號與 Icon */}
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

                    {/* 下半部：核心字體 */}
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
  );
};

export default SevenRSystem;
