// src/components/Science.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  ShieldCheck,
  Award,
  Activity,
  BookOpen,
  X,
  ZoomIn,
} from "lucide-react";
import Reveal from "./Reveal";

const Science = () => {
  const { t } = useTranslation();

  // 🚀 關鍵修改 1：這裡改為儲存「被選中的整個 ref 物件」，不只是圖片 URL
  const [selectedRef, setSelectedRef] = useState(null);

  const coreMetrics = [
    { id: "m1", value: "+15.13%", width: "55%" },
    { id: "m2", value: "-42.41%", width: "85%" },
    { id: "m3", value: "Optimal", width: "100%" },
  ];

  // 🚀 機制證明：科學邏輯完美對應版
  const mechItems = [
    { id: "l1", showShield: false }, // [1] 東革阿里 -> 對應：NO 與 PDE-5 血管擴張
    { id: "l2", showShield: false }, // [2] 達米阿那 -> 對應：抗芳香化 (雄激素防護)
    { id: "l3", showShield: false }, // [3, 4] 瑪卡+冬蟲夏草 -> 對應：睪酮促生與性慾喚醒
    { id: "l4", showShield: true }, // HPLC 是檢驗技術，留空不加文獻標籤，只保留綠色盾牌
  ];

  const references = [
    { id: "1", imgUrl: "/ref-1.png" },
    { id: "2", imgUrl: "/ref-2.png" },
    { id: "3", imgUrl: "/ref-3.png" },
    { id: "4", imgUrl: "/ref-4.png" },
  ];

  return (
    <>
      <section
        id="science"
        className="py-40 lg:py-52 bg-black text-white overflow-hidden px-6 font-sans min-h-screen relative"
      >
        <div className="container mx-auto max-w-6xl font-sans relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center font-sans">
            {/* 左側欄：硬核專利動態能量進度條 (維持不變) */}
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 pr-4">
                      {t("scienceCmp.title2")}
                    </span>
                  </h2>
                </div>
              </Reveal>

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

            {/* 右側欄：分子生物學機制看板 */}
            <div className="lg:col-span-5 w-full">
              <Reveal x={40} delay={0.2}>
                <div className="p-8 lg:p-12 bg-neutral-900/30 border border-white/5 rounded-[30px] shadow-2xl backdrop-blur-sm font-sans flex flex-col h-full">
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

                  {/* 機制證明清單 */}
                  <ul className="space-y-6 font-sans flex-grow">
                    {mechItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0 font-sans"
                      >
                        <span className="flex items-start text-[10px] lg:text-xs font-semibold text-neutral-400 uppercase tracking-wider italic">
                          {t(`scienceCmp.mechList.${item.id}.label`)}
                          {item.refs && (
                            <sup className="text-[8px] text-neutral-600 ml-0.5 mt-0.5 font-sans">
                              [{item.refs}]
                            </sup>
                          )}
                        </span>

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

                  {/* 底部文獻縮圖區 */}
                  <div className="mt-10 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-1.5 mb-4 text-neutral-500">
                      <BookOpen size={10} />
                      <span className="text-[9px] uppercase tracking-widest font-bold">
                        Clinical References
                      </span>
                    </div>

                    {/* 4張小圖網格 */}
                    <div className="grid grid-cols-4 gap-3">
                      {references.map((ref) => (
                        <div
                          key={ref.id}
                          onClick={() => setSelectedRef(ref)} // 🚀 關鍵修改 2：傳入整個 ref 物件
                          className="group cursor-pointer relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-white/5"
                        >
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                          <img
                            src={ref.imgUrl}
                            alt={`Reference ${ref.id}`}
                            className="w-full h-full object-cover brightness-90 contrast-125 transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-1.5 left-1.5 bg-black/80 backdrop-blur-md text-[#CCCCCC] text-[8px] font-bold px-1.5 py-0.5 rounded z-20">
                            [{ref.id}]
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300">
                            <ZoomIn
                              size={16}
                              className="text-white drop-shadow-md"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 🚀 完美整合：下方大張認證圖展示區（i18n 多語系動態版） */}
                    <div
                      onClick={() =>
                        setSelectedRef({
                          id: "cert",
                          imgUrl: "/st-certifications.jpg",
                          title: t("scienceCmp.cert.lightboxTitle"), // 💡 動態讀取彈窗標題
                        })
                      }
                      className="group cursor-pointer mt-4 relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-white/10 bg-[#121212] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20"
                    >
                      {/* 奢華遮罩層 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:bg-black/10 transition-colors duration-300 z-10" />

                      {/* 認證大圖主體 */}
                      <img
                        src="/st-certifications.jpg"
                        alt="STEMPIRES Safety Certifications"
                        className="w-full h-full object-cover brightness-95 object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />

                      {/* 左下角高奢品牌文字點綴 */}
                      <div className="absolute bottom-4 left-5 z-20 pointer-events-none text-left space-y-0.5">
                        <span className="text-[8px] tracking-[0.2em] text-white/40 uppercase font-mono block">
                          {t("scienceCmp.cert.tag")}
                        </span>
                        <p className="text-white font-bold text-[11px] sm:text-[12px] tracking-wider uppercase italic leading-tight">
                          {t("scienceCmp.cert.title")}
                        </p>
                        <p className="text-neutral-400 text-[9px] tracking-wide font-medium leading-normal">
                          {t("scienceCmp.cert.desc")}
                        </p>
                      </div>

                      {/* 懸浮放大提示 */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300">
                        <div className="bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-lg text-white flex flex-col items-center gap-1 text-center">
                          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
                            <ZoomIn size={14} className="animate-pulse" />
                            <span>{t("cert.hoverTitle")}</span>
                          </div>
                          <span className="text-[9px] text-neutral-400 font-medium">
                            {t("cert.hoverSub")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 全螢幕燈箱 Modal (點擊縮圖後彈出) */}
      <AnimatePresence>
        {selectedRef && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRef(null)} // 點擊背景關閉
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 lg:p-10 cursor-zoom-out"
          >
            {/* 關閉按鈕 */}
            <button
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors p-2 z-50"
              onClick={() => setSelectedRef(null)}
            >
              <X size={36} strokeWidth={1.5} />
            </button>

            {/* 放大後的截圖與文字容器 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // 防止點擊圖片/文字本身時關閉
              className="flex flex-col items-center max-w-4xl max-h-full cursor-default"
            >
              {/* 圖片本體 */}
              <img
                src={selectedRef.imgUrl}
                alt="Expanded Reference"
                className="max-w-full max-h-[70vh] lg:max-h-[80vh] object-contain rounded-xl border border-white/10 shadow-2xl mb-6"
              />

              {/* 🚀 關鍵修改 3：在這裡精準呼叫 JSON 裡的文獻標題 */}
              <div className="text-center px-4">
                <p className="text-amber-500 font-bold text-sm lg:text-base mb-1 tracking-widest uppercase">
                  Reference [{selectedRef.id}]
                </p>
                <p className="text-neutral-300 text-sm lg:text-lg font-medium leading-relaxed max-w-2xl">
                  {t(`scienceCmp.references.ref${selectedRef.id}`)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 底部品質承諾標章 */}
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
