import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MobileSlider({ images }: { images: string[] }) {
  return (
    <div className="w-full max-w-md">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden">
              <img
                src={img}
                alt={`Mobile screen ${index + 1}`}
                className="w-full h-full object-contain md:p-20 p-10"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation elements */}
        <div className="swiper-button-prev !text-white/80 hover:!text-white after:text-xl"></div>
        <div className="swiper-button-next !text-white/80 hover:!text-white after:text-xl"></div>
        <div className="swiper-pagination "></div>
      </Swiper>
    </div>
  );
}
