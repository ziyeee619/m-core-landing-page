// src/components/ScrollToTopOnNavigate.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🚀 核心正義：只要偵測到路由路徑改變，無條件將瀏覽器滾動條歸零置頂
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 此元件不渲染任何 UI 節點，純負責生命週期邏輯控制
};

export default ScrollToTopOnNavigate;
