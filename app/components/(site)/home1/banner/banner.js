"use client";
import { Select } from "antd";
import { useState } from "react";
import { MdCategory } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  const [tab, setTab] = useState("buy");
  return (
    <div className="relative dark:bg-black bg-[#c7e6f4] md:h-[800px] lg:mt-[-135px] mt-[-110px] top-0">
      <div className=" container relative z-20 flex flex-col justify-center md:py-[210px] py-[60px]">
        {/* hero content */}
        <div className="sm:w-[605px] w-full">
          <h1 className="text-primary font-bold md:text-[48px] sm:text-[34px] text-[24px] ">
            Find a perfect property <br /> Where you’ll love to live
          </h1>
          <p className="mt-[28.8px] mb-[62px] text-[20px] font-normal text-primary">
            We helps businesses customize, automate and scale up their ad
            production and delivery.
          </p>
        </div>
        {/* search tab */}
        <div className="flex flex-wrap gap-2 items-center">
          <button
            className={`md:px-[32px] px-[20px] py-[16px] font-bold text-primary rounded-lg cursor-pointer ${
              tab === "buy" ? "bg-white" : "bg-[#e3f2f9]"
            }`}
            onClick={() => setTab("buy")}
          >
            Buy
          </button>
          <button
            className={`md:px-[32px] px-[20px] py-[16px] font-bold text-primary rounded-lg cursor-pointer ${
              tab === "sell" ? "bg-white" : "bg-[#e3f2f9]"
            }`}
            onClick={() => setTab("sell")}
          >
            Sell
          </button>
          <button
            className={`md:px-[32px] px-[20px] py-[16px] font-bold text-primary rounded-lg cursor-pointer ${
              tab === "rent" ? "bg-white" : "bg-[#e3f2f9]"
            }`}
            onClick={() => setTab("rent")}
          >
            Rent
          </button>
        </div>
        <div className="bg-white rounded-lg p-[24px] mt-2 md:w-fit w-full flex flex-wrap gap-2 items-center">
          <div className="flex md:gap-1 flex-1 items-center  md:w-fit w-full py-4 md:border-r ">
            <MdCategory className="text-primary text-base" />
            <Select
              variant="borderless"
              label="Select Category"
              name="category"
              placeholder="Select Category"
              options={[
                { value: "flat", label: "Flat" },
                { value: "penthouse", label: "Pent House" },
                { value: "residential", label: "Residential" },
                { value: "rent", label: "Rent" },
              ]}
            />
          </div>
          <div className="flex md:gap-1 flex-1 items-center  md:w-fit w-full py-4 md:border-r ">
            <MdLocationOn className="text-primary text-base" />
            <Select
              variant="borderless"
              label="Select Country"
              placeholder="Select Country"
              name="country"
              options={[
                { value: "flat", label: "Flat" },
                { value: "penthouse", label: "Pent House" },
                { value: "residential", label: "Residential" },
                { value: "rent", label: "Rent" },
              ]}
            />
          </div>
          <div className="flex md:gap-1 flex-1 items-center  md:w-fit w-full">
            <IoIosHome className="text-primary text-base" />
            <Select
              variant="borderless"
              label="Select City"
              placeholder="Select City"
              name="city"
              options={[
                { value: "flat", label: "Flat" },
                { value: "penthouse", label: "Pent House" },
                { value: "residential", label: "Residential" },
                { value: "rent", label: "Rent" },
              ]}
            />
          </div>
          <div className="bg-primary md:w-fit w-full md:block flex items-center justify-center px-[16px] py-[16px] font-bold text-white rounded-lg cursor-pointer">
            <FaSearch/>
          </div>
        </div>
      </div>
      {/* banner image */}
      <div className="absolute right-0 bottom-0 md:block hidden z-10">
        <div className="md:max-w-[613px] lg:max-h-[822px] object-fill">
          <img src="/banner.webp" alt="banner" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
