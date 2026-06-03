// src/pages/Product.jsx
import React from "react";

// 引入子元件
import ProductPurchase from "../components/ProductPurchase";
import Ingredients from "../components/Ingredients";
import Usage from "../components/Usage";

const Product = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden min-h-screen">
      {/* 獨立出的頂部購買面板與 Shopify 購物車 */}
      <ProductPurchase />

      {/* 深度解構區塊 */}
      <div className="border-t border-white/5">
        <Ingredients />
        <Usage />
      </div>
    </div>
  );
};

export default Product;
