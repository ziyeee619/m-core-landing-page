import React from "react";
import { useTranslation } from "react-i18next";
import { Clock } from "lucide-react";
import Reveal from "./Reveal";

const Usage = () => {
  const { t } = useTranslation();
  return (
    <section
      id="usage"
      className="py-40 lg:py-64 bg-[#050505] border-t border-white/5 overflow-hidden px-6 lg:px-8 font-sans"
    >
      <div className="container mx-auto font-sans">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center font-sans">
          <div className="space-y-12 lg:space-y-16 order-2 lg:order-1 font-sans">
            <Reveal x={-40}>
              <div className="flex items-center space-x-4 mb-6 justify-center lg:justify-start font-sans">
                <div className="h-px w-8 lg:w-12 bg-white/20 font-sans"></div>
                <span className="text-[9px] tracking-[0.4em] lg:text-[10px] lg:tracking-[0.6em] text-[#86868b] uppercase font-black font-sans">
                  {t("usage.label")}
                </span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-black italic uppercase mb-8 lg:mb-10 tracking-tighter font-sans text-center lg:text-left">
                {t("usage.usage")} <br />
                <span className="text-gray-600">{t("usage.guide")}</span>
              </h2>
              <div className="space-y-10 font-sans">
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-0 lg:space-x-8 group font-sans">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center shrink-0 font-sans">
                    <Clock className="text-white w-6 h-6 lg:w-8 lg:h-8 font-sans" />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-[#86868b] text-[10px] tracking-widest uppercase mb-2 font-bold font-sans">
                      Prescription
                    </h4>
                    <p className="text-2xl lg:text-3xl font-black text-white italic font-sans">
                      {t("usage.dose")}{" "}
                      <span className="text-black bg-white px-4 py-1 rounded-sm not-italic shadow-[0_0_30px_rgba(255,255,255,0.2)] font-sans">
                        2 片
                      </span>
                    </p>
                    <p className="text-[#86868b] text-sm mt-4 font-light italic leading-relaxed px-4 lg:px-0 font-sans">
                      {t("usage.doseDesc")}
                    </p>
                  </div>
                </div>
                <div className="pt-8 lg:pt-10 border-t border-white/5 grid grid-cols-2 gap-3 lg:gap-4 font-sans">
                  {["HALAL", "HACCP", "ISO 22000", "MeSTI"].map((cert) => (
                    <div
                      key={cert}
                      className="px-4 py-3 lg:px-6 lg:py-4 bg-[#111] border border-white/5 rounded-xl flex flex-col items-center justify-center hover:border-white/10 transition-colors font-sans"
                    >
                      <span className="text-[10px] lg:text-xs font-black tracking-[0.2em] lg:tracking-[0.3em] text-white font-sans">
                        {cert}
                      </span>
                      <div className="h-0.5 w-3 bg-gray-800 mt-2 font-sans"></div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <div className="relative group order-1 lg:order-2 font-sans">
            <Reveal scale={0.9} delay={0.2}>
              <div className="relative rounded-[30px] lg:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl font-sans">
                <img
                  src="/assets/m-core-premium-packaging-60-tablets.jpg"
                  alt="M-CORE 尊榮版 60 片裝 - 30 天男士健康活力週期方案"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 font-sans"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 lg:p-16 flex flex-col justify-end font-sans">
                  <h3 className="text-3xl lg:text-5xl font-black italic text-white uppercase font-sans tracking-tighter leading-none mb-4 lg:mb-6">
                    Premium <br /> Package
                  </h3>
                  <p className="text-[#86868b] max-w-xs text-xs lg:text-sm font-light italic leading-relaxed font-sans">
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
