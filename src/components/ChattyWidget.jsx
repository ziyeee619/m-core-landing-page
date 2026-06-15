// src/components/ChattyWidget.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChattyWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 📞 填入你們的客服資訊
  const whatsappUrl = "https://wa.me/60123456789?text=Hello%20ST%20EMPIRES";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      {/* 模擬 Chatty AI 彈出的對話視窗 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 bg-neutral-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* 視窗頭部 */}
            <div className="bg-white text-black p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs tracking-wider">
                ST
              </div>
              <div>
                <h4 className="font-bold text-sm">ST EMPIRES EMPIRE</h4>
                <p className="text-xs text-neutral-500 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1.5 animate-pulse"></span>
                  AI Sales Agent Online
                </p>
              </div>
            </div>

            {/* 視窗內容區 */}
            <div className="p-4 space-y-3 max-h-60 overflow-y-auto bg-neutral-950 text-sm">
              <div className="bg-neutral-800 text-white p-3 rounded-xl rounded-tl-none max-w-[85%]">
                👋 歡迎光臨 ST EMPIRES！我是您的 AI
                銷售助手，有什麼我可以幫您的嗎？
              </div>
            </div>

            {/* 視窗底部按鈕：點擊直接引導至 WhatsApp / Messenger */}
            <div className="p-3 bg-neutral-900 border-t border-white/5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-2.5 rounded-xl font-bold text-center block text-sm hover:bg-neutral-200 transition-all duration-200"
              >
                💬 啟動 AI 智慧對話 (WhatsApp)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🚀 主懸浮按鈕：完美復刻截圖右下角黑色「💬 Chat」樣式 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black border border-white/20 text-white px-5 py-3 rounded-2xl flex items-center space-x-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-neutral-900 hover:border-white/40 active:scale-95 transition-all duration-200"
      >
        {isOpen ? (
          <span className="font-bold tracking-wider text-sm">Close</span>
        ) : (
          <>
            {/* 復刻那顆對話氣泡圖標 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="font-bold tracking-wider text-sm">Chat</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ChattyWidget;
