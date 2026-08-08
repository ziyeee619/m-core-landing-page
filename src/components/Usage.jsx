// src/components/Usage.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, ShieldCheck, X, ExternalLink, Play } from "lucide-react";
import Reveal from "./Reveal";

const Usage = () => {
  const { t } = useTranslation();

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl =
    "https://res.cloudinary.com/f6hqjwzq/video/upload/v1786180327/Certification_qrvz7z.mp4";

  const [certUrl, setCertUrl] = useState(null);
  const [certType, setCertType] = useState(null);

  const certList = [
    {
      key: "gmp",
      img: "/assets/gmp-malaysia-logo.png",
      fileUrl: "/certs/gmp.pdf",
      fileType: "pdf",
    },
    {
      key: "haccp",
      img: "/assets/haccp-certified-logo.png",
      fileUrl: "/certs/haccp.pdf",
      fileType: "pdf",
    },
    {
      key: "mesti",
      img: "/assets/mesti-malaysia-logo.png",
      fileUrl: "/certs/mesti.pdf",
      fileType: "pdf",
    },
    {
      key: "iso22000",
      img: null,
      fileUrl: "/certs/iso22000.pdf",
      fileType: "pdf",
      textLogo: "ISO",
    },
  ];

  return (
    <section
      id="usage"
      /* 🚀 將 py-40 lg:py-64 改為 pt-16 lg:pt-24 pb-28 lg:pb-40
     這樣頂部空白會瞬間減少超過一半（從 256px 縮減為 96px），標題立即大幅上移！ */
      className="pt-16 lg:pt-24 pb-28 lg:pb-40 bg-[#050505] border-t border-white/5 overflow-hidden px-6 lg:px-8 font-sans relative"
    >
      <div className="container mx-auto font-sans">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center font-sans">
          {/* ===================== 左側欄：服用導引與官方認證標章 ===================== */}
          <div className="space-y-12 lg:space-y-16 order-2 lg:order-1 font-sans">
            <Reveal x={-40}>
              <div className="flex items-center space-x-4 mb-6 justify-center lg:justify-start font-sans">
                <div className="h-px w-8 lg:w-12 bg-white/20"></div>
                <span className="text-[9px] tracking-[0.4em] lg:text-[10px] lg:tracking-[0.6em] text-[#86868b] uppercase font-black">
                  {t("usage.label")}
                </span>
              </div>

              <h2 className="text-6xl lg:text-8xl font-black italic uppercase mb-8 lg:mb-10 tracking-tighter text-center lg:text-left pr-4">
                {t("usage.usage")} <br />
                <span className="text-gray-600">{t("usage.guide")}</span>
              </h2>

              <div className="space-y-10 font-sans">
                {/* 服用劑量卡片 */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-0 lg:space-x-8 group font-sans">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Pill className="text-white w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    <h4 className="text-[#86868b] text-[10px] tracking-widest uppercase mb-2 font-bold font-mono">
                      {t("usage.doseTitle")}
                    </h4>
                    <p className="text-2xl lg:text-3xl font-black text-white italic">
                      {t("usage.dose")}{" "}
                      <span className="text-black bg-white px-4 py-1 rounded-sm not-italic shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        {t("usage.doseNum")}
                      </span>
                    </p>
                    <p className="text-[#86868b] text-sm mt-4 font-light italic leading-relaxed px-4 lg:px-0">
                      {t("usage.doseDesc")}
                    </p>
                  </div>
                </div>

                {/* ===================== 🔥 巨無霸 2x2 旗艦版：官方認證證書 ===================== */}
                <div className="pt-10 lg:pt-12 border-t border-white/10 space-y-5">
                  <div className="text-xs font-black tracking-[0.25em] text-neutral-400 uppercase flex items-center gap-2.5 mb-4 justify-center lg:justify-start">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>
                      {t("usage.certTitle") || "生产与实验室官方认证"}
                    </span>
                  </div>

                  {/* 🚀 核心升級：永遠鎖定 1~2 列 (grid-cols-1 sm:grid-cols-2)，徹底廢除 3和4 列！
                      讓每個卡片擁有充裕的大空間，不再隨著視窗縮放產生怪異排版 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                    {certList.map((cert) => {
                      const displayName =
                        cert.name || t(`usage.certs.${cert.key}.name`);
                      const displayDesc =
                        cert.desc || t(`usage.certs.${cert.key}.desc`);

                      return (
                        <div
                          key={cert.key}
                          onClick={() => {
                            setCertUrl(cert.fileUrl);
                            setCertType(cert.fileType);
                          }}
                          /* 🚀 體積全面加大：p-6 內距、加深框線與懸停光影，大氣磅礡 */
                          className="p-6 bg-[#0e0e10] border border-white/10 rounded-2xl flex items-center space-x-5 hover:bg-[#141417] hover:border-white/20 transition-all duration-300 group cursor-pointer select-none shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                        >
                          {/* 左側徽章方塊：🚀 從原本的 w-14 升級為 w-18 h-18 (72px 巨型方塊) */}
                          <div className="w-16 h-16 sm:w-18 sm:h-18 bg-black/60 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center p-3 shrink-0 bg-gradient-to-br from-neutral-800 to-neutral-950 shadow-inner group-hover:border-emerald-500/30 transition-colors">
                            {cert.img ? (
                              <img
                                src={cert.img}
                                alt={displayName}
                                className="w-full h-full object-contain filter brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            ) : (
                              <span className="text-sm font-black tracking-widest text-neutral-300 group-hover:text-emerald-400 transition-colors font-mono">
                                {cert.textLogo || "ISO"}
                              </span>
                            )}
                          </div>

                          {/* 右側說明文字：🚀 字體大升級！不再顯得小氣 */}
                          <div className="flex-1 min-w-0 flex flex-col text-left py-1">
                            {/* 標題放大至 text-sm sm:text-base (約 16px)，加粗顯著 */}
                            <span className="text-sm sm:text-base font-black tracking-wide text-white uppercase group-hover:text-emerald-400 transition-colors break-words leading-tight mb-1.5">
                              {displayName}
                            </span>
                            {/* 描述字體提升至 text-xs (約 12px)，顏色調亮，提升閱讀清晰度 */}
                            <span className="text-[11px] sm:text-xs text-neutral-400 font-normal leading-relaxed break-words">
                              {displayDesc}
                            </span>
                          </div>

                          {/* 右側隱藏的小箭頭，滑鼠移入時優雅出現，提示可點擊 */}
                          <div className="text-neutral-600 group-hover:text-white transition-colors pl-1 font-bold">
                            ↗
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ===================== 右側欄：旗艦奢華包裝大圖 ===================== */}
          <div className="relative group order-1 lg:order-2 font-sans">
            <Reveal scale={0.9} delay={0.2}>
              <div className="relative rounded-[30px] lg:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/m-core-package.webp"
                  alt="M-CORE"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 lg:p-16 flex flex-col justify-end">
                  <h3 className="text-2xl lg:text-5xl font-black italic text-white uppercase tracking-tighter leading-none mb-1">
                    {t("usage.pkgTitle")}
                  </h3>
                  <div className="text-[10px] text-amber-500 font-mono tracking-[0.2em] uppercase mb-4 font-black">
                    {t("usage.pkgSub")}
                  </div>
                  <p className="text-[#86868b] max-w-xs text-xs lg:text-sm font-light italic leading-relaxed">
                    {t("usage.pkgDesc")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      {/* ===================== 影片區塊 (🚀 電腦版左右排版優化) ===================== */}
      <section className="py-12 lg:py-16 bg-[#050505] relative overflow-hidden font-sans">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          {/* 🚀 改用 Grid 左右排版，解決電腦版空洞的問題 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 左側：文字標題與敘述 (電腦版靠左，手機版置中) */}
            <div className="text-center lg:text-left space-y-6">
              <div>
                <h3 className="text-[10px] lg:text-xs font-black tracking-[0.3em] text-[#86868b] uppercase mb-4">
                  {t("certifications.tag")}
                </h3>
                <h2 className="text-3xl lg:text-5xl font-black italic text-white uppercase tracking-tighter leading-tight">
                  {t("certifications.title")}
                </h2>
              </div>
              {/* 🚀 新增一段簡短的描述，用來填補左側空間，增加視覺重量與質感 */}
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                {t("certifications.desc")}
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
                  src="/CertifiedSafe.png"
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

      {/* ===================== 完美放大版：證書展示彈窗 (Modal) ===================== */}
      {certUrl && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md transition-opacity">
          <div className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111] shrink-0">
              <span className="text-sm font-black tracking-widest text-white uppercase font-sans">
                {t("usage.officialDoc")}
              </span>
              <button
                onClick={() => setCertUrl(null)}
                className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-2 md:p-4 overflow-y-auto flex-grow flex items-center justify-center bg-black/40">
              {certType === "pdf" ? (
                <iframe
                  src={`${certUrl}#toolbar=0`}
                  title="Certification Document"
                  className="w-full h-[72vh] rounded border border-white/10 bg-[#111]"
                />
              ) : (
                <img
                  src={certUrl}
                  alt="Certification"
                  className="max-w-full max-h-[72vh] object-contain rounded border border-white/10 shadow-inner"
                />
              )}
            </div>

            <div className="px-6 py-4 border-t border-white/10 bg-[#111] flex justify-end shrink-0">
              <a
                href={certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white text-black font-black px-6 py-3 rounded hover:bg-neutral-200 transition flex items-center space-x-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] duration-200"
              >
                <span className="tracking-wider">
                  {t("usage.openOrDownload")}
                </span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Usage;
