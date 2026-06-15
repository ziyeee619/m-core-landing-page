// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useScroll } from "framer-motion";

// 引入全站共用組件
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 引入分頁組件
import Home from "./pages/Home";
import Product from "./pages/Product";
import Science from "./pages/Science.jsx";
import Support from "./pages/Support";
import Shop from "./pages/Shop";

//  引入全局控制組件
import ShopifyInbox from "./components/ShopifyInbox"; //  引入動態客服元件
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate"; // 1. 引入置頂器
import ScrollToTop from "./components/ScrollToTop"; // 1. 迎回全站返回頂部按鈕
import ChattyWidget from "./components/ChattyWidget";
const App = () => {
  // 保持全局滾動監聽，並傳遞給 Home 使用
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <ScrollToTopOnNavigate />
      <ScrollToTop />

      <div className="relative min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
        {/* 全站共用導航欄 */}
        <Navbar />

        {/* 主要頁面路由切換中心 */}
        <main className="flex-grow">
          <Routes>
            {/* 首頁 */}
            <Route
              path="/"
              element={<Home scrollYProgress={scrollYProgress} />}
            />

            {/* 旗艦單品頁 */}
            <Route path="/product" element={<Product />} />

            {/* 商城頁 */}
            <Route path="/shop" element={<Shop />} />

            {/* 科學專頁 */}
            <Route path="/science" element={<Science />} />

            {/* 售後支援專頁 */}
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>

        {/* 🚀 正確位置：移到 Routes 外面！
            這樣做可以確保它不受路由干擾，完美在全站右下角穩定初始化 */}
        <ChattyWidget />

        {/* 全站共用頁尾 */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
