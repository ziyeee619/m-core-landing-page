import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
// 🚀 1. 引入 HelmetProvider
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 🚀 2. 用 HelmetProvider 把整個 App 包起來 */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
