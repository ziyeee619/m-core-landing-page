// src/components/STAssistantWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const STAssistantWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const contactMethods = [
    // ... (你的聯絡方式陣列保持不變)
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: "user", content: input };
    const newMessages = [...messages, userMsg];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: t("assistant.errorBusy") },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: t("assistant.errorConnection") },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // ==========================================
  // 👇 新增：轉換網址為可點擊連結的函數 👇
  // ==========================================
  const renderMessageWithLinks = (text) => {
    if (!text) return "";

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            // 配合你們的黑金風格，我把連結設定為高質感的琥珀金色
            className="text-amber-500 hover:text-amber-400 hover:underline break-all font-semibold mx-1 transition-colors"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // ==========================================
  // 🚀 新增：30秒閒置自動跟進機制 (Idle Follow-up)
  // ==========================================
  useEffect(() => {
    let idleTimer;

    // 取得對話陣列的最後一則訊息
    const lastMessage = messages[messages.length - 1];

    // 判斷條件：
    // 1. 對話框要是打開的
    // 2. 必須要有對話紀錄
    // 3. 最後一句話必須是 AI (assistant) 說的，代表現在正在等客人回覆
    // 4. AI 不能正在思考中 (isLoading 必須是 false)
    const isWaitingForUser =
      isOpen && lastMessage && lastMessage.role === "assistant" && !isLoading;

    // 避免 AI 無限跳針：如果最後一句話已經是「轉接人工」的提示，就不要再重複倒數了
    const isAlreadyAsked =
      lastMessage && lastMessage.content.includes("轉接人工");

    if (isWaitingForUser && !isAlreadyAsked) {
      // 設定 30 秒 (30000 毫秒) 的計時器
      idleTimer = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "注意到您有一陣子沒回覆了，請問剛剛的說明有幫助到您嗎？\n\n如果需要更深入的個人化建議或報價，需要我直接為您轉接人工專屬顧問嗎？\n👉 點擊直接聯繫專屬顧問：https://wa.me/60169404939?text=您好%2C我想轉接人工服務",
          },
        ]);
      }, 30000);
    }

    // 🧹 核心防呆機制：
    // 只要客人一打字送出新訊息（messages 陣列改變），或者關掉對話框，
    // React 就會觸發這個 return，把計時器強制取消，這樣 AI 就不會在客人講話講到一半時突然插嘴！
    return () => clearTimeout(idleTimer);
  }, [messages, isOpen, isLoading]);
  // ==========================================
  // ==========================================

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
            {/* Header */}
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
                    {t("assistant.liveSupport")}
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

            {/* 快捷聯絡列 */}
            <div className="bg-[#0a0a0a] px-4 py-3 border-b border-white/5 flex items-center justify-between z-10">
              <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
                {t("assistant.connect")}
              </span>
              <div className="flex space-x-2">
                {contactMethods.map((method) => (
                  <a
                    key={method.name}
                    href={method.href}
                    target={method.name !== "Email" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`w-7 h-7 ${method.bg} text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                  >
                    {method.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* 對話紀錄區 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent bg-[#080808]">
              {/* 預設歡迎語 */}
              <div className="flex justify-start">
                <div className="whitespace-pre-line max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed bg-[#1f1f1f] text-neutral-200 rounded-bl-sm border border-white/5 shadow-inner">
                  {t("assistant.greeting")}
                </div>
              </div>

              {/* 使用者與 AI 歷史對話 */}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    // 👇 新增：加上 whitespace-pre-line，確保 AI 的分段排版會正確顯示換行
                    className={`whitespace-pre-line max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-white text-black rounded-br-sm font-semibold shadow-md"
                        : "bg-[#1f1f1f] text-neutral-200 rounded-bl-sm border border-white/5 shadow-inner"
                    }`}
                  >
                    {/* 👇 新增：在這裡套用轉換函數，如果是 AI 說的話就處理網址 */}
                    {msg.role === "assistant"
                      ? renderMessageWithLinks(msg.content)
                      : msg.content}
                  </div>
                </div>
              ))}

              {/* AI 思考中的高奢打字動畫 */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-3.5 rounded-2xl bg-[#1f1f1f] border border-white/5 shadow-inner flex space-x-1.5 items-center rounded-bl-sm h-[44px]">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
                    <span
                      className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* 輸入區 */}
            <div className="p-3 bg-[#161616] border-t border-white/5">
              <div className="flex items-center bg-[#050505] border border-white/10 rounded-xl overflow-hidden px-2 shadow-inner focus-within:border-white/30 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={t("assistant.placeholder")}
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-white text-sm py-3.5 px-3 outline-none placeholder:text-neutral-600 font-medium disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 mr-1 text-black bg-white rounded-lg hover:bg-neutral-200 disabled:opacity-50 disabled:bg-neutral-800 disabled:text-neutral-500 transition-all cursor-pointer flex items-center justify-center"
                >
                  <Send
                    size={16}
                    className={isLoading ? "opacity-0" : "opacity-100"}
                  />
                  {isLoading && (
                    <span className="absolute w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  )}
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[9px] text-neutral-600 font-mono tracking-widest uppercase">
                  {t("assistant.securedBy")}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 懸浮主按鈕 */}
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
