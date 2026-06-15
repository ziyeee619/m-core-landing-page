// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 語言列表：中、英、馬
  const langs = [
    { code: "bm", label: "BM" },
    { code: "en", label: "EN" },
    { code: "zh", label: "中文" },
  ];

  // 🚀 精准架構優化：加入獨立的商城（Store）路由路徑
  const navLinks = [
    { name: t("nav.home") || "Home", path: "/" },
    { name: t("nav.product") || "The M-CORE", path: "/product" },
    { name: t("nav.shop") || "Store", path: "/shop" },
    { name: t("nav.science") || "Science", path: "/science" },
    { name: t("nav.support") || "Support", path: "/support" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl py-4 border-b border-white/5"
            : "bg-transparent py-6 lg:py-8"
        }`}
      >
        {/* 🚀 加入 relative 讓內部的選單可以絕對置中 */}
        <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center relative">
          {/* ==================== 1. Logo 區域 (靠左) ==================== */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <div className="text-xl font-bold tracking-[0.2em] text-white uppercase italic font-sans">
              ST{" "}
              <span className="text-[#86868b] font-light uppercase font-sans">
                Empires
              </span>
            </div>
          </Link>

          {/* ==================== 2. 桌面端主選單 (完美置中) ==================== */}
          {/* 🚀 使用 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 確保不管兩側內容多寬，選單永遠在正中間 */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-12 text-[14px] tracking-[0.3em] uppercase font-bold text-[#86868b] font-sans">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors font-sans ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ==================== 3. 語言切換與漢堡選單 (靠右) ==================== */}
          <div className="flex items-center">
            {/* 桌面端語言切換 */}
            <div className="hidden lg:flex items-center space-x-5">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => i18n.changeLanguage(l.code)}
                  className={`text-[11px] font-black tracking-widest transition-all cursor-pointer ${
                    i18n.language?.startsWith(l.code)
                      ? "text-white"
                      : "text-[#444] hover:text-[#86868b]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* 手機版漢堡選單按鈕 */}
            <div className="flex items-center lg:hidden">
              <button
                className="text-white p-2 cursor-pointer flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== Mobile Menu ==================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center font-sans">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-black italic uppercase tracking-widest font-sans ${
                        isActive
                          ? "text-white"
                          : "text-[#86868b] hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* 手機版語言切換 */}
              <div className="flex space-x-6 pt-10 justify-center">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      i18n.changeLanguage(l.code);
                      setIsOpen(false);
                    }}
                    className={`text-sm font-black cursor-pointer ${
                      i18n.language?.startsWith(l.code)
                        ? "text-white border-b-2 border-white pb-1"
                        : "text-[#444]"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
