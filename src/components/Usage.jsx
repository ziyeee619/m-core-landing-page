// src/components/Usage.jsx
import React, { useState } from "react"; // 🚀 修正：記得引入 useState
import { useTranslation } from "react-i18next";
// 🚀 修正：將 Clock 換成 Pill (膠囊)，並引入彈窗會用到的 X 與 ExternalLink
import { Pill, ShieldCheck, X, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const Usage = () => {
  const { t } = useTranslation();

  // 用來記錄當前點擊了哪一個認證的圖片/PDF 網址
  const [certUrl, setCertUrl] = useState(null);
  const [certType, setCertType] = useState(null); // 'image' 或 'pdf'

  // 靜態資產路徑與 i18n 鍵值對應保持一致
  // 🚀 新增：為每一個認證補上 fileUrl 與 fileType，並多加 ISO2000（無圖片，採純文字呈現）
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
      key: "iso2000",
      img: null, // 🚀 不需要 logo，設為 null
      fileUrl: "/certs/iso2000.pdf", // 請確保 public/certs/ 下有這個 pdf 檔案
      fileType: "pdf",
      textLogo: "ISO", // 用來代替圖片 logo 的顯示文字
    },
  ];

  return (
    <section
      id="usage"
      className="py-40 lg:py-64 bg-[#050505] border-t border-white/5 overflow-hidden px-6 lg:px-8 font-sans relative"
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
                    {/* 🚀 這裡將原本的 Clock 換成了 Pill (膠囊圖示) */}
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

                {/* 認證標章渲染區：保留右側文字與樣式，只加上點擊打開彈窗 */}
                <div className="pt-8 lg:pt-10 border-t border-white/5 space-y-4">
                  <div className="text-[10px] font-black tracking-widest text-neutral-500 uppercase flex items-center gap-2 mb-2 justify-center lg:justify-start">
                    <ShieldCheck size={12} className="text-green-500" />
                    {t("usage.certTitle")}
                  </div>

                  {/* 🚀 RWD 修改：將 sm:grid-cols-3 改為 sm:grid-cols-2 lg:grid-cols-4，完美排列 4 個項目 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
                    {certList.map((cert) => {
                      // 安全取得名稱與描述 (優先使用自訂文字，其次使用 i18n 翻譯)
                      const displayName =
                        cert.name || t(`usage.certs.${cert.key}.name`);
                      const displayDesc =
                        cert.desc || t(`usage.certs.${cert.key}.desc`);

                      return (
                        <div
                          key={cert.key}
                          /* 🚀 在這層加上 onClick 觸發彈窗與 cursor-pointer，外觀完全不改 */
                          onClick={() => {
                            setCertUrl(cert.fileUrl);
                            setCertType(cert.fileType);
                          }}
                          className="p-3.5 bg-[#111] border border-white/5 rounded-xl flex items-center space-x-3.5 hover:border-white/10 transition-colors group overflow-hidden cursor-pointer"
                        >
                          {/* 左側徽章方塊 */}
                          <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-lg overflow-hidden flex items-center justify-center p-1.5 shrink-0 bg-gradient-to-br from-neutral-800 to-neutral-900">
                            {cert.img ? (
                              /* 有 Logo 圖片時：渲染原本的 Img */
                              <img
                                src={cert.img}
                                alt={displayName}
                                className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            ) : (
                              /* 🚀 沒有 Logo 圖片時：渲染極簡質感的純文字標章 (例如: ISO) */
                              <span className="text-[10px] font-black tracking-widest text-neutral-400 group-hover:text-amber-500 transition-colors">
                                {cert.textLogo || "ISO"}
                              </span>
                            )}
                          </div>

                          {/* 右側說明文字 (完整保留) */}
                          <div className="flex-1 min-w-0 flex flex-col text-left">
                            <span className="text-[10px] lg:text-[11px] font-black tracking-wider text-white uppercase group-hover:text-amber-500 transition-colors truncate">
                              {displayName}
                            </span>
                            <span className="text-[9px] text-neutral-500 font-medium mt-0.5 leading-tight break-words">
                              {displayDesc}
                            </span>
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

      {/* ===================== 🚀 新增：證書展示彈窗 (Modal) ===================== */}
      {certUrl && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
          <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
            {/* 頂部關閉按鈕列 */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111]">
              <span className="text-xs font-black tracking-widest text-white uppercase">
                {t("usage.officialDoc")}
              </span>
              <button
                onClick={() => setCertUrl(null)} // 點擊清空狀態，關閉彈窗
                className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* 檔案顯示區塊 (自動支援 PDF / 圖片) */}
            <div className="p-4 md:p-6 overflow-y-auto flex-grow flex items-center justify-center bg-black/50 min-h-[50vh]">
              {certType === "pdf" ? (
                <iframe
                  src={`${certUrl}#toolbar=0`}
                  title="Certification Document"
                  className="w-full h-[65vh] rounded border border-white/10 bg-[#111]"
                />
              ) : (
                <img
                  src={certUrl}
                  alt="Certification"
                  className="max-w-full max-h-[65vh] object-contain rounded border border-white/10"
                />
              )}
            </div>

            {/* 底部按鈕：支援新分頁開啟 / 下載 */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#111] flex justify-end">
              <a
                href={certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white text-black font-black px-5 py-2.5 rounded hover:bg-neutral-200 transition flex items-center space-x-2 shadow-lg"
              >
                <span>{t("usage.openOrDownload")}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Usage;
