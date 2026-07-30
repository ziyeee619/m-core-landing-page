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

  const visionTextOpacity = useTransform(
    visionScroll,
    [0.15, 0.35, 0.65, 0.85],
    [0, 1, 1, 0],
  );
  // 🚀 稍微縮小初始向下位移量，給多行文本更多喘息空間
  const visionTextY = useTransform(visionScroll, [0.15, 0.4], [80, 0]);
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
      // 🚀 關鍵 1：把 h-[100vh] 改成 min-h-[100vh]，讓文字過多時能自動撐高！
      // 同時將 z-index 提高到 30，確保壓過下方任何模組
      className="relative min-h-[100vh] bg-[#0a0a0a] font-sans z-30"
    >
      {/* 🚀 關鍵 2：這裡也改成 min-h-[100vh]，並且加上 py-24 (上下留白)，確保頂部和底部絕對有安全距離 */}
      <div className="sticky top-0 min-h-[100vh] w-full flex items-center justify-center overflow-hidden py-24">
        {/* 背景視差產品大圖 */}
        <motion.div
          style={{ scale: visionImageScale, opacity: visionImageOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/assets/m-core-brand-vision-lifestyle.jpg"
            alt="M-CORE 品牌願景"
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
          // 🚀 關鍵 3：將 max-w-5xl 放大到 max-w-6xl，給英文更寬的排版空間
          className="relative z-10 text-center px-6 md:px-10 max-w-6xl w-full font-sans"
        >
          <div className="mb-8 lg:mb-10">
            <span className="text-[10px] lg:text-xs tracking-[1em] uppercase text-[#86868b] font-black block mb-4 lg:mb-6 font-sans">
              {t("vision.label")}
            </span>
            {/* 🚀 關鍵 4：微調字體大小 (lg:text-6xl xl:text-7xl)，避免在寬扁螢幕時字體過大導致過度折行 */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white tracking-tighter mb-6 font-sans">
              {t("vision.p1")}
              <br className="hidden md:block" />
              <span className="text-[#86868b] italic underline decoration-white/10 underline-offset-8 lg:underline-offset-16 uppercase font-sans">
                {t("vision.p2")}
              </span>{" "}
              {t("vision.p3")}
            </h2>
          </div>
          <div>
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white tracking-tighter font-sans">
              {t("vision.p4")}
              <br className="hidden md:block" />
              {t("vision.p5")}{" "}
              <span className="text-black bg-white px-4 py-1 lg:px-6 lg:py-2 inline-block transform -rotate-2 shadow-2xl uppercase font-sans mt-2 sm:mt-0">
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
