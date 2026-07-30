import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap"; // 🚀 1. 引入 sitemap 套件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 🚀 2. 加入 Sitemap 自動生成設定
    Sitemap({
      hostname: "https://www.stempires.com.my", // 你的正式網域
      // 列出所有你網站的頁面路徑 (SPA 請手動列出所有可存取的路由)
      dynamicRoutes: [
        "/",
        "/privacy-policy",
        "/terms-of-service",
        // 如果有其他路由/頁面可以繼續往後加
      ],
    }),
  ],

  // 🚀 本地開發伺服器的轉發設定 (Proxy) — 完全保留不變
  server: {
    proxy: {
      // 1. 轉發你原本在 vercel.json 裡寫的 Shopify Tracking 外掛
      "/apps/chatty-tracking": {
        target: "https://jmqykt-hr.myshopify.com",
        changeOrigin: true,
        secure: false,
      },

      // 2. 轉發你的 AI 功能路由 (例如 /api 或是你 AI 組件打的後端網址)
      "/api": {
        target: "https://m-core-project.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
