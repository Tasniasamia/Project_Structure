"use client";
import { Form, Select } from "antd";
import { useState } from "react";
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Image from "next/image";
import Btn from "../../common/button/btn";

const Hero = () => {
  const [tab, setTab] = useState("all");

  return (
    <div className="bg-secondary1 mt-[-134px]   home2-search">
      <div className="h-full   flex justify-between ">
        <div className="basis-1/2 lg:px-0 container left-1/2 -translate-x-1/2 absolute h-full flex flex-col ">
          <h1 className="header-1 text-white md:w-[586px] w-full md:mt-[270px] mt-[200px] ">
            Find Your Dream Home Now
          </h1>
          <p className="ps-[20px] border-l-[4px] text-footertextColor mt-[32px] mb-[42px] border-primary1 md:w-[559px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <div className="flex gap-10 items-center">
          <Btn>Find Property</Btn>
           <img
              src="/play.png"
              className="w-[63px] h-[63px] object-fill cursor-pointer"
              alt="play"
              title="play"
            />
          </div>
          {/* tab */}
          <div className="flex gap-10 items-center md:mt-[80px] mt-[30px] md:mb-[32px] mb-[12px]">
            <p
              className={`header-5 cursor-pointer ${
                tab === "all"
                  ? "text-primary1 underline"
                  : "text-footertextColor"
              }`}
              onClick={() => setTab("all")}
            >
              All
            </p>
            <p
              className={`header-5 cursor-pointer ${
                tab === "sale"
                  ? "text-primary1 underline"
                  : "text-footertextColor"
              }`}
              onClick={() => setTab("sale")}
            >
              Sale
            </p>
            <p
              className={`header-5 cursor-pointer ${
                tab === "rent"
                  ? "text-primary1 underline"
                  : "text-footertextColor"
              }`}
              onClick={() => setTab("rent")}
            >
              Rent
            </p>
          </div> 
          {/* tab content */}
          <Form className=" bg-blurColor  flex flex-wrap md:gap-10 gap-3 items-center  mb-[32px] px-[24px] py-[26px] rounded-[8px] w-fit">
            <div className="flex  items-center gap-[12px] pe-[24.27px] border-r border-r-borderColor2">
              <BiSolidHomeCircle className="text-white text-[18px]" />
              <Select
                variant="borderless"
                className="w-fit text-white text-[16px] !placeholder:text-white !placeholder:text-[16px]"
                options={[{}]}
                placeholder="Property Type"
                suffixIcon={<FaCaretDown className="text-white" />}
              />
            </div>
            <div className="flex items-center gap-[12px] pe-[24.27px] border-r border-r-borderColor2">
              <FaLocationDot className="text-white text-[18px]" />
              <Select
                variant="borderless"
                className="w-fit text-white text-[16px] !placeholder:text-white !placeholder:text-[16px]"
                options={[{}]}
                placeholder="Country"
                suffixIcon={<FaCaretDown className="text-white" />}
              />
            </div>
            <div className="flex items-center gap-[12px] pe-[24.27px] border-r border-r-borderColor2">
              <FaLocationDot className="text-white text-[18px]" />
              <Select
                variant="borderless"
                className="w-fit text-white text-[16px] !placeholder:text-white !placeholder:text-[16px]"
                options={[{}]}
                placeholder="City"
                suffixIcon={<FaCaretDown className="text-white" />}
              />
            </div>
            <div className="flex items-center gap-[12px] pe-[24.27px] border-r border-r-borderColor2">
              <BiSolidBadgeDollar className="text-white text-[18px]" />
              <Select
                variant="borderless"
                className="w-fit text-white text-[16px] !placeholder:text-white !placeholder:text-[16px]"
                options={[{}]}
                placeholder="Price Range"
                suffixIcon={<FaCaretDown className="text-white" />}
              />
            </div>
            <div className="flex gap-[12px] items-center">
            <button className="bg-[#D9D9D945] bg-opacity-[27%] rounded-[4px] px-[16px] py-[12px] cursor-pointer flex items-center gap-[6.75px]">
                <span className="text-[16px] text-white">Advance</span>
                <PiDotsThreeOutlineVerticalFill className="!text-white !text-[16px]" />
            </button>
            <div className="bg-secondary1 rounded-[4px] p-[16.5px] cursor-pointer">
              <FaSearch className="!text-white !text-[16px]" />
            </div>
            </div>
          </Form>
        </div> 
       
        <div className="basis-1/2"></div>
        <div className="basis-1/2  mt-[191px]">
          <div className="md:max-w-[958px] h-[715px] sm:block hidden">
           <Image
              src="/video2.png"
              alt="video"
              layout="responsive"
              width={958}
              height={715}
              className="w-full h-full"
            />
            </div>
            </div>
            </div>
            </div>
     
  );
};

export default Hero;
