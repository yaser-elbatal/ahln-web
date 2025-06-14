"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  showCursor?: boolean;
  speed?: number;
  lang?: string; // e.g. "en" or "ar"
}

export default function TypewriterText({
  text,
  className,
  delay = 0,
  showCursor = false,
  speed = 100,
  lang = "en",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const isRTL = lang === "ar";
  const isTyping = startAnimation && currentIndex < text.length;

  // Restart typing effect on lang or text change
  useEffect(() => {
    if (!isInView) return;

    setDisplayedText("");
    setCurrentIndex(0);
    setStartAnimation(false);

    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, lang, delay, isInView]);

  useEffect(() => {
    if (!startAnimation || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, startAnimation, speed]);

  return (
    <h2
      ref={ref}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${className} text-center`}
    >
      {displayedText}
      {showCursor && isTyping && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[0.1em] h-[1em] bg-current ml-1 align-middle"
        />
      )}
    </h2>
  );
}
