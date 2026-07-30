// src/components/ProductPurchase.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Zap } from "lucide-react";

const ProductPurchase = () => {
  const { t, i18n } = useTranslation();

  // 🚀 實時響應數量折扣
  const [currentPrice, setCurrentPrice] = useState("RM 288.00");
  const [compareAtPrice, setCompareAtPrice] = useState("RM 300.00");
  const [savedAmount, setSavedAmount] = useState(12);

  const wrapperRef = useRef(null);

  const productFeatures = [
    t("purchase.features.f1"),
    t("purchase.features.f2"),
    t("purchase.features.f3"),
  ];

  useEffect(() => {
    let isMounted = true;
    let modelObserverInterval;
    const scriptId = "shopify-buy-button-script-global";

    const freshContainer = document.createElement("div");
    freshContainer.className = "w-fit mx-auto lg:mx-0";

    if (wrapperRef.current) {
      wrapperRef.current.appendChild(freshContainer);
    }

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
                  "text-align": "center !important",
                  "@media (min-width: 1024px)": {
                    "text-align": "left !important",
                  },
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
                  "justify-content": "center !important",
                  "@media (min-width: 1024px)": {
                    "justify-content": "flex-start !important",
                  },
                },
                variantTitle: {
                  color: "#86868b !important",
                  "font-size": "11px !important",
                  "font-weight": "800 !important",
                  "text-transform": "uppercase !important",
                  "margin-bottom": "8px !important",
                  "text-align": "center !important",
                  "@media (min-width: 1024px)": {
                    "text-align": "left !important",
                  },
                },
                quantityLabel: {
                  color: "#86868b !important",
                  "font-size": "11px !important",
                  "font-weight": "800 !important",
                  "text-transform": "uppercase !important",
                  "margin-bottom": "8px !important",
                  "text-align": "center !important",
                  "@media (min-width: 1024px)": {
                    "text-align": "left !important",
                  },
                },
              },
            },
            cart: {
              iframe: true,
              title: t("purchase.cartTitle"),
              buttonText: t("purchase.checkoutBtn"),
              popup: true,
              contents: {
                note: true,
              },
              text: {
                noteDescription: "Tax Identify Number (Optional)",
              },
              styles: {
                cart: {
                  "z-index": "2147483647 !important",
                },
                overlay: {
                  "z-index": "2147483646 !important",
                },
              },
            },
          },
          // SDK Data Model 輪詢對齊機制
          success: (component) => {
            if (!isMounted) return;

            // 1. 核心價格演算法
            const updateUIPrice = (qty) => {
              const variant =
                component.model.selectedVariant || component.model.variants[0];
              if (!variant) return;

              // 安全解析 Shopify 價格
              const rawPrice = variant.price.amount || variant.price;
              const rawComparePrice = variant.compareAtPrice
                ? variant.compareAtPrice.amount || variant.compareAtPrice
                : "300.00";

              // 🚀 關鍵邏輯：2件以上自動變 255
              const basePrice = qty >= 2 ? 255.0 : parseFloat(rawPrice);
              const baseComparePrice = parseFloat(rawComparePrice);

              const totalCurrentPrice = basePrice * qty;
              const totalComparePrice = baseComparePrice * qty;

              setCurrentPrice(`RM ${totalCurrentPrice.toFixed(2)}`);
              setCompareAtPrice(`RM ${totalComparePrice.toFixed(2)}`);
              setSavedAmount(Math.round(totalComparePrice - totalCurrentPrice));
            };

            // 2. 初始化先同步一次
            const initialQty = component.model.quantity || 1;
            updateUIPrice(initialQty);

            let lastQty = initialQty;

            // 3. Shopify 原生事件監聽 (客人一按 + 號立刻觸發)
            component.on("updateQuantity", (info) => {
              if (info && info.quantity) {
                lastQty = info.quantity; // 同步最新數量
                updateUIPrice(info.quantity);
              }
            });

            // 4. 輪詢小助手防漏接 (每0.2秒盯著 Shopify 的底層數據)
            modelObserverInterval = setInterval(() => {
              if (!isMounted) {
                clearInterval(modelObserverInterval);
                return;
              }

              if (component && component.model) {
                // 🚀 修正：正確讀取 Shopify 底層的 quantity
                const currentQty = component.model.quantity || 1;
                if (currentQty !== lastQty) {
                  lastQty = currentQty;
                  updateUIPrice(currentQty);
                }
              }
            }, 200);

            // 保留原本的事件監聽作為雙重保險
            component.on("updateQuantity", (prod) => {
              if (prod) updateUIPrice(prod.quantity);
            });
          },
        });
      });
    });

    return () => {
      isMounted = false;
      clearInterval(modelObserverInterval); // 🚀 確實清除計時器
      if (wrapperRef.current && wrapperRef.current.contains(freshContainer)) {
        wrapperRef.current.removeChild(freshContainer);
      }
    };
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
        <div className="text-center lg:text-left">
          <span className="text-xs font-black tracking-[0.3em] text-[#86868b] uppercase block mb-2">
            {t("purchase.tagline")}
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold italic tracking-wider uppercase">
            {t("purchase.name")}
          </h1>

          {/* 🚀 新增 1：標題下方的預購 Badge (帶有呼吸燈特效) */}
          <div className="inline-flex items-center justify-center lg:justify-start space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-sm font-bold text-amber-500 tracking-wider">
              {t("purchase.preorderInfo")}
            </span>
          </div>
        </div>

        {/* 靜態價格與明示促銷區塊 */}
        <div className="border-t border-b border-white/5 py-6 flex flex-col space-y-3">
          {/* 原價與特價 */}
          <div className="flex items-baseline justify-center lg:justify-start space-x-4">
            <span className="text-3xl font-black tracking-widest text-white">
              {currentPrice}
            </span>
            <span className="text-sm font-medium tracking-wide text-neutral-500 line-through decoration-neutral-600 transition-all duration-300">
              {compareAtPrice}
            </span>
            <span className="text-[10px] font-bold tracking-widest text-amber-500 border border-amber-500/20 bg-amber-500/5 px-2 py-1 rounded-md uppercase">
              {t("purchase.save", { amount: savedAmount })}
            </span>
          </div>

          {/* 🚀 多語言動態促銷標籤 */}
          <div className="flex justify-center lg:justify-start">
            <span className="text-xs font-bold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded">
              {t("purchase.volumeDiscount")}
            </span>
          </div>
        </div>

        <span className="text-xs text-[#86868b] block -mt-4 text-center lg:text-left">
          {t("purchase.shipping")}
        </span>

        {/* 產品特點清單 */}
        <ul className="space-y-3 text-md text-neutral-400 font-medium tracking-wide flex flex-col items-center lg:items-start">
          {productFeatures.map((feature, i) => (
            <li key={i} className="flex items-center space-x-3">
              <Zap size={17} className="text-amber-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Shopify 按鈕容器 */}
        <div className="pt-4 border-t border-white/5 w-full">
          <div ref={wrapperRef}></div>

          {/* 按鈕下方的預購免責聲明 */}
          <p className="mt-3 text-[11px] text-[#86868b] tracking-wider text-center lg:text-left">
            * {t("purchase.preorderNotice")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductPurchase;
