// src/pages/Home.jsx
import React from "react";
import { useTransform } from "framer-motion";

// 引入首頁專用的區塊組件
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import BrandStory from "../components/BrandStory"; // 🚀 引入全新的品牌故事區塊
import ScrollToTop from "../components/ScrollToTop";
import ProductPreview from "../components/ProductPreview";

const Home = ({ scrollYProgress }) => {
  // 1. 滾動視差邏輯 (使用從 App.jsx 傳下來的全局 scrollYProgress)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <>
      {/* 1. 首屏視覺與鉤子 (Hook) */}
      <Hero heroOpacity={heroOpacity} heroScale={heroScale} />

      {/* 2. 痛點共鳴 */}
      <Vision />

      {/* 3. 🚀 品牌理念與製程信任感建立 (About Us & Science) */}
      <BrandStory />

      {/* 4. 終極導流入口 (Final CTA)：
          顧客看完故事產生信任後，正好在這裡看到 M-CORE 並跳轉至商品/商城頁 */}
      <ProductPreview />

      <ScrollToTop />
    </>
  );
};

export default Home;
