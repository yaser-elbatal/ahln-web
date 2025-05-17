/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import RotatingBox from "../ui/RotatingBox";

const features = [
  {
    iconPlaceholder: "/icons/MoApp.svg",
    title: "Mobile Application Control",
    description: "Enable control via the Ahln. Box app",
    image: "/images/mobileScreen4.png",
  },
  {
    iconPlaceholder: "/icons/liveStream.svg",
    title: "Livestream Capability",
    description: "Real-time video streaming for remote monitoring",
    image: "/images/mobileScreen1.png",
  },
  {
    iconPlaceholder: "/icons/notify.svg",
    title: "Realtime Notifications",
    description: "Instant alerts for package deliveries and updates",
    image: "/images/notification.png",
  },
  {
    iconPlaceholder: "/icons/offMode.svg",
    title: "Offline Mode",
    description: "Core functionality without internet",
    image: "/images/offf.png",
  },
  {
    iconPlaceholder: "/icons/packageScann.svg",
    title: "Package Scanning",
    description: "Integrated scanning for package tracking",
    image: "/images/scanPackage.png",
  },
  {
    iconPlaceholder: "/icons/deviceShare.svg",
    title: "Device Sharing",
    description: "Share access with family & friends",
    image: "/images/deviceShare.png",
  },
];

export default function FeaturesSection() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 15,
    },
    loop: true,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto play logic
  useEffect(() => {
    if (!slider) return;

    const interval = setInterval(() => {
      slider.current?.next();
    }, 2000); // 3s per slide

    return () => clearInterval(interval);
  }, [slider]);

  useEffect(() => {
    slider.current?.on("slideChanged", (s) => {
      setCurrentSlide(s.track.details.rel);
    });
  }, [slider]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-20 bg-gradient-to-br from-[#070F22] to-[#080f22] text-white"
    >
      <img
        src="/linBg.svg"
        alt="linBg"
        width={200}
        height={200}
        className="absolute top-120 right-0 z-0"
      />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
        >
          <span className="text-cyan-400">Powerful</span> App
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto"
        >
          Control everything from our feature-rich mobile app, designed for a
          seamless user experience.
        </motion.p>

        {isMobile ? (
          // 📱 Mobile Carousel
          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="keen-slider__slide bg-[#101828] p-6 rounded-xl space-y-4 text-center"
                >
                  <img
                    src={feature.image}
                    alt={`${feature.title} image`}
                    className="w-full rounded-lg"
                  />
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto border border-gray-600 bg-gray-700">
                    <img
                      src={feature.iconPlaceholder}
                      alt={`${feature.title} icon`}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
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
                    currentSlide === index ? "bg-cyan-400" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          // 🖥️ Desktop Hover Interaction
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RotatingBox
              imageSrc={hoveredImage ?? "/images/powerful-app.png"}
            />
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-4"
                  onMouseEnter={() => setHoveredImage(feature.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border border-gray-600 bg-gray-700 transition-all duration-300 transform hover:scale-110">
                    <img
                      src={feature.iconPlaceholder}
                      alt={`${feature.title} icon`}
                      className="w-7 h-7"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
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
