"use client";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { CiCircleChevRight } from "react-icons/ci";

const Place = ({about,theme1}) => {
  return (
    <div className="container md:mb-[150px] mb-10 ">
      <h2 className={`header-2 ${theme1?"dark:text-white":"text-textdark"}`}>Explore Good Places</h2>
      <p className={`header-2 paragraph-16 text-borderColor py-[32px] md:w-[560px] w-full ${theme1?"dark:text-white":"text-textdark"}`}>
        {" "}
        A residential project that offers affordable and spacious apartments
        with modern amenities and scenic views. The project aims to provide
        quality housing for middle-income families in a convenient and safe
        location.
      </p>
      <div className="flex gap-[26px] items-center">
        <Image
          src="/arrow1.png"
          alt="arrow Left"
          width={100}
          height={100}
          className="cursor-pointer w-[71px] h-auto "
        />
        <Image
          src="/arrow2.png"
          alt="arrow Right"
          width={100}
          height={100}
          className="cursor-pointer w-[127px] h-auto"
        />
      </div>
      <div className="md:pt-[213px] pt-5 grid md:grid-cols-3 grid-cols-1 gap-[24px] ">
          {/* place 1 */}
          <div>
          <div className="relative">
            <Image
              src="/place1.png"
              alt="place"
              width={424}
              height={610}
              className="h-auto w-full"
            />
            <button className={`bg-footertextColor py-[10px] px-[16px] header-6  left-[14px] top-[13px] absolute ${theme1?"dark:text-white":"text-mainbg"}`}>
              Condo
            </button>
          </div>
          <h5 className={`header-5  ${theme1?"dark:text-white":"text-textdark"} mt-[24px] `}>
            Appstick Privet Resort{" "}
          </h5>
          <p className={`paragraph-16 ${theme1?"dark:text-white":"text-borderColor"} my-[16px]`}>
            A ski resort that boasts a prime location on the slopes, cozy
            chalets, and a range of winter attractions and facilities.
          </p>
          <p className="flex items-center gap-[16px]">
            <SlLocationPin className={`text-[18px]  ${theme1?"dark:text-white":"text-textdark"}`}/>
            <span className={`paragraph-16 ${theme1?"dark:text-white":"text-textdark"}`}>New York, New Jersey </span>
          </p>
          </div>
          {/* place 2*/}
          <div className="md:mt-[-208px]">
          <div className="relative ">
            <Image
              src="/place2.png"
              alt="place"
              width={424}
              height={610}
              className="h-auto w-full"
            />
            <button className="bg-footertextColor py-[10px] px-[16px] header-6 text-mainbg left-[14px] top-[13px] absolute">
              Condo
            </button>
          </div>
          <h5 className={`header-5 ${theme1?"dark:text-white":"text-textdark"} mt-[24px] `}>
            Appstick Privet Resort{" "}
          </h5>
          <p className={`paragraph-16 ${theme1?"dark:text-white":"text-borderColor"} my-[16px]`}>
            A ski resort that boasts a prime location on the slopes, cozy
            chalets, and a range of winter attractions and facilities.
          </p>
          <p className="flex items-center gap-[16px]">
            <SlLocationPin className={`text-[18px] ${theme1?"dark:text-white":"text-textdark"}`}/>
            <span className={`paragraph-16 ${theme1?"dark:text-white":"text-textdark"}`}>New York, New Jersey </span>
          </p>
          </div>
           {/* place 3*/}
          <div className="md:mt-[-439px]">
          <div className="relative ">
            <Image
              src="/place3.png"
              alt="place"
              width={424}
              height={610}
              className="h-auto w-full"
            />
            <button className={`bg-footertextColor py-[10px] px-[16px] header-6 ${theme1?"dark:text-white":"text-mainbg"} left-[14px] top-[13px] absolute`}>
              Condo
            </button>
          </div>
          <h5 className={`header-5 ${theme1?"dark:text-white":"text-textdark"} mt-[24px] `}>
            Appstick Privet Resort{" "}
          </h5>
          <p className={`paragraph-16 ${theme1?"dark:text-white":"text-borderColor"} my-[16px]`}>
            A ski resort that boasts a prime location on the slopes, cozy
            chalets, and a range of winter attractions and facilities.
          </p>
          <p className="flex items-center gap-[16px]">
            <SlLocationPin className={`text-[18px] ${theme1?"dark:text-white":"text-textdark"}`}/>
            <span className={`paragraph-16 ${theme1?"dark:text-white":"text-textdark"}`}>New York, New Jersey </span>
          </p>
          </div>
      </div>
      <div className="flex flex-wrap gap-[16px] items-center justify-end lg:mt-[-32px]  mt-[32px]">
      <div className={`md:w-[614px] w-full h-[2px] bg-borderColor`}/>
      <button className={`button-18 ${theme1?"dark:text-white":"text-textdark"}`}>Explore All Projects</button>
      <CiCircleChevRight className={`text-[42px] ${theme1?"dark:text-white":"text-borderColor"} cursor-pointer`}/>
      </div>
    </div>
  );
};

export default Place;
