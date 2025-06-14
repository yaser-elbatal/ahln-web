"use client";

import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const events = [
  {
    id: 1,
    title: "GITEX Dubai",
    date: "October 14–18, 2024",
    image: "/images/NMK05481.jpg",
    description:
      "Experience Ahln. Box's cutting-edge delivery solutions at GITEX Dubai. Visit our booth B7-25 for live demonstrations and exclusive insights into our latest innovations.",
    videoUrl: "/videos/GITEX.MP4",
    images: [
      "/images/NMK05481.jpg",
      "/images/NMK05467.jpg",
      "/images/ahln-gitex.jpg",
    ],
  },
  {
    id: 2,
    title: "Global AI Exhibition",
    date: "May 1–10, 2025",
    image: "/images/GiTex.jpg",
    description:
      "Discover how Ahln. Box leverages artificial intelligence to revolutionize package delivery. Join us at the Global AI Exhibition for an immersive experience.",
    videoUrl: "/videos/AI.MP4",
    images: [
      "/images/Ai-ex1.jpeg",
      "/images/Ai-ex2.jpeg",
      "/images/Ai-ex3.jpeg",
    ],
  },
  {
    id: 3,
    title: "GITEX Berlin",
    date: "May 21–23, 2025",
    image: "/images/1GitexBerlin.jpg",
    description:
      "Experience Ahln. Box's cutting-edge delivery solutions at GITEX Berlin.",
    videoUrl: "/videos/GITEXEurope.mp4",
    images: [
      "/images/1GitexBerlin.jpg",
      "/images/2GitexBerlin.jpg",
      "/images/3GitexBerlin.jpg",
    ],
  },
];

export default function LatestHappenings() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  useEffect(() => {
    setHydrated(true);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!hydrated) return null;

  return (
    <section className="py-16 px-4 md:px-16 bg-background text-text transition-colors duration-500">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-text mb-6"
        >
          <span>{t("latestHappeningsPrefix")}</span>{" "}
          <span className="text-primary">{t("latestHappeningsHighlight")}</span>
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-600">
          {t("latestHappeningsDesc")}
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center">
        <div
          className={clsx(
            "custom-swiper-button-prev cursor-pointer text-primary text-3xl absolute z-10 hidden sm:block",
            isRTL ? "right-0" : "left-0"
          )}
        >
          {isRTL ? "❮" : "❮"}
        </div>

        <div className="w-full max-w-[1400px] overflow-hidden flex justify-center">
          <Swiper
            key={isRTL.toString()} // force re-render on direction change
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            centeredSlides
            spaceBetween={20}
            loop
            slidesPerView={1}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="w-full flex justify-center px-2 sm:px-4">
                  <div
                    onClick={() =>
                      setActiveVideo(`${event.videoUrl}?autoplay=1`)
                    }
                    className="cursor-pointer bg-primary text-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full max-w-[900px]"
                  >
                    <div className="relative w-full bg-black rounded-t-xl overflow-hidden aspect-[16/9]">
                      <Swiper
                        key={`${event.id}-images-${isRTL}`} // rerender inner Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={10}
                        slidesPerView={1}
                        className="h-full w-full"
                      >
                        {event.images.map((src, index) => (
                          <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                              <Image
                                src="/images/logoLight.png"
                                alt="Logo Background"
                                fill
                                style={{
                                  objectFit: "contain",
                                  opacity: 0.08,
                                  pointerEvents: "none",
                                }}
                                className="z-0"
                                priority
                              />
                              <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                style={{ objectFit: "contain" }}
                                className="rounded-t-xl z-10 relative"
                                priority
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="p-4">
                      <p className="text-sm text-white mb-1">📅 {event.date}</p>
                      <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                      <p className="text-sm text-white mb-2">
                        {event.description}
                      </p>
                      <span className="text-text hover:underline text-sm inline-flex items-center gap-1">
                        {"Watch Video →"}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className={clsx(
            "custom-swiper-button-next cursor-pointer text-secondary text-3xl absolute z-10 hidden sm:block",
            isRTL ? "left-0" : "right-0"
          )}
        >
          {isRTL ? "❯" : "❯"}
        </div>
      </div>

      <div className="custom-swiper-pagination flex justify-center items-center gap-2 mt-4" />

      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-2"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-[1200px] max-h-[80vh] sm:rounded-lg sm:h-[60vh] sm:w-[90vw] overflow-hidden"
          >
            <iframe
              width="100%"
              height="100%"
              src={activeVideo}
              title="Event Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 text-white text-3xl sm:text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
