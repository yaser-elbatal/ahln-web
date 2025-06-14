"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export const paymentOptions = [
  { value: "card", label: "cardPayment" },
  { value: "tamara", label: "tamaraPayment" },
  { value: "deposit", label: "depositPayment" },
];

type Props = {
  selected: string;
  onChange: (value: string) => void;
};

const PaymentSelector: React.FC<Props> = ({ selected, onChange }) => {
  const { t, lang } = useLanguage();

  return (
    <div className="relative w-full mt-6">
      <label className="text-xl md:text-xl font-semibold">
        {t("SelectPaymentMethod")}
      </label>
      <div className="relative mt-5">
        <select
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className={`block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 ${
            lang === "ar" ? "pl-10 pr-4 text-right" : "pr-10 pl-4 text-left"
          } rounded-lg leading-tight focus:outline-none focus:border-blue-500`}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {paymentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {t(option.label)}
            </option>
          ))}
        </select>
        <ChevronDown
          className={`absolute ${
            lang === "ar" ? "left-3" : "right-3"
          } top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none`}
        />{" "}
      </div>
    </div>
  );
};

export default PaymentSelector;
