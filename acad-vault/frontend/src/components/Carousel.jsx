// Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="max-w-xl mx-auto"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
