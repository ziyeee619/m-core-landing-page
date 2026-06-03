// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { useTransform } from "framer-motion";

// 引入首頁專用的區塊組件
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import ScrollToTop from "../components/ScrollToTop";

// 🚀 乾淨引入全新解耦的產品櫥窗導流元件
import ProductPreview from "../components/ProductPreview";

const Home = ({ scrollYProgress }) => {
  // 1. 滾動視差邏輯 (使用從 App.jsx 傳下來的全局 scrollYProgress)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <>
      {/* 將數值傳入 Hero 組件 */}
      <Hero heroOpacity={heroOpacity} heroScale={heroScale} />

      <Vision />

      {/* 🚀 引入獨立元件：完美填補首頁長度、建立科學信任感並精準進行跳轉導流 */}
      <ProductPreview />
    </>
  );
};

export default Home;
