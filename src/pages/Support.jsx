// src/pages/Support.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HelpCircle, ChevronDown, ShieldCheck, Beaker } from "lucide-react";

const Support = () => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);

  // 🚀 动态抽离的 FAQ 阵列：利用 Array.from 自动循环读取 1~20 题
  const faqs = Array.from({ length: 20 }, (_, i) => ({
    question: t(`support.faq${i + 1}Q`),
    answer: t(`support.faq${i + 1}A`),
  }));

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden min-h-screen pt-32 pb-20 lg:pt-40">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl flex flex-col space-y-12">
        {/* 顶部标头 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-2">
            <HelpCircle size={14} className="text-amber-500" />
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-300 uppercase">
              {t("support.badge")}
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black italic tracking-wider uppercase leading-tight">
            {t("support.title1")} <br />
            <span className="text-[#86868b] font-light">
              {t("support.title2")}
            </span>
          </h1>
          <p className="text-xs lg:text-sm text-neutral-500 max-w-2xl mx-auto font-medium tracking-wide leading-relaxed">
            {t("support.desc")}
          </p>
        </motion.div>

        {/* 信任标章小展示区 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
          <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl flex items-start space-x-4">
            <Beaker className="text-amber-500 shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                {t("support.trust1Title")}
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">
                {t("support.trust1Desc")}
              </p>
            </div>
          </div>
          <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl flex items-start space-x-4">
            <ShieldCheck className="text-amber-500 shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1 ">
                {t("support.trust2Title")}
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">
                {t("support.trust2Desc")}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ 横向撑满折叠选单列表 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2 pt-4 "
        >
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="border-b border-white/5 pb-4 transition-all duration-300 "
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left py-4 group cursor-pointer"
                >
                  <span
                    className={`text-sm lg:text-base font-bold tracking-wide transition-colors duration-300 ${isOpen ? "text-amber-500" : "text-neutral-200 group-hover:text-white"}`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-neutral-500 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-amber-500" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs lg:text-sm text-neutral-400 leading-relaxed pt-2 pb-2 font-medium tracking-wide max-w-3xl whitespace-pre-wrap">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* 底部联络资讯导引 */}
        <div className="text-center pt-8 border-t border-white/5 text-[11px] lg:text-xs text-neutral-500 font-medium tracking-wide flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
          <span>{t("support.footerHint")}</span>
          <div className="flex space-x-6 text-neutral-400">
            <a
              href="mailto:stempires9399@gmail.com"
              className="hover:text-white transition-colors"
            >
              stempires9399@gmail.com
            </a>
            <span>{t("support.footerHours")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
