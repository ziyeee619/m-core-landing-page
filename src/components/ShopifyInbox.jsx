// src/components/ShopifyInbox.jsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ShopifyInbox = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      console.log(
        "💡 M-CORE Dev Hint: Currently in localhost environment. Shopify Inbox 401 error is normal.",
      );
    }

    // 1. 🚀【終極黑魔法】動態監聽 Shopify 購物車是否被打開
    const handleCartVisibility = () => {
      // 抓取 Shopify 購物車滑出時會產生的外層 iframe 容器（通常帶有特定 class 或屬性）
      // Shopify Buy Button SDK 的購物車容器 class 通常叫 .shopify-buy-frame--cart
      const cartFrame = document.querySelector(".shopify-buy-frame--cart");

      // 抓取 Shopify Inbox 的聊天按鈕外層節點
      const chatWidget =
        document.getElementById("shopify-chat") ||
        document.querySelector(".shopify-chat-container") ||
        document.querySelector("iframe#dummy-chat-button-iframe");

      if (chatWidget && cartFrame) {
        // 檢查購物車目前是不是處於「打開/滑出」的狀態
        // Shopify 購物車打開時，容器會被加上 .is-active 或 .is-visible 等 class
        const isCartOpen =
          cartFrame.classList.contains("is-active") ||
          cartFrame.classList.contains("is-visible") ||
          (window.getComputedStyle(cartFrame).display !== "none" &&
            window.getComputedStyle(cartFrame).visibility !== "hidden" &&
            parseInt(window.getComputedStyle(cartFrame).width, 10) > 0);

        if (isCartOpen) {
          // 🛒 購物車打開了 -> 強制把聊天按鈕藏起來，絕對不會再穿透！
          chatWidget.style.setProperty("display", "none", "important");
          chatWidget.style.setProperty("visibility", "hidden", "important");
          chatWidget.style.setProperty("opacity", "0", "important");
        } else {
          // 閉合狀態 -> 讓聊天按鈕恢復顯示
          chatWidget.style.display = "";
          chatWidget.style.visibility = "";
          chatWidget.style.opacity = "";
        }
      }
    };

    // 2. 建立 DOM 監聽器 (MutationObserver)，只要網頁節點有變動（例如購物車滑出來），就觸發檢查
    const observer = new MutationObserver((mutations) => {
      handleCartVisibility();
    });

    // 開始監聽整個 <body> 的子節點與屬性變化
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    // 3. 載入原有的 Shopify Inbox 官方腳本
    const scriptId = "shopify-inbox-script-global";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://cdn.shopify.com/shopifycloud/shopify_chat/storefront/shopifyChatV1.js?api_env=production&shop=jmqykt-hr.myshopify.com";
      script.async = true;
      document.body.appendChild(script);
    }

    // 清理機制：當元件解構時停止監聽，防止記憶體洩漏
    return () => {
      observer.disconnect();
    };
  }, [t]);

  return null;
};

export default ShopifyInbox;
