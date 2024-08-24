"use client";
import { Rate } from "antd";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const Client = () => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0); 
  
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.snapIndex); 
    console.log(swiper);
    console.log(currentSlide);
  };
  return (
    <div className="container lg:mb-[150px] mb-20  z-10 relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={{
          nextEl: ".slideNext2",
          prevEl: ".slidePrev2",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        className="w-full"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-[139px] gap-6 ">
            <div className="col-span-1 lg:h-fit">
              <h2 className="header-2 ">
                What our happy clients says about Us
              </h2>
              <p className="header-8 text-borderColor my-[32px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <button className="flex flex-col gap-1 property">
                <span className="button-18">Jenny Wilson - Client</span>
                <Rate defaultValue={4} disabled className="!text-[18px]" />
              </button>
            </div>
            <div className="col-span-1 flex md:justify-end justify-center lg:px-0 px-4  w-full">
              <div className="w-full h-auto xl:h-[460px] relative">
                <Image
                  src="/client.png"
                  width={460}
                  height={460}
                  alt="client"
                  className="w-full h-full object-fill"
                />
                <Image
                  src="/Quotte.png"
                  alt="quotte"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120]  absolute top-[43.25px] lg:left-[-71px] left-[-50px] z-20"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-[139px] gap-6">
            <div className="col-span-1 lg:h-fit">
              <h2 className="header-2 ">
                What our happy clients says about Us
              </h2>
              <p className="header-8 text-borderColor my-[32px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <button className="flex flex-col gap-1 property">
                <span className="button-18">Jenny Wilson - Client</span>
                <Rate defaultValue={4} disabled className="!text-[18px]" />
              </button>
            </div>
            <div className="col-span-1 flex md:justify-end justify-center lg:px-0 px-4  w-full">
              <div className="w-full h-auto xl:h-[460px] relative">
                <Image
                  src="/client.png"
                  width={460}
                  height={460}
                  alt="client"
                  className="w-full h-full object-fill"
                />
                <Image
                  src="/Quotte.png"
                  alt="quotte"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120]  absolute top-[43.25px] lg:left-[-71px] left-[-50px] z-20"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="relative w-full xl:mt-0 mt-4">
        <div className="absolute xl:left-0 left-4 top-0  flex gap-[26px] items-center justify-end ">
          {currentSlide === 0 ? (
            <img
              src="/arrow1.png"
              alt="previous arrow"
              className="w-[71px]  h-auto cursor-pointer slidePrev2"
              onClick={() => {
                console.log("Prev");
              }}
            />
          ) : (
            <img
              src="/arrow2.png"
              alt="next arrow"
              className="w-[171px]  h-auto cursor-pointer slidePrev2 rotate-180"
            />
          )}
          {currentSlide === 1 ? (
            <img
              src="/arrow1.png"
              alt="previous arrow"
              className="w-[71px] h-auto cursor-pointer slideNext2 rotate-180"
              onClick={() => {
                console.log("Next");
              }}
            />
          ) : (
            <img
              src="/arrow2.png"
              alt="next arrow"
              className="w-[171px]  h-auto cursor-pointer slideNext2 "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Client;
