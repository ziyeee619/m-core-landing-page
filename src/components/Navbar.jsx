// --- 導航欄 ---
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom"; // 引入 React Router 工具
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation(); // 獲取當前網址路徑
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 語言列表
  const langs = [
    { code: "zh", label: "ZH" },
    { code: "en", label: "EN" },
    { code: "bm", label: "BM" },
  ];

  // 配合全新四個多頁面規劃，將 href 改為實體路由 path
  const navLinks = [
    { name: t("nav.home") || "Home", path: "/" },
    { name: t("nav.product") || "The M-CORE", path: "/product" },
    { name: t("nav.science") || "Science", path: "/science" },
    { name: t("nav.support") || "Support", path: "/support" },
  ];

  return (
    <>
      <nav
        //---動態視覺效果---
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl py-4 border-b border-white/5"
            : "bg-transparent py-6 lg:py-8"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* 1. Logo 區域 - 改為 Link 點擊回首頁 */}
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

          {/* 2. 桌面端選單與語言切換 */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-12 text-[14px] tracking-[0.3em] uppercase font-bold text-[#86868b] font-sans">
              {navLinks.map((link) => {
                // 檢查當前網址是否與選單路徑相符
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

            {/* 語言切換按鈕 */}
            <div className="flex items-center space-x-4 border-l border-white/10 pl-8 ml-4">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => i18n.changeLanguage(l.code)}
                  className={`text-[11px] font-black tracking-widest transition-all ${
                    i18n.language?.startsWith(l.code)
                      ? "text-white"
                      : "text-[#444] hover:text-[#86868b]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. 手機版漢堡選單按鈕 */}
          <div className="flex items-center lg:hidden">
            <button
              className="text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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

              <div className="flex space-x-6 pt-10 justify-center">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      i18n.changeLanguage(l.code);
                      setIsOpen(false);
                    }}
                    className={`text-sm font-black ${
                      i18n.language === l.code
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
