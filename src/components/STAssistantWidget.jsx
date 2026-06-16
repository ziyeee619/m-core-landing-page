// src/components/STAssistantWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const STAssistantWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // 預設歡迎語與對話紀錄
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! Welcome to ST EMPIRES. I'm your M-CORE AI Consultant. How can I assist you today? / 您好！我是您的專屬健康顧問，有什麼我可以幫您的嗎？",
    },
  ]);

  // 真人聯絡管道資料
  const contactMethods = [
    {
      name: "WhatsApp",
      href: "https://wa.me/60169404939",
      bg: "bg-[#25D366]",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ste_wellness?igsh=MXQ1NG9kZXhocWU5dQ==",
      bg: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1LjYnQ5sQx/?mibextid=wwXIfr",
      bg: "bg-[#1877F2]",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:stempires9399@gmail.com",
      bg: "bg-neutral-700",
      icon: <Mail size={14} strokeWidth={2.5} />,
    },
  ];

  // 自動滾動到最新訊息
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isLoading]);

  // 🚀 預留給後續串接 AI 的發送函式
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // 模擬 AI 思考延遲 (後續這裡替換成 fetch Vercel API 的代碼)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "This is a demo response. AI backend is ready to be connected! / 系統已收到您的訊息，AI 模組準備就緒後即可回覆。",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 lg:right-10 z-[9999] flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[360px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[75vh] bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative"
          >
            {/* ================= 頂部 Header ================= */}
            <div className="bg-[#161616] border-b border-white/5 p-4 flex justify-between items-center z-10 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-white to-neutral-400 text-black rounded-full flex items-center justify-center font-black text-xs shadow-inner">
                  ST
                </div>
                <div>
                  <h4 className="text-white font-bold text-[13px] tracking-widest italic uppercase leading-tight">
                    ST EMPIRES
                  </h4>
                  <p className="text-[#86868b] text-[10px] flex items-center mt-0.5 tracking-wider font-medium">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse shadow-[0_0_5px_#22c55e]"></span>
                    AI Concierge
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* ================= 快捷聯絡列 (整合真人客服) ================= */}
            <div className="bg-[#0a0a0a] px-4 py-3 border-b border-white/5 flex items-center justify-between z-10">
              <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
                Connect human:
              </span>
              <div className="flex space-x-2">
                {contactMethods.map((method) => (
                  <a
                    key={method.name}
                    href={method.href}
                    target={method.name !== "Email" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={method.name}
                    className={`w-7 h-7 ${method.bg} text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                  >
                    {method.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ================= 對話紀錄區 ================= */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-white text-black rounded-br-sm font-semibold shadow-md"
                        : "bg-[#1f1f1f] text-neutral-200 rounded-bl-sm border border-white/5 shadow-inner"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* 打字指示器 (Loading 狀態) */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#1f1f1f] border border-white/5 p-4 rounded-2xl rounded-bl-sm flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
                    <span
                      className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    ></span>
                    <span
                      className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    ></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* ================= 輸入區 ================= */}
            <div className="p-3 bg-[#161616] border-t border-white/5">
              <div className="flex items-center bg-[#050505] border border-white/10 rounded-xl overflow-hidden px-2 shadow-inner focus-within:border-white/30 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent text-white text-sm py-3.5 px-3 outline-none placeholder:text-neutral-600 font-medium"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 mr-1 text-black bg-white rounded-lg hover:bg-neutral-200 disabled:opacity-50 disabled:bg-neutral-800 disabled:text-neutral-500 transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[9px] text-neutral-600 font-mono tracking-widest uppercase">
                  Powered by ST Empires AI Core
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= 懸浮主按鈕 ================= */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.2)] cursor-pointer relative z-50 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare size={22} strokeWidth={2} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full shadow-[0_0_8px_#22c55e]"></span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default STAssistantWidget;
