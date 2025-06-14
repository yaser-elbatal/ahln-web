"use client";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LangAttributes() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return null;
}
