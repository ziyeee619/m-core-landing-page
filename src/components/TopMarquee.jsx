// src/components/TopMarquee.jsx
import React from "react";
// 1️⃣ 原本是 import Marquee，我們改個名字叫 MarqueeImport
import MarqueeImport from "react-fast-marquee";
import { useTranslation } from "react-i18next";

// 2️⃣ 🚀 核心修復：手動抓取 .default，解決 Vite 相容性報錯
const Marquee = MarqueeImport.default || MarqueeImport;

const TopMarquee = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white text-neutral-900 py-2 text-xs md:text-sm font-bold tracking-widest border-b border-black/5 uppercase relative z-50">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        <div className="flex items-center gap-12 mx-6">
          <span className="flex items-center gap-2">
            🛡️ {t("marquee.confidence")}
          </span>

          <span className="flex items-center gap-2">
            <img src="/logos/gdex.png" alt="Gdex" className="h-4 opacity-80" />
            {t("marquee.gdex")}
          </span>

          <span className="flex items-center gap-2">
            <img
              src="/logos/atome.png"
              alt="Atome"
              className="h-4 opacity-80"
            />
            {t("marquee.atome")}
          </span>

          <span className="flex items-center gap-2">
            <img
              src="/logos/Allianz.png"
              alt="Allianz"
              className="h-4 opacity-80"
            />
            {t("marquee.allianz")}
          </span>

          <span className="flex items-center gap-2">
            <img
              src="/logos/shopee.png"
              alt="Shopee"
              className="h-4 opacity-80"
            />
            SHOPEE &
            <img
              src="/logos/lazada.png"
              alt="Lazada"
              className="h-4 opacity-80"
            />
            LAZADA
            {t("marquee.shopping")}
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default TopMarquee;
