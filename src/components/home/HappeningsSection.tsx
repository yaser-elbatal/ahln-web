/* eslint-disable react/no-unescaped-entities */

"use client";

import clsx from "clsx";
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
      "Experience AHLN Box's cutting-edge delivery solutions at GITEX Dubai. Visit our booth B7-25 for live demonstrations and exclusive insights into our latest innovations.",
    videoUrl: "/videos/GITEX.mp4",
    images: [
      "/images/NMK05481.jpg",
      "/images/NMK05467.jpg",
      "/images/ahln-gitex.jpg",
    ],
  },
  {
    images: [
      "/images/Ai-ex1.jpeg",
      "/images/Ai-ex2.jpeg",
      "/images/Ai-ex3.jpeg",
    ],
    id: 2,
    title: "Global AI Exhibition",
    date: "May 1–10, 2025",
    image: "/images/GiTex.jpg",
    description:
      "Discover how AHLN Box leverages artificial intelligence to revolutionize package delivery. Join us at the Global AI Exhibition for an immersive experience.",
    videoUrl: "/videos/AI.MP4",
  },
];

export default function LatestHappenings() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      className={clsx(
        "py-16 px-4 md:px-16 transition-colors duration-500",
        "bg-[#0a0f1c] text-white"
      )}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Latest Happenings
        </h2>
        <p className="text-lg text-gray-400 dark:text-gray-300">
          Stay updated with AHLN Box's presence at major industry events and
          exhibitions.
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center">
        <div className="custom-swiper-button-prev cursor-pointer text-secondary text-3xl absolute left-0 z-10 hidden sm:block">
          ❮
        </div>

        <div className="w-full max-w-[1400px] overflow-hidden flex justify-center">
          <Swiper
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
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="w-full flex justify-center px-2 sm:px-4">
                  <div
                    onClick={() =>
                      setActiveVideo(`${event.videoUrl}?autoplay=1`)
                    }
                    className="cursor-pointer bg-[#10182b] text-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full max-w-[900px]"
                  >
                    {/* Nested Swiper for Images */}
                    <div className="relative w-full h-[400px] bg-black rounded-t-xl overflow-hidden">
                      <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        className="h-full w-full"
                      >
                        {event.images.map((src, index) => (
                          <SwiperSlide
                            key={index}
                            className="flex items-center justify-center h-full"
                          >
                            <Image
                              src={src}
                              alt={`Slide ${index + 1}`}
                              fill
                              sizes="(max-width: 900px) 100vw, 900px"
                              className="rounded-t-xl object-cover"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col">
                      <p className="text-sm text-secondary mb-1">
                        📅 {event.date}
                      </p>
                      <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">
                        {event.description}
                      </p>
                      <span className="text-secondary hover:underline text-sm inline-flex items-center gap-1">
                        Watch Video →
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="custom-swiper-button-next cursor-pointer text-secondary text-3xl absolute right-0 z-10 hidden sm:block">
          ❯
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
