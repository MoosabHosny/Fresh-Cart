'use client'

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideData {
  image: string | StaticImageData;
  title: string;
  description: string;
  buttonText: string;
}

interface SliderProps {
  slides: SlideData[];
  spaceBetween?: number;
}

export default function Slider({ slides, spaceBetween = 0 }: SliderProps) {

  return (
    <div className="relative w-full overflow-hidden">

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        navigation  
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="h-75 md:h-112.5"
      >
        {slides.map((slide, index) => {
          const imageUrl = typeof slide.image === 'string' ? slide.image : slide.image.src;

          return (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full bg-cover bg-position-[right_center] md:bg-center flex items-center px-8 md:px-20"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className="absolute inset-0 bg-main-color/75" />

                <div className="relative z-10 max-w-xl text-white">
                  <h2 className="text-3xl md:text-[44px] font-bold mb-3 md:mb-5 leading-[1.1]">
                    {slide.title}
                  </h2>

                  <p className="text-base md:text-lg mb-8 md:mb-10 font-medium text-gray-100">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <Link
                      href="#"
                      className="bg-white text-main-color px-6 md:px-10 py-2.5 md:py-3.5 rounded-lg font-bold text-sm md:text-base hover:bg-gray-100 transition-all flex items-center justify-center min-w-35"
                    >
                      {slide.buttonText}
                    </Link>

                    <Link
                      href="#"
                      className="bg-transparent border border-white text-white px-6 md:px-10 py-2.5 md:py-3.5 rounded-lg font-bold text-sm md:text-base hover:bg-white hover:text-green-700 transition-all flex items-center justify-center min-w-35"
                    >
                      View Deals
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );
}