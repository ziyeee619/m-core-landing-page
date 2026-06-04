// src/components/ProductPurchase.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Zap } from "lucide-react";

const ProductPurchase = () => {
  const { t, i18n } = useTranslation();

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
    const scriptId = "shopify-buy-button-script-global";
    let shopifyScript = document.getElementById(scriptId);

    const freshContainer = document.createElement("div");
    // 🚀 核心修正 1：使用 w-fit 緊緊包住 Shopify，並用 mx-auto 完美置中，桌機則用 lg:mx-0 靠左
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
                // 🚀 核心修正 2：確保 iframe 內部的文字預設置中
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
                // 🚀 核心修正 3：控制加減器的 Flex 排版
                quantity: {
                  "margin-bottom": "20px !important",
                  display: "flex !important",
                  "align-items": "center !important",
                  "justify-content": "center !important", // 手機版強制置中
                  "@media (min-width: 1024px)": {
                    "justify-content": "flex-start !important", // 桌機版靠左對齊
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
        </div>

        {/* 實時同步價格區間 */}
        <div className="border-t border-b border-white/5 py-6 flex items-baseline justify-center lg:justify-start space-x-4">
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
              {t("purchase.save", { amount: savedAmount })}
            </span>
          )}
        </div>
        <span className="text-xs text-[#86868b] block -mt-4 text-center lg:text-left">
          {t("purchase.shipping")}
        </span>

        {/* 產品特點清單 */}
        <ul className="space-y-3 text-sm text-neutral-400 font-medium tracking-wide flex flex-col items-center lg:items-start">
          {productFeatures.map((feature, i) => (
            <li key={i} className="flex items-center space-x-3">
              <Zap size={14} className="text-amber-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* 🚀 核心修正 4：把這裡的外層干擾全部拿掉，交給 freshContainer 控制 */}
        <div className="pt-4 border-t border-white/5 w-full">
          <div ref={wrapperRef}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductPurchase;
