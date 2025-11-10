"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";

const HorizontalScroller = ({
  title,
  gap = 16,
  children,
}) => {
  const swiperRef = useRef(null);
  const childArray =(children);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className=" container relative w-full   mx-auto flex flex-col gap-6 p-7 !overflow-hidden mt-5 ">
      <div className="flex justify-center items-center  mb-2">
        <h3 className="md:text-2xl text-center text-[17px] font-bold text-primary">
          {title}
        </h3>
      </div>
<div className="absolute top-[60%] left-[10%]">
<button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className={`absolute top-1/2 left-2 z-10  -translate-y-1/2  md:p-3 p-2  transition
            ${
              isBeginning
                ? "bg-gray-100 opacity-40 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}>
          <IoIosArrowBack className="md:text-[26px] text-[20px] text-darkest" />
        </button>
</div>
    



      <div className="relative max-w-[1000px] m-auto !overflow-hidden">
     
      


        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={gap}
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            850: { slidesPerView: 2 },
            1024: { slidesPerView: 3},
          }}
          dir="rtl"
          className="w-full">
          {childArray.map((child, index) => (
            <SwiperSlide key={index}>
              
                {child}
              
            </SwiperSlide>
          ))}
        </Swiper>
     
     
      </div>
      <div className="absolute top-[60%] right-[10%]"> <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className={`absolute top-1/2 right-2 z-10  -translate-y-1/2 rounded-full md:p-3 p-2  transition
            ${
              isEnd
                ? "bg-gray-100 opacity-40 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}>
          <IoIosArrowForward className="md:text-[26px] text-[20px] text-darkest" />
        </button>
        </div>
     
    </div>
  );
};

export default HorizontalScroller;
