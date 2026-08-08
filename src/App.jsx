// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useScroll } from "framer-motion";

// 引入全站共用組件
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

// 引入分頁組件
import Home from "./pages/Home";
import Product from "./pages/Product";
import Science from "./pages/Science.jsx";
import Support from "./pages/Support";
import Shop from "./pages/Shop";

// 🛠️ 這些是金流審查必備的政策頁面 Import
import TermsOfService from "./pages/TermsOfService";
import ShippingPolicy from "./pages/ShippingPolicy"; // 新增
import RefundPolicy from "./pages/RefundPolicy"; // 新增
import PrivacyPolicy from "./pages/PrivacyPolicy"; // 新增

//  引入全局控制組件
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import ScrollToTop from "./components/ScrollToTop";
import ContactFloatingButton from "./components/STAssistantWidget.jsx";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <SEO />
      <ScrollToTopOnNavigate />
      <ScrollToTop />

      <div className="relative min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home scrollYProgress={scrollYProgress} />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/science" element={<Science />} />
            <Route path="/support" element={<Support />} />

            {/* 🛠️ 這裡加上所有的政策路由 */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <ContactFloatingButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
