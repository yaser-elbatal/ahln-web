"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import RotatingBox from "../ui/RotatingBox";

const baseFeatures = [
  {
    icon: "/icons/MoApp.svg",
    titleKey: "featureMobileTitle",
    descKey: "featureMobileDesc",
    image: "/images/mobileScreen4.png",
  },
  {
    icon: "/icons/liveStream.svg",
    titleKey: "featureLivestreamTitle",
    descKey: "featureLivestreamDesc",
    image: "/images/mobileScreen1.png",
  },
  {
    icon: "/icons/notify.svg",
    titleKey: "featureNotificationsTitle",
    descKey: "featureNotificationsDesc",
    image: "/images/mobileScreen3.png",
  },
  {
    icon: "/icons/offMode.svg",
    titleKey: "featureOfflineTitle",
    descKey: "featureOfflineDesc",
    image: "/images/offf.png",
  },
  {
    icon: "/icons/packageScann.svg",
    titleKey: "featureScanningTitle",
    descKey: "featureScanningDesc",
    image: "/images/scanPackage.png",
  },
  {
    icon: "/icons/deviceShare.svg",
    titleKey: "featureSharingTitle",
    descKey: "controlFeature3",
    image: "/images/mobileScreen4.png",
  },
];

export default function FeaturesSection() {
  const { t, lang } = useLanguage(); // Make sure you get current language code here
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const features = baseFeatures.map((f) => ({
    ...f,
    title: t(f.titleKey),
    description: t(f.descKey),
    iconPlaceholder: f.icon,
  }));

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 15 },
    loop: true,
  });

  // 🛠 Force Keen Slider reinit on lang change
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  useEffect(() => {
    slider.current?.on("slideChanged", (s) => {
      setCurrentSlide(s.track.details.rel);
    });
  }, [slider]);

  // 🚀 Animation config
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.section
      key={lang} // ✅ force re-render on language change
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-20 bg-background text-text"
      dir={lang === "ar" ? "rtl" : "ltr"} // ✅ handle RTL layout
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-text mb-6 text-center"
        >
          <span className="text-text">{t("powerfulAppPrefix")}</span>{" "}
          <span className="text-primary">{t("powerfulAppHighlight")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl text-text mb-12 text-center max-w-2xl mx-auto"
        >
          {t("powerfulAppDesc")}
        </motion.p>

        {isMobile ? (
          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {features.map((feature, index) => (
                <div
                  key={`${lang}-${index}`}
                  className="keen-slider__slide p-6 rounded-xl space-y-4 text-center"
                >
                  <img
                    src={feature.image}
                    alt={`${feature.title} image`}
                    className="w-full rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/images/fallback.png"; // optional fallback
                    }}
                  />
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto border border-gray-600 bg-gray-700">
                    <img
                      src={feature.iconPlaceholder}
                      alt={`${feature.title} icon`}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-text">
                    {feature.title}
                  </h3>
                  <p className="text-text">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => slider.current?.moveToIdx(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-primary" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RotatingBox imageSrc={hoveredImage!} />
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li
                  key={`${lang}-desktop-${index}`}
                  variants={fadeInUp}
                  className="flex items-start space-x-4 rtl:space-x-reverse"
                  onMouseEnter={() => setHoveredImage(feature.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border border-white bg-primary transition-all duration-300 transform hover:scale-110">
                    <img
                      src={feature.iconPlaceholder}
                      alt={`${feature.title} icon`}
                      className="w-7 h-7 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.section>
  );
}
