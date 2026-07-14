import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 🚀 新增：本地開發伺服器的轉發設定 (Proxy)
  server: {
    proxy: {
      // 1. 轉發你原本在 vercel.json 裡寫的 Shopify Tracking 外掛
      "/apps/chatty-tracking": {
        target: "https://jmqykt-hr.myshopify.com",
        changeOrigin: true,
        secure: false,
      },

      // 2. 轉發你的 AI 功能路由 (例如 /api 或是你 AI 組件打的後端網址)
      // 如果你的 AI 是走 /api/... 開頭的路由，請加上這段：
      "/api": {
        target: "https://m-core-project.vercel.app", // 或是你實際 AI 後端/雲端函數的網址
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
