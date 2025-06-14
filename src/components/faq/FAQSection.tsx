/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import UnderlineText from "../common/UnderlineText";
import { getFaqs } from "./faqContent";
import { useLanguage } from "@/context/LanguageContext";

// const faqs = [
//   {
//     question: "How to setup the box?",
//     answer: "To setup the box, follow these steps...",
//   },
//   {
//     question: "How to buy the box?",
//     answer: "You can buy the box from our official website...",
//   },
//   {
//     question: "How to setup the customer app?",
//     answer:
//       "Download the app from the App Store or Google Play and follow the instructions...",
//   },
//   // Add more FAQs as needed
// ];

const PAGE_COLORS = {
  borderLight: "border-gray-200",
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const faqs = getFaqs(t);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:px-50 border-2 md:mx-10 mx-5 bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl border border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold mb-8 text-center text-text">
          <UnderlineText>{t("faqTitle")}</UnderlineText>
        </h2>
        <div className="space-y-4 ">
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                className={`border-b ${PAGE_COLORS.borderLight}`}
              >
                <button
                  className="w-full text-left py-4 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="flex justify-between items-center">
                    <span className="font-semibold text-text">
                      {faq.question}
                    </span>
                    <FontAwesomeIcon
                      icon={openIndex === index ? faChevronUp : faChevronDown}
                      className="text-text"
                    />
                  </span>
                </button>
                {openIndex === index && (
                  <div className="py-2">
                    <p className="ml-4 text-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
