import { Link } from "react-router-dom";
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

        {/* --- 社群與聯絡方式 --- */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16 text-[#86868b] font-bold uppercase font-sans">
          {/* 1. Instagram */}
          <a
            href="https://www.instagram.com/ste_wellness?igsh=MXQ1NG9kZXhocWU5dQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-white transition-colors group font-sans"
          >
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

          {/* 2. Facebook */}
          <a
            href="https://www.facebook.com/share/1LjYnQ5sQx/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-white transition-colors group font-sans"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-y-1 transition-transform"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span className="text-xs font-black tracking-[0.2em] font-sans">
              ST Empires
            </span>
          </a>

          {/* 3. WhatsApp */}
          <a
            href="https://wa.me/60169404939"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-white transition-colors group font-sans"
          >
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-xs font-black tracking-[0.2em] font-sans">
              WhatsApp
            </span>
          </a>

          {/* 4. Email */}
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

        {/* --- 🚀 更新：金流審查必備的 5 個政策連結區塊 --- */}
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-[#86868b] font-sans px-4">
            <Link
              to="/terms"
              className="hover:text-white transition-colors uppercase tracking-wider"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="hover:text-white transition-colors uppercase tracking-wider"
            >
              Privacy Policy
            </Link>
            <Link
              to="/shipping"
              className="hover:text-white transition-colors uppercase tracking-wider"
            >
              Shipping Policy
            </Link>
            <Link
              to="/refund"
              className="hover:text-white transition-colors uppercase tracking-wider"
            >
              Refund Policy
            </Link>
            <Link
              to="/support"
              className="hover:text-white transition-colors uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>

          {/* 版權與商標聲明 */}
          <div className="space-y-4">
            <p className="text-[8px] lg:text-[9px] tracking-[0.15em] text-[#86868b]/70 uppercase font-semibold font-sans">
              Liboost™️is a registered trademark of Pharmactive Biotech
              Products, S.L.U.
            </p>
            <p className="text-[9px] lg:text-[10px] tracking-[0.4em] lg:tracking-[0.6em] text-[#86868b] uppercase font-black leading-relaxed font-sans">
              © 2026 ST EMPIRES MALAYSIA. <br className="sm:hidden" /> ALL
              RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
