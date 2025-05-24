// Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ slides }) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="max-w-screen text-2xl h-[400px]"
            style={{
                "--swiper-navigation-color": "#fff",
                // "--swiper-navigation-size": "2xl",
            }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="text-lg bg-slate-800 text-amber-50">
                    <div>
                        <div>{slide.title}</div>
                        <div>{slide.desc}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
