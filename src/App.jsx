import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Dna,
  Flame,
  Battery,
  Target,
  Wind,
  ArrowRight,
  Info,
  FlaskConical,
  Activity,
  Camera,
  Mail,
  Clock,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import SevenRSystem from "./components/SevenRSystem";
import Science from "./components/Science";
import Ingredients from "./components/Ingredients";
import Usage from "./components/Usage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  // 1. 滾動視差邏輯 (傳給 Hero 使用)
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  // 2. 返回頂部按鈕狀態與邏輯
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />

      {/* 將數值傳入 Hero 組件 */}
      <Hero heroOpacity={heroOpacity} heroScale={heroScale} />
      <Vision />
      <SevenRSystem />
      <Ingredients />
      <Science />
      <Usage />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
