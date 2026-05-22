import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import Reveal from "./Reveal";

const Science = () => {
  const data = [
    { label: "細胞修復力提升", value: "95%", delay: 0.1 },
    { label: "耐力持久度增加", value: "88%", delay: 0.2 },
    { label: "壓力皮質醇降低", value: "72%", delay: 0.3 },
  ];

  return (
    <section
      id="science"
      className="py-40 lg:py-52 bg-black text-white overflow-hidden px-6 font-sans"
    >
      <div className="container mx-auto font-sans">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center font-sans">
          <Reveal x={-60}>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-10 lg:mb-12 italic uppercase leading-[0.9] font-sans text-center lg:text-left">
              CLINICAL
              <br />
              PROVEN
            </h2>
            <div className="space-y-12 lg:space-y-16 font-sans">
              <div className="relative font-sans">
                <div className="flex justify-between items-end mb-4 lg:mb-6 font-sans">
                  <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[#86868b] italic font-sans">
                    Sexual Desire Growth
                  </span>
                  <span className="text-4xl lg:text-6xl font-bold italic font-sans">
                    +45%
                  </span>
                </div>
                <div className="h-1 w-full bg-white/10 overflow-hidden font-sans">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "45%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] font-sans"
                  />
                </div>
              </div>
              <div className="relative font-sans">
                <div className="flex justify-between items-end mb-4 lg:mb-6 font-sans">
                  <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[#86868b] italic font-sans">
                    IIEF Function Index
                  </span>
                  <span className="text-4xl lg:text-6xl font-bold italic font-sans">
                    +40%
                  </span>
                </div>
                <div className="h-1 w-full bg-white/10 overflow-hidden font-sans">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 1.5,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] font-sans"
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal x={60} delay={0.2}>
            <div className="p-8 lg:p-16 bg-[#0a0a0a] border border-white/5 rounded-[30px] lg:rounded-[40px] shadow-inner font-sans">
              <div className="flex items-center space-x-6 mb-10 lg:mb-12 font-sans">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white text-black flex items-center justify-center rounded-2xl shadow-2xl font-sans">
                  <FlaskConical size={28} />
                </div>
                <div className="font-sans">
                  <h4 className="text-xl lg:text-2xl font-black uppercase tracking-widest italic leading-none font-sans">
                    機制證明
                  </h4>
                  <p className="text-[9px] lg:text-[10px] text-[#86868b] tracking-[0.4em] lg:tracking-[0.5em] mt-2 uppercase font-bold font-sans">
                    Evidence of Mechanism
                  </p>
                </div>
              </div>
              <ul className="space-y-8 lg:space-y-10 font-sans">
                {[
                  { label: "NO Release 核心機制", value: "Significant" },
                  {
                    label: "PDE-5 Inhibition 活性",
                    value: "High Efficiency",
                  },
                  { label: "Aromatase Inhibition", value: "Ideal Balance" },
                ].map((row, i) => (
                  <li
                    key={row.label}
                    className="flex justify-between items-center border-b border-white/5 pb-6 lg:pb-8 last:border-0 last:pb-0 font-sans"
                  >
                    <span className="text-[10px] lg:text-xs font-medium text-[#86868b] uppercase tracking-widest italic font-sans">
                      {row.label}
                    </span>
                    <span className="text-xs lg:text-sm font-bold italic text-white tracking-widest uppercase font-sans">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Science;
