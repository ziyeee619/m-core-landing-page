import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Dna,
  Flame,
  Battery,
  Target,
  Wind,
  ArrowRight,
  Info,
  FlaskConical,
  Activity,
  Camera,
  Mail,
  Clock,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";

// --- 進階動態組件 (已設為重複觸發：once: false) ---
const Reveal = ({
  children,
  delay = 0,
  x = 0,
  y = 40,
  scale = 0.98,
  rotate = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y, scale, rotate }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

// --- 導航欄 ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "品牌故事", href: "#vision" },
    { name: "7R 系統", href: "#7r" },
    { name: "核心成分", href: "#ingredients" },
    { name: "臨床數據", href: "#science" },
    { name: "使用指南", href: "#usage" },
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
        <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm shadow-lg">
              <span className="text-black font-black text-xs uppercase font-sans">
                MC
              </span>
            </div>
            <div className="text-xl font-bold tracking-[0.2em] text-white uppercase italic font-sans">
              ST{" "}
              <span className="text-[#86868b] font-light uppercase font-sans">
                Empires
              </span>
            </div>
          </div>

          <div className="hidden lg:flex space-x-12 text-[14px] tracking-[0.3em] uppercase font-bold text-[#86868b] font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
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
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black italic text-white uppercase tracking-widest font-sans"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  // --- 願景區塊動畫邏輯 ---
  const visionRef = useRef(null);
  const { scrollYProgress: visionScroll } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"],
  });

  const visionImageScale = useTransform(visionScroll, [0.1, 0.5], [1.15, 1]);
  const visionImageOpacity = useTransform(visionScroll, [0, 0.4], [0.1, 0.4]);

  // --- 優化後的文案明顯動畫 (加強了 Scale, Blur 與位移感) ---
  const visionTextOpacity = useTransform(
    visionScroll,
    [0.15, 0.35, 0.65, 0.85],
    [0, 1, 1, 0],
  );
  const visionTextY = useTransform(visionScroll, [0.15, 0.4], [150, 0]);
  const visionTextScale = useTransform(visionScroll, [0.15, 0.4], [0.85, 1]);
  const visionTextBlur = useTransform(
    visionScroll,
    [0.15, 0.35],
    ["blur(20px)", "blur(0px)"],
  );

  // 返回頂部邏輯
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
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />

      {/* --- Section 1: Hero --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-20 bg-gradient-to-br from-[#050505] via-[#1a1a1a] to-[#050505] overflow-hidden px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10"
        >
          <div className="text-center lg:text-left order-2 lg:order-1 font-sans">
            <Reveal y={30} delay={0.1}>
              <div className="inline-block px-4 py-1 border border-white/10 rounded-full mb-6 lg:mb-8 bg-white/5 backdrop-blur-sm">
                <span className="text-[8px] lg:text-[10px] tracking-[0.4em] lg:tracking-[0.5em] text-[#86868b] uppercase font-bold font-sans">
                  Titanium Edition ・ 2026
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.85] lg:leading-[0.8] mb-6 lg:mb-10 tracking-tighter italic drop-shadow-2xl text-white uppercase font-sans">
                M-CORE
              </h1>
              <p className="text-[#86868b] text-base md:text-lg lg:text-2xl max-w-lg leading-relaxed mb-8 lg:mb-12 mx-auto lg:mx-0 font-light italic px-4 lg:px-0 font-sans">
                「極致銀灰，男人的核心動能。」
                <br className="hidden sm:block" />
                打破疲勞邊界，結合西班牙專利{" "}
                <span className="text-white font-black border-b border-white/40 font-sans">
                  Liboost™
                </span>{" "}
                科技。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 px-4 lg:px-0 font-sans">
                <button
                  onClick={() =>
                    document
                      .getElementById("vision")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full sm:w-auto bg-white text-black px-10 py-5 lg:px-12 lg:py-6 text-[11px] lg:text-xs font-black tracking-[0.4em] uppercase hover:bg-gray-200 transition-all flex items-center justify-center group shadow-2xl font-sans"
                >
                  啟動巔峰{" "}
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
          <div className="relative order-1 lg:order-2">
            <Reveal scale={0.9} rotate={-3} delay={0.2}>
              <div className="relative z-10 group px-10 lg:px-0 text-center">
                <img
                  src="/m-core-liboost-supplement-bottle.jpg"
                  alt="M-CORE 男性活力補充錠 - 西班牙專利 Liboost 透納葉配方"
                  className="w-full max-w-[300px] lg:max-w-lg mx-auto drop-shadow-[0_0_80px_rgba(255,255,255,0.05)] group-hover:scale-105 transition-transform duration-1000 font-sans"
                />
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      {/* --- Section 2: 產品 Vision Banner (加強版動畫) --- */}
      <section
        id="vision"
        ref={visionRef}
        className="relative h-[100vh] bg-[#0a0a0a] font-sans"
      >
        <div className="sticky top-0 h-[100vh] w-full flex items-center justify-center overflow-hidden">
          {/* 背景視差產品大圖 */}
          <motion.div
            style={{ scale: visionImageScale, opacity: visionImageOpacity }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/assets/m-core-brand-vision-lifestyle.jpg"
              alt="M-CORE 品牌願景：專為現代男士打造的核心動能與精力補充"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1000";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0d0d0d]"></div>
          </motion.div>

          {/* 強化後的文案展示區塊 */}
          <motion.div
            style={{
              opacity: visionTextOpacity,
              y: visionTextY,
              scale: visionTextScale,
              filter: visionTextBlur,
            }}
            className="relative z-10 text-center px-6 max-w-5xl font-sans"
          >
            <div className="mb-12">
              <span className="text-[10px] lg:text-xs tracking-[1em] uppercase text-[#86868b] font-black block mb-6 font-sans">
                Brand Vision
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight text-white tracking-tighter mb-8 font-sans">
                當生活節奏失控，
                <br />
                <span className="text-[#86868b] italic underline decoration-white/10 underline-offset-16 uppercase font-sans">
                  精力的消耗
                </span>{" "}
                往往快過您的想像。
              </h2>
            </div>
            <div>
              <p className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight text-white tracking-tighter font-sans">
                我們拒絕平庸的補充，
                <br />
                我們只為{" "}
                <span className="text-black bg-white px-6 py-1 lg:px-8 lg:py-2 inline-block transform -rotate-2 shadow-2xl uppercase font-sans">
                  卓越
                </span>{" "}
                而生。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 3: 7R 活力系統 --- */}
      <section id="7r" className="py-40 lg:py-52 bg-[#0d0d0d] font-sans">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-40 text-center lg:text-left font-sans">
            <Reveal x={-40}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 lg:mb-10 italic uppercase leading-none text-white font-sans">
                M-CORE 7R
                <br />
                System
              </h2>
              <p className="text-[#86868b] text-xl lg:text-2xl font-light leading-relaxed max-w-md mx-auto lg:mx-0 italic font-sans">
                全方位男性活力配方：
                <br />
                <span className="text-white font-bold uppercase font-sans">
                  在巔峰時保養，在下坡時恢復。
                </span>
              </p>
            </Reveal>
            <Reveal x={40} delay={0.1}>
              <div className="p-8 lg:p-12 border-l-4 border-white bg-[#151515] shadow-2xl rounded-tr-[50px] lg:rounded-tr-[80px] border-white/5 mx-auto lg:mx-0 font-sans">
                <Activity className="w-10 h-10 lg:w-12 lg:h-12 mb-6 lg:mb-8 text-white mx-auto lg:mx-0 font-sans" />
                <h4 className="text-2xl lg:text-3xl font-black mb-4 lg:mb-6 italic uppercase tracking-tighter text-white font-sans">
                  Beyond Energy
                </h4>
                <p className="text-base lg:text-lg text-[#86868b] leading-relaxed font-medium italic font-sans">
                  拒絕短暫興奮，從細胞底層提供持久穩定動力。
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
            {[
              { id: "01", r: "Restore", sub: "能量回血", icon: <Battery /> },
              { id: "02", r: "Relieve", sub: "釋放壓力", icon: <Wind /> },
              { id: "03", r: "Rebuild", sub: "重建健康", icon: <Dna /> },
              { id: "04", r: "Reignite", sub: "重燃巔峰", icon: <Flame /> },
              { id: "05", r: "Revitalize", sub: "煥活持久", icon: <Zap /> },
              {
                id: "06",
                r: "Reinforce",
                sub: "免疫加固",
                icon: <ShieldCheck />,
              },
              { id: "07", r: "Focus", sub: "恢復專注", icon: <Target /> },
            ].map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.03} y={30}>
                <motion.div
                  whileHover={{
                    y: -8,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    transition: { duration: 0.2 },
                  }}
                  className="group p-10 lg:p-12 bg-[#1a1a1a] border border-white/5 transition-all duration-300 lg:h-87.5 flex flex-col justify-between shadow-md rounded-lg font-sans"
                >
                  <div className="flex justify-between items-start font-sans">
                    <span className="text-sm tracking-[0.5em] text-[#86868b] group-hover:text-black/20 transition-colors font-black font-sans">
                      {item.id}
                    </span>
                    <div className="group-hover:rotate-12 transition-transform text-white group-hover:text-black font-sans">
                      {React.cloneElement(item.icon, {
                        size: 32,
                        strokeWidth: 1.5,
                      })}
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 font-sans">
                    <h4 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2 italic font-sans">
                      {item.r}
                    </h4>
                    <p className="text-[#86868b] text-xs font-bold tracking-[0.3em] group-hover:text-black/60 transition-colors uppercase font-sans">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: 核心成分 --- */}
      <section
        id="ingredients"
        className="py-40 lg:py-52 bg-[#080808] font-sans"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal y={30}>
            <div className="text-center mb-24 lg:mb-32 font-sans">
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 lg:mb-8 italic uppercase text-white font-sans">
                Core Ingredients
              </h2>
              <div className="h-1 w-20 lg:w-32 bg-white mx-auto mb-8 lg:mb-10 font-sans"></div>
              <p className="text-[#86868b] max-w-2xl mx-auto text-lg lg:text-xl font-light italic font-sans">
                嚴選全球原材，經由 HPLC 驗證的高效精華。
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 mb-8 font-sans">
            <div className="lg:col-span-12 font-sans">
              <Reveal y={50}>
                <div className="relative min-h-[500px] lg:h-150 overflow-hidden group rounded-[30px] lg:rounded-[40px] shadow-2xl border border-white/5 font-sans bg-[#050505]">
                  <img
                    src="/assets/liboost-turnera-diffusa-extract-spain.png"
                    alt="西班牙專利 Liboost 透納葉提取物 - HPLC 驗證高效成分"
                    className="absolute inset-0 w-full h-full object-contain p-12 lg:p-24 transition-all duration-1000 opacity-20 group-hover:opacity-40 font-sans"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 lg:p-16 flex flex-col justify-end font-sans">
                    <div className="flex items-center space-x-4 mb-6 font-sans">
                      <span className="px-5 py-2 bg-white text-black text-[10px] font-black tracking-widest uppercase italic font-sans">
                        Spain Patent
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-6xl font-black text-white mb-6 lg:mb-8 italic uppercase tracking-tighter font-sans leading-tight">
                      Liboost™ <br className="lg:hidden" />
                      透納葉
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10 font-sans">
                      <p className="text-[#86868b] text-base lg:text-lg font-medium leading-relaxed font-light italic font-sans">
                        選用墨西哥高品質原材，西班牙精化加工。標準化黃酮含量
                        ≥1.5%。
                      </p>
                      <div className="flex space-x-8 lg:space-x-12 border-l border-white/20 pl-6 lg:pl-10 text-white font-sans">
                        <div className="text-center font-sans">
                          <div className="text-3xl lg:text-4xl font-bold italic font-sans">
                            +15.13%
                          </div>
                          <div className="text-[9px] text-[#86868b] tracking-[0.2em] uppercase mt-2 font-bold font-sans">
                            NO Release
                          </div>
                        </div>
                        <div className="text-center font-sans">
                          <div className="text-3xl lg:text-4xl font-bold italic font-sans">
                            -42.41%
                          </div>
                          <div className="text-[9px] text-[#86868b] tracking-[0.2em] uppercase mt-2 font-bold font-sans">
                            PDE-5 Inhibition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 font-sans">
            {[
              {
                title: "東革阿里",
                sub: "TONGKAT ALI",
                text: "100:1 高效力濃度提取。維護體內游離睾酮水平，提升力量與耐力。",
                img: "/assets/tongkat-ali-extract-100-1-purity.png",
              },
              {
                title: "瑪卡提取物",
                sub: "MACA EXTRACT",
                text: "源自秘魯，富含多種營養素。優化能量代謝，緩解積累疲勞。",
                img: "/assets/peruvian-maca-root-extract-energy.jpg",
              },
              {
                title: "冬蟲夏草",
                sub: "CORDYCEPS",
                text: "高原珍稀藥材。增強細胞 ATP 生成，優化氧氣利用，強化心肺表現。",
                img: "/assets/cordyceps-sinensis-atp-booster.jpg",
              },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08} y={30}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-[#151515] border border-white/5 rounded-[25px] lg:rounded-[30px] overflow-hidden shadow-lg group h-full flex flex-col font-sans"
                >
                  <div className="h-48 lg:h-64 relative overflow-hidden font-sans">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-1000 lg:grayscale lg:opacity-40 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 font-sans"
                    />
                  </div>
                  <div className="p-8 lg:p-10 flex-1 flex flex-col justify-between font-sans">
                    <div className="font-sans">
                      <h4 className="text-2xl font-black mb-2 italic uppercase tracking-tighter text-white font-sans">
                        {item.title}
                      </h4>
                      <div className="text-[10px] text-[#86868b] tracking-[0.4em] uppercase mb-6 font-bold font-sans">
                        {item.sub}
                      </div>
                      <p className="text-[#86868b] text-sm font-medium leading-relaxed font-light italic font-sans">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: 科學數據 --- */}
      <section
        id="science"
        className="py-40 lg:py-52 bg-black text-white overflow-hidden px-6 font-sans"
      >
        <div className="container mx-auto font-sans">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center font-sans">
            <Reveal x={-60}>
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-10 lg:mb-12 italic uppercase leading-[0.9] font-sans text-center lg:text-left">
                CLINICAL
                <br />
                PROVEN
              </h2>
              <div className="space-y-12 lg:space-y-16 font-sans">
                <div className="relative font-sans">
                  <div className="flex justify-between items-end mb-4 lg:mb-6 font-sans">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[#86868b] italic font-sans">
                      Sexual Desire Growth
                    </span>
                    <span className="text-4xl lg:text-6xl font-bold italic font-sans">
                      +45%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/10 overflow-hidden font-sans">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] font-sans"
                    />
                  </div>
                </div>
                <div className="relative font-sans">
                  <div className="flex justify-between items-end mb-4 lg:mb-6 font-sans">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[#86868b] italic font-sans">
                      IIEF Function Index
                    </span>
                    <span className="text-4xl lg:text-6xl font-bold italic font-sans">
                      +40%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/10 overflow-hidden font-sans">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 1.5,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] font-sans"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal x={60} delay={0.2}>
              <div className="p-8 lg:p-16 bg-[#0a0a0a] border border-white/5 rounded-[30px] lg:rounded-[40px] shadow-inner font-sans">
                <div className="flex items-center space-x-6 mb-10 lg:mb-12 font-sans">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white text-black flex items-center justify-center rounded-2xl shadow-2xl font-sans">
                    <FlaskConical size={28} />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-xl lg:text-2xl font-black uppercase tracking-widest italic leading-none font-sans">
                      機制證明
                    </h4>
                    <p className="text-[9px] lg:text-[10px] text-[#86868b] tracking-[0.4em] lg:tracking-[0.5em] mt-2 uppercase font-bold font-sans">
                      Evidence of Mechanism
                    </p>
                  </div>
                </div>
                <ul className="space-y-8 lg:space-y-10 font-sans">
                  {[
                    { label: "NO Release 核心機制", value: "Significant" },
                    {
                      label: "PDE-5 Inhibition 活性",
                      value: "High Efficiency",
                    },
                    { label: "Aromatase Inhibition", value: "Ideal Balance" },
                  ].map((row, i) => (
                    <li
                      key={row.label}
                      className="flex justify-between items-center border-b border-white/5 pb-6 lg:pb-8 last:border-0 last:pb-0 font-sans"
                    >
                      <span className="text-[10px] lg:text-xs font-medium text-[#86868b] uppercase tracking-widest italic font-sans">
                        {row.label}
                      </span>
                      <span className="text-xs lg:text-sm font-bold italic text-white tracking-widest uppercase font-sans">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Section 6: 使用指南 --- */}
      <section
        id="usage"
        className="py-40 lg:py-64 bg-[#050505] border-t border-white/5 overflow-hidden px-6 lg:px-8 font-sans"
      >
        <div className="container mx-auto font-sans">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center font-sans">
            <div className="space-y-12 lg:space-y-16 order-2 lg:order-1 font-sans">
              <Reveal x={-40}>
                <div className="flex items-center space-x-4 mb-6 justify-center lg:justify-start font-sans">
                  <div className="h-px w-8 lg:w-12 bg-white/20 font-sans"></div>
                  <span className="text-[9px] tracking-[0.4em] lg:text-[10px] lg:tracking-[0.6em] text-[#86868b] uppercase font-black font-sans">
                    Daily Routine
                  </span>
                </div>
                <h2 className="text-6xl lg:text-8xl font-black italic uppercase mb-8 lg:mb-10 tracking-tighter font-sans text-center lg:text-left">
                  Usage <br />
                  <span className="text-gray-600">Guide</span>
                </h2>
                <div className="space-y-10 font-sans">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-0 lg:space-x-8 group font-sans">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center shrink-0 font-sans">
                      <Clock className="text-white w-6 h-6 lg:w-8 lg:h-8 font-sans" />
                    </div>
                    <div className="font-sans">
                      <h4 className="text-[#86868b] text-[10px] tracking-widest uppercase mb-2 font-bold font-sans">
                        Prescription
                      </h4>
                      <p className="text-2xl lg:text-3xl font-black text-white italic font-sans">
                        每日建議攝取{" "}
                        <span className="text-black bg-white px-4 py-1 rounded-sm not-italic shadow-[0_0_30px_rgba(255,255,255,0.2)] font-sans">
                          2 片
                        </span>
                      </p>
                      <p className="text-[#86868b] text-sm mt-4 font-light italic leading-relaxed px-4 lg:px-0 font-sans">
                        持續食用以維持核心動能的長期穩定，建議於固定時間服用。
                      </p>
                    </div>
                  </div>
                  <div className="pt-8 lg:pt-10 border-t border-white/5 grid grid-cols-2 gap-3 lg:gap-4 font-sans">
                    {["HALAL", "HACCP", "ISO 22000", "MeSTI"].map((cert) => (
                      <div
                        key={cert}
                        className="px-4 py-3 lg:px-6 lg:py-4 bg-[#111] border border-white/5 rounded-xl flex flex-col items-center justify-center hover:border-white/10 transition-colors font-sans"
                      >
                        <span className="text-[10px] lg:text-xs font-black tracking-[0.2em] lg:tracking-[0.3em] text-white font-sans">
                          {cert}
                        </span>
                        <div className="h-0.5 w-3 bg-gray-800 mt-2 font-sans"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="relative group order-1 lg:order-2 font-sans">
              <Reveal scale={0.9} delay={0.2}>
                <div className="relative rounded-[30px] lg:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl font-sans">
                  <img
                    src="/assets/m-core-premium-packaging-60-tablets.jpg"
                    alt="M-CORE 尊榮版 60 片裝 - 30 天男士健康活力週期方案"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 font-sans"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 lg:p-16 flex flex-col justify-end font-sans">
                    <h3 className="text-3xl lg:text-5xl font-black italic text-white uppercase font-sans tracking-tighter leading-none mb-4 lg:mb-6">
                      Premium <br /> Package
                    </h3>
                    <p className="text-[#86868b] max-w-xs text-xs lg:text-sm font-light italic leading-relaxed font-sans">
                      內含 60 片裝，專為現代精英男性的 30 天活力週期打造。
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
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
              <Camera
                size={20}
                className="group-hover:rotate-12 transition-transform font-sans"
              />
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

      {/* --- 返回頂部按鈕 --- */}
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
    </div>
  );
};

export default App;
