// src/components/Usage.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Clock, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const Usage = () => {
  const { t } = useTranslation();

  // 靜態資產路徑與 i18n 鍵值對應保持一致
  const certList = [
    { key: "gmp", img: "/assets/gmp-malaysia-logo.png" },
    { key: "haccp", img: "/assets/haccp-certified-logo.png" },
    { key: "mesti", img: "/assets/mesti-malaysia-logo.png" },
  ];

  return (
    <section
      id="usage"
      className="py-40 lg:py-64 bg-[#050505] border-t border-white/5 overflow-hidden px-6 lg:px-8 font-sans"
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
                    <Clock className="text-white w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    {/* 🚀 核心修正：將原本寫死的 Prescription 改由 JSON 全方位控管 */}
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

                {/* 認證標章渲染區 */}
                <div className="pt-8 lg:pt-10 border-t border-white/5 space-y-4">
                  <div className="text-[10px] font-black tracking-widest text-neutral-500 uppercase flex items-center gap-2 mb-2 justify-center lg:justify-start">
                    <ShieldCheck size={12} className="text-green-500" />
                    {t("usage.certTitle")}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
                    {certList.map((cert) => (
                      <div
                        key={cert.key}
                        className="p-3.5 bg-[#111] border border-white/5 rounded-xl flex items-center space-x-3.5 hover:border-white/10 transition-colors group overflow-hidden"
                      >
                        <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-lg overflow-hidden flex items-center justify-center p-1 shrink-0 bg-gradient-to-br from-neutral-800 to-neutral-900">
                          <img
                            src={cert.img}
                            alt={`${t(`usage.certs.${cert.key}.name`)}`}
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          <span className="text-[9px] font-black text-center leading-none text-neutral-400 group-hover:text-white transition-colors block font-mono">
                            {cert.key.toUpperCase()}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col text-left">
                          <span className="text-[10px] lg:text-[11px] font-black tracking-wider text-white uppercase group-hover:text-amber-500 transition-colors truncate">
                            {t(`usage.certs.${cert.key}.name`)}
                          </span>
                          <span className="text-[9px] text-neutral-500 font-medium mt-0.5 leading-tight break-words">
                            {t(`usage.certs.${cert.key}.desc`)}
                          </span>
                        </div>
                      </div>
                    ))}
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
                  {/* 🚀 這裡改用 JSON 動態翻譯標題，大寫、斜體、帥氣的 leading-none */}
                  <h3 className="text-3xl lg:text-5xl font-black italic text-white uppercase tracking-tighter leading-none mb-1">
                    {t("usage.pkgTitle")}
                  </h3>
                  {/* 小小的副標點綴 */}
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
    </section>
  );
};

export default Usage;
