// src/components/FloatingChat.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 📞 這裡填寫你們真實的聯絡資訊
  const whatsappNumber = "60123456789";
  const defaultMessage = encodeURIComponent(
    "Hello ST EMPIRES, I want to know more about M-CORE.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const messengerUrl = "https://m.me/yourfacebookpage"; // FB 粉專連結
  const phoneNumber = "+60123456789"; // 國際電話格式
  const emailAddress = "contact@stempires.com"; // 客服信箱

  // 🚀 監聽 Shopify 購物車狀態 (防遮擋黑魔法)
  useEffect(() => {
    const handleCartVisibility = () => {
      const cartFrame = document.querySelector(".shopify-buy-frame--cart");
      if (cartFrame) {
        const cartActive =
          cartFrame.classList.contains("is-active") ||
          cartFrame.classList.contains("is-visible") ||
          (window.getComputedStyle(cartFrame).display !== "none" &&
            window.getComputedStyle(cartFrame).visibility !== "hidden" &&
            parseInt(window.getComputedStyle(cartFrame).width, 10) > 0);

        setIsCartOpen(cartActive);
        if (cartActive) setIsOpen(false);
      } else {
        setIsCartOpen(false);
      }
    };

    const observer = new MutationObserver(() => handleCartVisibility());
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => observer.disconnect();
  }, []);

  // 如果購物車打開了，直接隱藏按鈕避免擋住結帳畫面
  if (isCartOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[200] flex flex-col items-end font-sans">
      {/* 展開的多渠道選單 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex flex-col space-y-3"
          >
            {/* 1. WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-neutral-900 border border-white/10 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-neutral-800 hover:border-white/20 transition-all duration-300 group"
            >
              <span className="text-sm font-bold tracking-wider">WhatsApp</span>
              <div className="bg-[#25D366] p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                <Send size={16} />
              </div>
            </a>

            {/* 2. Messenger */}
            <a
              href={messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-neutral-900 border border-white/10 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-neutral-800 hover:border-white/20 transition-all duration-300 group"
            >
              <span className="text-sm font-bold tracking-wider">
                Messenger
              </span>
              <div className="bg-[#00B2FF] p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                <MessageCircle size={16} />
              </div>
            </a>

            {/* 3. Phone Call */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center space-x-3 bg-neutral-900 border border-white/10 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-neutral-800 hover:border-white/20 transition-all duration-300 group"
            >
              <span className="text-sm font-bold tracking-wider">
                Phone Call
              </span>
              <div className="bg-amber-500 p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                <Phone size={16} />
              </div>
            </a>

            {/* 4. Email */}
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center space-x-3 bg-neutral-900 border border-white/10 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-neutral-800 hover:border-white/20 transition-all duration-300 group"
            >
              <span className="text-sm font-bold tracking-wider">Email Us</span>
              <div className="bg-neutral-600 p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                <Mail size={16} />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 主懸浮按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default FloatingChat;
