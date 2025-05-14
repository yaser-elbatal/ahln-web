// components/UnderlineText.tsx
import React from "react";
import { COLORS } from "../layout/colors";

interface UnderlineTextProps {
  children: React.ReactNode;
}

const UnderlineText: React.FC<UnderlineTextProps> = ({ children }) => {
  return (
    <span className="relative pb-2 inline-flex flex-col items-center ">
      <span className="relative">{children}</span>
      <span
        className={`mt-1 left-0 bottom-0 w-2/5 h-[4px] rounded-2xl `}
        style={{ backgroundColor: COLORS.ACCENT }}
      ></span>
    </span>
  );
};

export default UnderlineText;
