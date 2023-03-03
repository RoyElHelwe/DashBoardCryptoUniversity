import React, { useRef, useState } from 'react'
import NavBar from '../../Components/Global/Dashboard/NavBar'
import Header from '../../Components/Global/Dashboard/Header'
import OverView from '@/Components/Private/Dashboard/Affilate/OverView'
import Earning from '@/Components/Private/Dashboard/Affilate/Earning'
import Commision from '@/Components/Private/Dashboard/Affilate/Commision'
import RefferalLink from '../../Components/Private/Dashboard/Affilate/RefferalLink'
import Resourses from '../../Components/Private/Dashboard/Affilate/Resourses'
import Notification from '../../Components/Private/Dashboard/Affilate/Notification'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation]);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BoardClients from '@/Components/Private/Dashboard/Affilate/BoardClients'
const affilate = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className='flex'>
      <NavBar />
      <div className='grid grid-cols-12 w-full px-4 place-content-start gap-4 max-md:pb-20 max-md:gap-2 '>
        <div className='col-span-12'><Header /> </div>
        <div className='col-span-4 '><OverView /></div>
        <div className='col-span-4 '><Earning /></div>
        <div className='col-span-4 '><Commision /></div>
        <div className='col-span-6'><RefferalLink /></div>
        <div className='col-span-6'><Resourses /></div>
        <div className='col-span-12'>
          <Swiper
            pagination={true}
            keyboard={true}
            modules={[Navigation]}
            className="mySwiper relative"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <div className='absolute bottom-[30%] z-30 right-10 flex gap-[20px] max-md:gap-[10px] max-sm:gap-[5px] text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 max-sm:right-3 '>
              <div onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer">	&lt;</div>
              <div>	1/4</div>
              <div onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer">	&gt;</div>
            </div>
            <SwiperSlide><Notification /></SwiperSlide>
            <SwiperSlide><Notification /></SwiperSlide>
            <SwiperSlide><Notification /></SwiperSlide>
            <SwiperSlide><Notification /></SwiperSlide>
            <SwiperSlide><Notification /></SwiperSlide>
            <SwiperSlide><Notification /></SwiperSlide>
          </Swiper>
        </div>
        <div className='col-span-12'><BoardClients title={"Recent SignUps"}/></div>
        <div className='col-span-12'><BoardClients title={"Sub-Affiliates"}/></div>
      </div>
    </div>
  )
}

export default affilate