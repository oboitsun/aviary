// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const DC = "DealsCarousel";
export default () => {
  return (
    <div className={`${DC} cont relative overflow-hidden `}>
      <img id="deals-prev" src="/assets/icons/arrow-prev.svg" alt="previous slide" />
      <img id="deals-next" src="/assets/icons/arrow-prev.svg" alt="previous slide" />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={{ nextEl: "#deals-next", prevEl: "#deals-prev" }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="w-full relative rounded-xl overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center z-[2]">
              <p className={`${DC}__slide-text text-border relative`}>
                <span className="absolute w-full top-0 left-0">
                  {" "}
                  Buy 2 parrots, get the third one for free!
                </span>
                Buy 2 parrots, get the third one for free!
              </p>
            </div>
            <img
              className="w-full"
              src="/assets/commercial-img.jpg"
              alt="buy 2, get 1 for free"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative rounded-xl overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center z-[2]">
              <p className={`${DC}__slide-text text-border relative`}>
                <span className="absolute w-full top-0 left-0">
                  {" "}
                  Buy 2 parrots, get the third one for free!
                </span>
                Buy 2 parrots, get the third one for free!
              </p>
            </div>
            <img
              className="w-full"
              src="/assets/commercial-img.jpg"
              alt="buy 2, get 1 for free"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
