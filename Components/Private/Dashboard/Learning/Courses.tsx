import React from 'react'
import CoursesCard from './CoursesCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


const Courses = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <h2 className='text-lg-h2 max-md:text-md-h2 max-sm:text-sm-h2'>Courses for choose</h2>

      <div className='max-sm:hidden'>
        <Swiper watchSlidesProgress={true} slidesPerView={3} spaceBetween={20} className="mySwiper grid grid-cols-3">
          <SwiperSlide><CoursesCard/></SwiperSlide>
          <SwiperSlide><CoursesCard/></SwiperSlide>
          <SwiperSlide><CoursesCard/></SwiperSlide>
          <SwiperSlide><CoursesCard/></SwiperSlide>
          <SwiperSlide><CoursesCard/></SwiperSlide>
        </Swiper>
      </div>
      <div className='hidden max-sm:block'>
        <Swiper watchSlidesProgress={true} slidesPerView={2} spaceBetween={20} className="mySwiper grid grid-cols-3">
          <SwiperSlide><CoursesCard/></SwiperSlide>
          <SwiperSlide><CoursesCard/></SwiperSlide>
          <SwiperSlide><CoursesCard/></SwiperSlide>
          <SwiperSlide><CoursesCard/></SwiperSlide>
          <SwiperSlide><CoursesCard/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Courses