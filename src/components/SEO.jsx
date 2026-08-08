import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t, i18n } = useTranslation();

  // 取得當前語言 (例如 'zh', 'en', 'ms')
  const currentLang = i18n.language || "zh";

  return (
    // htmlAttributes 會自動把 <html lang="zh"> 換成 <html lang="en"> 等等
    <Helmet htmlAttributes={{ lang: currentLang }}>
      {/* 🚀 核心 SEO 標籤動態切換 */}
      <title>{t("seo.title")}</title>
      <meta name="description" content={t("seo.description")} />
      <meta name="keywords" content={t("seo.keywords")} />

      {/* 🚀 讓 FB / WhatsApp 分享時也支援多語言 */}
      <meta property="og:title" content={t("seo.title")} />
      <meta property="og:description" content={t("seo.description")} />
      <meta property="og:locale" content={currentLang} />
    </Helmet>
  );
};

export default SEO;
