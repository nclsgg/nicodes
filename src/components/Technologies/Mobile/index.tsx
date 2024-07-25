'use client';

import { technologies } from '@/utils/technologies';
import TechnologyCard from '../Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export default function TechnologiesMobile() {
  return (
    <div className="flex justify-center">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[Pagination]}
        className="techs-swiper flex w-full"
      >
        {Array.from({ length: Math.ceil(technologies.length / 6) }).map(
          (_, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 items-center justify-items-center">
                {technologies
                  .slice(slideIndex * 6, slideIndex * 6 + 6)
                  .map((tech, index) => (
                    <TechnologyCard key={index} name={tech} />
                  ))}
              </div>
            </SwiperSlide>
          ),
        )}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
