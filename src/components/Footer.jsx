import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 lg:py-32 bg-black text-center border-t border-white/5 font-sans px-6">
      <div className="container mx-auto font-sans">
        <div className="text-2xl lg:text-3xl font-black tracking-[0.3em] text-white mb-10 lg:mb-12 uppercase italic font-sans">
          ST{" "}
          <span className="text-[#86868b] font-light italic font-sans uppercase">
            Empires
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-16 text-[#86868b] font-bold uppercase font-sans">
          <a
            href="https://www.instagram.com/ste_wellness?igsh=MXQ1NG9kZXhocWU5dQ=="
            className="flex items-center space-x-3 hover:text-white transition-colors group font-sans"
          >
            {/* --- 穩定的 Instagram SVG 圖標 --- */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:rotate-12 transition-transform"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="text-xs font-black tracking-[0.2em] font-sans">
              @stempires_official
            </span>
          </a>
          <a
            href="mailto:stempires9399@gmail.com"
            className="flex items-center space-x-3 hover:text-white transition-colors group font-sans"
          >
            <Mail
              size={20}
              className="group-hover:-translate-y-1 transition-transform font-sans"
            />
            <span className="text-xs font-black tracking-[0.2em] font-sans">
              stempires9399@gmail.com
            </span>
          </a>
        </div>

        <p className="text-[9px] lg:text-[10px] tracking-[0.4em] lg:tracking-[0.6em] text-[#86868b] uppercase font-black leading-relaxed font-sans">
          © 2026 ST EMPIRES MALAYSIA. <br className="sm:hidden" /> ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
