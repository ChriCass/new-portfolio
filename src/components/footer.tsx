import React from "react";

const footer = () => {
  return (
    <footer className="border-t border-white/8 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-4 pb-4 lg:py-9 flex flex-col lg:flex-row justify-between items-center font-mono text-[11px] text-[#525252]">
        <div>© CHRISTIAN CASSAS · 2026 · v2.6</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
          all systems operational
        </div>
      </div>
    </footer>
  );
};

export default footer;
