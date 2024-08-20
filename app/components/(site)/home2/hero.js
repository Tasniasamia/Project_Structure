"use client";
import { Form, Select } from "antd";
import { useState } from "react";
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Hero = ({ home3, home2 }) => {
  const [tab, setTab] = useState("all");
  return (
    <div
      className={`flex lg:mt-[-135px] mt-[-110px] top-0 relative home2-search bg-secondary1 ${
        home3 ? "h-[900px] flex flex-row-reverse items-end justify-between  " : "h-[965px]"
      }`}
    >
      {home2 && <div className="md:basis-1/2 basis-full bg-secondary1"></div>}
      {
        home2 ? (<div className="md:basis-1/2 basis-full md:block hidden order-1">
            <img
              src="/hero1.png"
              alt="hero"
              className="w-full h-full object-fill"
            />
          </div>) : <div className="md:basis-1/2 basis-full   md:block hidden  bg-secondary1  ">
          <div className="h-[715px]">
          <img
          src="/video2.png"
          alt="hero"
          className=" "
        />
          </div>
    
      </div>
      }
      
      <div className={`container xl:px-0  absolute h-full flex flex-col ${home3?"pt-[165px]":"pt-[136px]"}  right-1/2 translate-x-1/2 basis-1/2 justify-center `}>
        <div className=" ">
          <h1 className="header-1 text-white md:w-[586px] w-full">
            Find Your Dream Home Now
          </h1>
          <p className="ps-[20px] border-l-[4px] text-footertextColor mt-[32px] mb-[42px] border-primary1 md:w-[559px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <div className="flex gap-10 items-center">
            <button className="px-[27px] py-[17px] bg-primary1 text-white cursor-pointer primary-btn-shape ">
              Find Property
            </button>
            <img
              src="/play.png"
              className="w-[63px] h-[63px] object-fill cursor-pointer"
              alt="play"
              title="play"
            />
          </div>
          {/* tab */}
          <div className="flex gap-10 items-center mt-[80px] mb-[32px]">
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
              className={`header-5 cursor-pointer  ${
                tab === "sale"
                  ? "text-primary1 underline"
                  : "text-footertextColor"
              }`}
              onClick={() => setTab("sale")}
            >
              Sale
            </p>
            <p
              className={`header-5 cursor-pointer  ${
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
          <Form className="flex flex-wrap gap-10 items-center mt-[80px] mb-[32px] bg-gradient-to-b from-[#ffffff66] to-[#d9d9d91a] px-[24px] py-[26px] rounded-[8px] w-fit">
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
      </div>
    </div>
  );
};

export default Hero;
