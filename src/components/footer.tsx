import React from "react";
import { getProfile, type Variant } from "../lib/profile";

const footer = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const profile = getProfile(variant)
  return (
    <footer className="border-t border-white/8 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-4 pb-4 lg:py-9 flex flex-col lg:flex-row justify-between items-center font-mono text-[11px] text-[#525252]">
        <div>© CHRISTIAN CASSAS · 2026 · v2.6{profile.footerSuffix}</div>
      </div>
    </footer>
  );
};

export default footer;
