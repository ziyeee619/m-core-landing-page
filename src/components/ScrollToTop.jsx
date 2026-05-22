import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
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
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[150] bg-white/10 backdrop-blur-lg border border-white/20 text-white p-4 rounded-full shadow-2xl hover:bg-white hover:text-black transition-all duration-300 group font-sans"
        >
          <ChevronUp
            size={24}
            className="group-hover:-translate-y-1 transition-transform duration-300 font-sans"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
