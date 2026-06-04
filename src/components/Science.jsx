// src/components/Science.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Award, Activity } from "lucide-react";
import Reveal from "./Reveal";

const Science = () => {
  const { t } = useTranslation();

  // 🚀 西班牙官方實驗室臨床數據：結合寫死的進度條數值與動態 i18n 文字
  const coreMetrics = [
    {
      id: "m1",
      value: "+15.13%",
      width: "55%",
    },
    {
      id: "m2",
      value: "-42.41%",
      width: "85%",
    },
    {
      id: "m3",
      value: "Optimal",
      width: "100%",
    },
  ];

  // 🚀 將機制證明的清單陣列化，並加上 showShield 標籤來精準控制綠色盾牌的渲染
  const mechItems = [
    { id: "l1", showShield: false },
    { id: "l2", showShield: false },
    { id: "l3", showShield: false },
    { id: "l4", showShield: true },
  ];

  return (
    <>
      <section
        id="science"
        className="py-40 lg:py-52 bg-black text-white overflow-hidden px-6 font-sans min-h-screen"
      >
        <div className="container mx-auto max-w-6xl font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center font-sans">
            {/* 左側欄：硬核專利動態能量進度條 (佔 7 格) */}
            <div className="lg:col-span-7 space-y-10">
              <Reveal x={-40}>
                <div className="space-y-2 mb-12 text-center lg:text-left font-sans">
                  <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-2">
                    <Award size={12} className="text-amber-500" />
                    <span className="text-[10px] font-black tracking-[0.3em] text-neutral-300 uppercase">
                      {t("scienceCmp.badge")}
                    </span>
                  </div>

                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic uppercase leading-[0.9] text-white">
                    {t("scienceCmp.title1")} <br />
                    {/* 🚀 關鍵修復：加入 pr-4，防止斜體的最後一個字母被背景裁切吃掉 */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 pr-4">
                      {t("scienceCmp.title2")}
                    </span>
                  </h2>
                </div>
              </Reveal>

              {/* 循環渲染真實數據進度條 */}
              <div className="space-y-10 font-sans">
                {coreMetrics.map((metric, index) => (
                  <Reveal x={-40} delay={index * 0.1} key={metric.id}>
                    <div className="relative font-sans">
                      <div className="flex justify-between items-end mb-3 font-sans">
                        <div className="flex flex-col">
                          <span className="text-[11px] lg:text-xs font-black uppercase tracking-[0.15em] text-white italic">
                            {t(`scienceCmp.metrics.${metric.id}.label`)}
                          </span>
                          <span className="text-[10px] text-neutral-500 font-medium mt-0.5">
                            {t(`scienceCmp.metrics.${metric.id}.sub`)}
                          </span>
                        </div>
                        <span className="text-3xl lg:text-5xl font-black italic tracking-tighter text-white">
                          {metric.value}
                        </span>
                      </div>
                      {/* 精緻高光動態進度條 */}
                      <div className="h-[3px] w-full bg-white/5 overflow-hidden rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: metric.width }}
                          viewport={{ once: false }}
                          transition={{
                            duration: 1.8,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="h-full bg-gradient-to-r from-neutral-500 via-white to-white shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                        />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* 右側欄：分子生物學機制看板 (佔 5 格) */}
            <div className="lg:col-span-5 w-full">
              <Reveal x={40} delay={0.2}>
                <div className="p-8 lg:p-12 bg-neutral-900/30 border border-white/5 rounded-[30px] shadow-2xl backdrop-blur-sm font-sans">
                  <div className="flex items-center space-x-4 mb-10 border-b border-white/5 pb-6 font-sans">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white text-black flex items-center justify-center rounded-2xl shadow-xl shrink-0">
                      <FlaskConical size={24} />
                    </div>
                    <div className="font-sans">
                      <h4 className="text-lg lg:text-xl font-black uppercase tracking-widest italic leading-none text-white">
                        {t("scienceCmp.mechTitle")}
                      </h4>
                      <p className="text-[9px] text-[#86868b] tracking-[0.3em] mt-1.5 uppercase font-bold">
                        {t("scienceCmp.mechSub")}
                      </p>
                    </div>
                  </div>

                  {/* 🚀 機制證明清單動態渲染 */}
                  <ul className="space-y-6 font-sans">
                    {mechItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0 font-sans"
                      >
                        <span className="text-[10px] lg:text-xs font-semibold text-neutral-400 uppercase tracking-wider italic">
                          {t(`scienceCmp.mechList.${item.id}.label`)}
                        </span>

                        {/* 🚀 修復 Bug：精確判斷是否要顯示綠色盾牌 */}
                        <span className="text-[11px] lg:text-xs font-black italic text-amber-500 tracking-widest uppercase">
                          {item.showShield ? (
                            <span className="text-green-400 flex items-center gap-1">
                              <ShieldCheck size={12} />{" "}
                              {t(`scienceCmp.mechList.${item.id}.value`)}
                            </span>
                          ) : (
                            t(`scienceCmp.mechList.${item.id}.value`)
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 植入的底部品質承諾標章 ===================== */}
      <section className="py-20 border-t border-white/5 bg-neutral-950/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-neutral-900/20 border border-white/5 rounded-2xl">
              <ShieldCheck size={32} className="text-amber-500 mb-4" />
              <h3 className="text-sm font-bold tracking-widest uppercase mb-2">
                {t("sciencePage.pledge1Title")}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                {t("sciencePage.pledge1Desc")}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-neutral-900/20 border border-white/5 rounded-2xl">
              <Activity size={32} className="text-amber-500 mb-4" />
              <h3 className="text-sm font-bold tracking-widest uppercase mb-2">
                {t("sciencePage.pledge2Title")}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                {t("sciencePage.pledge2Desc")}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-neutral-900/20 border border-white/5 rounded-2xl">
              <FlaskConical size={32} className="text-amber-500 mb-4" />
              <h3 className="text-sm font-bold tracking-widest uppercase mb-2">
                {t("sciencePage.pledge3Title")}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                {t("sciencePage.pledge3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Science;
