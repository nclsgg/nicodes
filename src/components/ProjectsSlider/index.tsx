'use client'

import ProjectCard from "../ProjectCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

interface Projects {
  name: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

interface ProjectsSliderProps {
  projects: Projects[]; 
}

export default function ProjectsSlider({
  projects
}: ProjectsSliderProps) {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ el: '.projects-swiper-pagination', clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        892: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        893: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      className="projects-swiper flex w-full"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="flex w-2/3">
          <ProjectCard
            name={project.name}
            description={project.description}
            tags={project.tags}
            url={project.url}
            image={project.image}
          />
        </SwiperSlide>
      ))}
      <div className="projects-swiper-pagination"></div>
    </Swiper>
  );
}