import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";

const Vision = () => {
  const { t } = useTranslation();
  const visionRef = useRef(null);

  const { scrollYProgress: visionScroll } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"],
  });

  const visionImageScale = useTransform(visionScroll, [0.1, 0.5], [1.15, 1]);
  const visionImageOpacity = useTransform(visionScroll, [0, 0.4], [0.1, 0.4]);

  // --- 優化後的文案明顯動畫 (加強了 Scale, Blur 與位移感) ---
  const visionTextOpacity = useTransform(
    visionScroll,
    [0.15, 0.35, 0.65, 0.85],
    [0, 1, 1, 0],
  );
  const visionTextY = useTransform(visionScroll, [0.15, 0.4], [150, 0]);
  const visionTextScale = useTransform(visionScroll, [0.15, 0.4], [0.85, 1]);
  const visionTextBlur = useTransform(
    visionScroll,
    [0.15, 0.35],
    ["blur(20px)", "blur(0px)"],
  );

  return (
    <section
      id="vision"
      ref={visionRef}
      className="relative h-[100vh] bg-[#0a0a0a] font-sans"
    >
      <div className="sticky top-0 h-[100vh] w-full flex items-center justify-center overflow-hidden">
        {/* 背景視差產品大圖 */}
        <motion.div
          style={{ scale: visionImageScale, opacity: visionImageOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/assets/m-core-brand-vision-lifestyle.jpg"
            alt="M-CORE 品牌願景：專為現代男士打造的核心動能與精力補充"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1000";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0d0d0d]"></div>
        </motion.div>

        {/* 強化後的文案展示區塊 */}
        <motion.div
          style={{
            opacity: visionTextOpacity,
            y: visionTextY,
            scale: visionTextScale,
            filter: visionTextBlur,
          }}
          className="relative z-10 text-center px-6 max-w-5xl font-sans"
        >
          <div className="mb-12">
            <span className="text-[10px] lg:text-xs tracking-[1em] uppercase text-[#86868b] font-black block mb-6 font-sans">
              {t("vision.label")}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight text-white tracking-tighter mb-8 font-sans">
              {t("vision.p1")}
              <br />
              <span className="text-[#86868b] italic underline decoration-white/10 underline-offset-16 uppercase font-sans">
                {t("vision.p2")}
              </span>{" "}
              {t("vision.p3")}
            </h2>
          </div>
          <div>
            <p className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight text-white tracking-tighter font-sans">
              {t("vision.p4")}
              <br />
              {t("vision.p5")}{" "}
              <span className="text-black bg-white px-6 py-1 lg:px-8 lg:py-2 inline-block transform -rotate-2 shadow-2xl uppercase font-sans">
                {t("vision.p6")}
              </span>{" "}
              {t("vision.p7")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
