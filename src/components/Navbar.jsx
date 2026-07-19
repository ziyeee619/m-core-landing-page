// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AccountButton from "../components/AccountButton"; // 🚀 成功引入元件

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
    { name: t("nav.science") || "Science", path: "/science" },
    { name: t("nav.shop") || "Store", path: "/shop" },
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
        {/* 🚀 移除 relative，直接使用正統 Flexbox 彈性排版 */}
        <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* ==================== 1. Logo 區域 (加上 shrink-0 防止被擠壓) ==================== */}
          <Link
            to="/"
            className="shrink-0 flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <div className="text-xl font-bold tracking-[0.2em] text-white uppercase italic font-sans">
              ST{" "}
              <span className="text-[#86868b] font-light uppercase font-sans">
                Empires
              </span>
            </div>
          </Link>

          {/* ==================== 2. 桌面端主選單 (🔥 終極改法：移除 absolute！) ==================== */}
          {/* 🚀 改用 flex-1 justify-center：它會自動佔滿左右剩餘的空隙，並在中間優雅置中，但絕不侵犯左右鄰居！ */}
          {/* 🚀 將顯示斷點提高到 xl:flex (1280px)，間距調整為響應式縮放 */}
          <div className="hidden xl:flex flex-1 justify-center items-center px-4 space-x-6 2xl:space-x-10 text-[13px] 2xl:text-[14px] tracking-[0.15em] 2xl:tracking-[0.2em] uppercase font-bold text-[#86868b] font-sans whitespace-nowrap">
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

          {/* ==================== 3. 右側按鈕與語言切換 (加上 shrink-0 防止變形) ==================== */}
          <div className="flex items-center space-x-4 lg:space-x-6 shrink-0">
            {/* 桌面端：會員中心登入按鈕 */}
            <div className="hidden sm:block">
              <AccountButton currentLang={i18n.language} />
            </div>

            {/* 桌面端語言切換 (提高到 xl:flex 才顯示，小於 1280px 時自動收到漢堡選單裡) */}
            <div className="hidden xl:flex items-center space-x-5">
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

            {/* 手機與中型筆電版：漢堡選單按鈕 (小於 1280px 時自動出現) */}
            <div className="flex items-center xl:hidden">
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

              {/* 🚀 手機版：把登入按鈕放在行動選單正中央 (帶有滑入動畫) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 flex justify-center"
              >
                <div onClick={() => setIsOpen(false)}>
                  <AccountButton currentLang={i18n.language} isMobile={true} />
                </div>
              </motion.div>

              {/* 手機版語言切換 */}
              <div className="flex space-x-6 pt-6 justify-center">
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
