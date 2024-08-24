"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const FeatureLocation = () => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Use useState for currentSlide

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.snapIndex); // Update the current slide index
    console.log(swiper);
    console.log(currentSlide);
  };

  return (
    <div className="container mb-[150px]">
    <div className=" grid lg:grid-cols-2  grid-cols-1 gap-[141px] relative">
      <div className="col-span-1 h-[738px]">
        <Image
          src="/feature.png"
          alt="feature"
          width={648}
          height={738}
          className="w-full object-fill h-full"
        />
      </div>
     <div className="col-span-1">
      <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              nextEl: ".slideNext",
              prevEl: ".slidePrev",
            }}     
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}       
            modules={[ Navigation]}
            className="w-full"
            onSlideChange={handleSlideChange}
          >
        <SwiperSlide>
        <div className="col-span-1">
            <h2 className="header-2 text-textdark mb-[32px]">
              Find property in your location
            </h2>
            <p className="paragraph-16 mb-[60px]">
              A residential project that offers affordable and spacious
              apartments with modern amenities and scenic views. The project
              aims to provide quality housing for middle-income families in a
              convenient and safe location.
            </p>
            <div className="relative lg:max-w-[531px] lg:max-h-[313px] ">
              <Image
                src="/feature2.png"
                alt="feature"
                width={531}
                height={313}
                className="w-full h-auto object-fill"
              />
              <button className="text-[23px] text-white font-medium absolute left-[16px] bottom-[13px]">
                New York
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:basis-1/2 basis-full">
            <h2 className="header-2 text-textdark mb-[32px]">
              Find property in your location
            </h2>
            <p className="paragraph-16 mb-[60px]">
              A residential project that offers affordable and spacious
              apartments with modern amenities and scenic views. The project
              aims to provide quality housing for middle-income families in a
              convenient and safe location.
            </p>
            <div className="relative lg:max-w-[531px] lg:max-h-[313px] ">
              <Image
                src="/feature2.png"
                alt="feature"
                width={531}
                height={313}
                className="w-full h-auto object-fill"
              />
              <button className="text-[23px] text-white font-medium absolute left-[16px] bottom-[13px]">
                New York
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:basis-1/2 basis-full">
            <h2 className="header-2 text-textdark mb-[32px]">
              Find property in your location
            </h2>
            <p className="paragraph-16 mb-[60px]">
              A residential project that offers affordable and spacious
              apartments with modern amenities and scenic views. The project
              aims to provide quality housing for middle-income families in a
              convenient and safe location.
            </p>
            <div className="relative lg:max-w-[531px] lg:max-h-[313px] ">
              <Image
                src="/feature2.png"
                alt="feature"
                width={531}
                height={313}
                className="w-full h-auto object-fill"
              />
              <button className="text-[23px] text-white font-medium absolute left-[16px] bottom-[13px]">
                New York
              </button>
            </div>
          </div>
        </SwiperSlide>
       </Swiper>
       <div className="relative w-full">
        <div className="absolute left-0   flex gap-[26px] items-center justify-end mt-[42px]">
          {currentSlide === 0 ? (
            <img
              src="/arrow1.png"
              alt="previous arrow"
              className="w-[71px]  h-auto cursor-pointer slidePrev"onClick={() => {console.log("Prev")}}
            />
          ) : (
            <img
              src="/arrow2.png"
              alt="next arrow"
              className="w-[171px]  h-auto cursor-pointer slidePrev rotate-180"
            />
          )}
          {currentSlide === 2 ? (
            <img
              src="/arrow1.png"
              alt="previous arrow"
              className="w-[71px] h-auto cursor-pointer slideNext rotate-180"onClick={() => {console.log("Next")}}
            />
          ) : (
            <img
              src="/arrow2.png"
              alt="next arrow"
              className="w-[171px]  h-auto cursor-pointer slideNext "
            />
          )}
        </div>
      </div>
      </div>
      {/* <div className="relative w-full">
        <div className="absolute left-0 mt-[-100px]  flex gap-[26px] items-center justify-end bg-red-300 w-2/3 h-[200px]">
          {currentSlide === 0 ? (
            <img
              src="/arrow1.png"
              alt="previous arrow"
              className="w-[71px]  h-auto cursor-pointer slidePrev"onClick={() => {console.log("Prev")}}
            />
          ) : (
            <img
              src="/arrow2.png"
              alt="next arrow"
              className="w-[171px]  h-auto cursor-pointer slidePrev rotate-180"
            />
          )}
          {currentSlide === 2 ? (
            <img
              src="/arrow1.png"
              alt="previous arrow"
              className="w-[71px] h-auto cursor-pointer slideNext rotate-180"onClick={() => {console.log("Next")}}
            />
          ) : (
            <img
              src="/arrow2.png"
              alt="next arrow"
              className="w-[171px]  h-auto cursor-pointer slideNext "
            />
          )}
        </div>
      </div> */}
     </div>
   
    </div>
  );
};

export default FeatureLocation;
