"use client";
import React from 'react'

import Image from "next/image";
// swiper
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Product from './Product';
import { products } from '@/app/data/data';
import { useState } from "react";

const Slide = () => {
    const [hasPrevSlides, setHasPrevSlides] = useState(false);
    const [hasNextSlides, setHasNextSlides] = useState(false);
    const handleSlideChange = (swiper: any) => {
        setHasPrevSlides(swiper.activeIndex !== 0);
        setHasNextSlides(swiper.activeIndex !== 41);
    };
    return (
            <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, Autoplay]}
                spaceBetween={13}
                slidesPerView={2.3}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                speed={950}
                navigation={{
                    nextEl: ".custom-next-button",
                    prevEl: ".custom-prev-button",
                }}
                onSlideChange={handleSlideChange}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },

                    720: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2.3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 2.3,
                        spaceBetween: 20,
                    },
                    1800: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }

                }}

            >
                {
                    products.map(({ id, image }) => (
                        <SwiperSlide key={id}>
                            <Product
                                key={id}
                                id={id}
                                image={image}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
    )
}

export default Slide