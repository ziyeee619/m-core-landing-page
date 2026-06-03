// src/components/ProductPurchase.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Zap } from "lucide-react";

const ProductPurchase = () => {
  const { t, i18n } = useTranslation();

  // 實時同步的 Shopify 價格狀態
  const [currentPrice, setCurrentPrice] = useState("RM 288.00");
  const [compareAtPrice, setCompareAtPrice] = useState("RM 300.00");
  const [savedAmount, setSavedAmount] = useState(12);

  // 母容器
  const wrapperRef = useRef(null);

  // 🚀 動態提取 JSON 中的特點清單
  const productFeatures = [
    t("purchase.features.f1"),
    t("purchase.features.f2"),
    t("purchase.features.f3"),
  ];

  useEffect(() => {
    let isMounted = true;
    const scriptId = "shopify-buy-button-script-global";
    let shopifyScript = document.getElementById(scriptId);

    // 動態創造子容器
    const freshContainer = document.createElement("div");
    if (wrapperRef.current) {
      wrapperRef.current.appendChild(freshContainer);
    }

    // Promise 等待機制的 SDK 載入器
    const loadShopifySDK = () => {
      return new Promise((resolve) => {
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
          resolve();
          return;
        }

        let script = document.getElementById(scriptId);
        if (!script) {
          script = document.createElement("script");
          script.id = scriptId;
          script.src =
            "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
          script.async = true;
          document.body.appendChild(script);
        }

        script.addEventListener("load", resolve);
      });
    };

    // 開始執行載入與渲染
    loadShopifySDK().then(() => {
      if (!isMounted) return;

      const client = window.ShopifyBuy.buildClient({
        domain: "jmqykt-hr.myshopify.com",
        storefrontAccessToken: "92e8ca5ffcfbc79de6d09c5d0e61ba23",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        if (!isMounted) return;

        ui.createComponent("product", {
          id: "8026447380582",
          node: freshContainer,
          moneyFormat: "RM%7B%7Bamount%7D%7D",
          options: {
            product: {
              iframe: true,
              text: {
                button: t("purchase.addCartBtn"),
              },
              contents: {
                img: false,
                title: false,
                price: false,
                variantTitle: true,
                quantity: true,
                quantityIncrement: true,
                quantityDecrement: true,
                button: true,
              },
              styles: {
                product: {
                  width: "100%",
                  "max-width": "100%",
                },
                button: {
                  "background-color": "#ffffff !important",
                  color: "#000000 !important",
                  "font-size": "12px !important",
                  "font-weight": "900 !important",
                  "letter-spacing": "0.2em !important",
                  "padding-top": "16px !important",
                  "padding-bottom": "16px !important",
                  "border-radius": "12px !important",
                  "text-transform": "uppercase !important",
                  width: "100% !important",
                },
                select: {
                  "background-color": "#121212 !important",
                  color: "#ffffff !important",
                  border: "1px solid rgba(255,255,255,0.08) !important",
                  "border-radius": "12px !important",
                  padding: "12px 16px !important",
                },
                quantityInput: {
                  "background-color": "#121212 !important",
                  color: "#ffffff !important",
                  "border-top": "1px solid rgba(255,255,255,0.08) !important",
                  "border-bottom":
                    "1px solid rgba(255,255,255,0.08) !important",
                  "border-left": "none !important",
                  "border-right": "none !important",
                  height: "48px !important",
                  width: "50px !important",
                  "text-align": "center !important",
                  "font-size": "14px !important",
                  "font-weight": "700 !important",
                },
                quantityButton: {
                  "background-color": "#121212 !important",
                  color: "#ffffff !important",
                  border: "1px solid rgba(255,255,255,0.08) !important",
                  "border-radius": "12px !important",
                  height: "48px !important",
                  width: "44px !important",
                  "font-size": "14px !important",
                  transition: "all 0.2s ease",
                  ":hover": {
                    "background-color": "rgba(255,255,255,0.05) !important",
                  },
                },
                quantity: {
                  "margin-bottom": "20px !important",
                  display: "flex !important",
                  "align-items": "center !important",
                },
                variantTitle: {
                  color: "#86868b !important",
                  "font-size": "11px !important",
                  "font-weight": "800 !important",
                  "text-transform": "uppercase !important",
                  "margin-bottom": "8px !important",
                },
                quantityLabel: {
                  color: "#86868b !important",
                  "font-size": "11px !important",
                  "font-weight": "800 !important",
                  "text-transform": "uppercase !important",
                  "margin-bottom": "8px !important",
                },
              },
            },
            cart: {
              iframe: true,
              // 🚀 讓 Shopify 的購物車介面也能完美跟隨 i18n 語系切換
              title: t("purchase.cartTitle"),
              buttonText: t("purchase.checkoutBtn"),
            },
          },
          success: (component) => {
            if (!isMounted) return;
            const selectedVariant = component.model.selectedVariant;
            if (selectedVariant) {
              const price = parseFloat(selectedVariant.price.amount);
              setCurrentPrice(`RM ${price.toFixed(2)}`);
              if (selectedVariant.compareAtPrice) {
                const comparePrice = parseFloat(
                  selectedVariant.compareAtPrice.amount,
                );
                setCompareAtPrice(`RM ${comparePrice.toFixed(2)}`);
                setSavedAmount(Math.round(comparePrice - price));
              } else {
                setCompareAtPrice(null);
              }
            }
          },
        });
      });
    });

    return () => {
      isMounted = false;
      if (wrapperRef.current && wrapperRef.current.contains(freshContainer)) {
        wrapperRef.current.removeChild(freshContainer);
      }
    };
    // 🚀 核心正義：加入 i18n.language，確保切換語言時 Shopify 腳本會被銷毀並重新掛載翻譯
  }, [t, i18n.language]);

  return (
    <section className="container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      {/* 左側產品主視覺 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-32 flex flex-col items-center justify-center bg-neutral-900/40 border border-white/5 rounded-3xl p-8 aspect-square backdrop-blur-sm"
      >
        <div className="w-4/5 h-4/5 bg-gradient-to-tr from-neutral-800 to-neutral-700 rounded-2xl shadow-2xl flex items-center justify-center italic text-neutral-500 font-bold tracking-widest text-center">
          <img
            src="/m-core-liboost-supplement-bottle.webp"
            alt="M-CORE Male Energy Supplement - Premium Liboost Tonkat Ali Formula by ST Empires Malaysia"
          />
        </div>
      </motion.div>

      {/* 右側購買面板 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col space-y-8"
      >
        <div>
          <span className="text-xs font-black tracking-[0.3em] text-[#86868b] uppercase block mb-2">
            {t("purchase.tagline")}
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold italic tracking-wider uppercase">
            {t("purchase.name")}
          </h1>
        </div>

        {/* 實時同步價格區間 */}
        <div className="border-t border-b border-white/5 py-6 flex items-baseline space-x-4">
          <span className="text-3xl font-black tracking-widest text-white">
            {currentPrice}
          </span>
          {compareAtPrice && (
            <span className="text-sm font-medium tracking-wide text-neutral-500 line-through decoration-neutral-600">
              {compareAtPrice}
            </span>
          )}
          {compareAtPrice && savedAmount > 0 && (
            <span className="text-[10px] font-bold tracking-widest text-amber-500 border border-amber-500/20 bg-amber-500/5 px-2 py-1 rounded-md uppercase">
              {/* 🚀 動態載入省下金額 */}
              {t("purchase.save", { amount: savedAmount })}
            </span>
          )}
        </div>
        <span className="text-xs text-[#86868b] block -mt-4">
          {t("purchase.shipping")}
        </span>

        {/* 產品特點清單 */}
        <ul className="space-y-3 text-sm text-neutral-400 font-medium tracking-wide">
          {productFeatures.map((feature, i) => (
            <li key={i} className="flex items-center space-x-3">
              <Zap size={14} className="text-amber-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Shopify 購買核心注入點 */}
        <div className="pt-4 border-t border-white/5">
          <div ref={wrapperRef}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductPurchase;
