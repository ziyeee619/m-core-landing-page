// src/pages/Science.jsx
import React from "react";
import SevenRSystem from "../components/SevenRSystem";
import ScienceComponent from "../components/Science";

const Science = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden min-h-screen">
      {/* 整合了頂部 Banner 的七大系統組件 */}
      <SevenRSystem />

      {/* 整合了底部品質保證的科學機制組件 */}
      <ScienceComponent />
    </div>
  );
};

export default Science;
