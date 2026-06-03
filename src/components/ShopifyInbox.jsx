// src/components/ShopifyInbox.jsx
import { useEffect } from "react";

const ShopifyInbox = () => {
  useEffect(() => {
    // 如果是在本地開發環境 (localhost)，Shopify 必定會噴 401 錯誤並顯示技術限制
    // 提示開發者這是正常現象，不需要慌張
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      console.log(
        "💡 M-CORE 提示：目前處於 localhost 環境，Shopify Inbox 觸發安全網域限制 (401) 為正常現象。部署至正式網域後即可正常開啟對話。",
      );
    }

    const scriptId = "shopify-inbox-script-global";
    let script = document.getElementById(scriptId);

    // 🚀 頂級安全加載機制：確保全站生命週期中，不管怎麼切換路由，永遠只會有一份腳本活著
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://cdn.shopify.com/shopifycloud/shopify_chat/storefront/shopifyChatV1.js?api_env=production&shop=jmqykt-hr.myshopify.com";
      script.async = true;
      document.body.appendChild(script);
    }

    // 清理機制 (Cleanup)：當元件完全被銷毀時（通常不需要，因為我們掛在 App.jsx 最外層）
    return () => {
      // 保持全站單一實例存活
    };
  }, []);

  return null; // 純邏輯腳本元件，不破壞全站任何 CSS 佈局
};

export default ShopifyInbox;
