"use client";
import Image from "next/image";
import { CiCircleChevRight } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const Blog = ({ theme1 }) => {
  return (
    <div className="container lg:mb-[150px] mb-10">
      {/* Title */}
      <div className="flex md:flex-row flex-col justify-between lg:items-center  mb-[60px] ">
        <h2 className="header-2 text-textdark ">News From Blog</h2>
        <div className="flex  gap-[16px] items-center lg:justify-end md:justify-start justify-between lg:mt-0 mt-[10px] ">
          <div className={`sm:w-[583px] w-full h-[2px] bg-borderColor`} />
          <button
            className={`button-18 ${
              theme1 ? "dark:text-white" : "text-textdark"
            }`}
          >
            Explore All News
          </button>
          <CiCircleChevRight
            className={`text-[42px] ${
              theme1 ? "dark:text-white" : "text-borderColor"
            } cursor-pointer`}
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-[24px]">
        <div className="lg:basis-1/2 basis-full">
          <div className="w-full h-[358px] relative">
            <Image
              src="/blog1.png"
              width={648}
              height={358}
              className="w-full h-full object-cover"
              alt="blog"
            />
            <ul className="ps-[16.39px] pt-[11.99px] list-none bg-white absolute right-0 bottom-0">
              <li className="flex header-6 gap-[10px] items-center text-borderColor pb-[17px]">
                <FiCalendar className="!text-[16px]" />
                <span>15 Jun 2023</span>
              </li>
              <li className="flex header-6 gap-[10px] items-center text-borderColor">
                <FaRegUser className="!text-[16px]" />
                <span>Admin</span>
              </li>
            </ul>
          </div>
          <div className="flex  justify-between gap-[10px] items-end">
            <h1 className="header-5 mt-[24px] text-textdark lg:w-[405px] w-auto">
              Average U.S. Rental Price Hits A Two-Year High
            </h1>
            <CiCircleChevRight className="text-[42px] text-borderColor"/>
          </div>
        </div>
        <div className="lg:basis-1/2 basis-full">
          <div className="w-full h-[358px] relative">
            <Image
              src="/blog2.png"
              width={648}
              height={358}
              className="w-full h-full object-cover"
              alt="blog"
            />
            <ul className="ps-[16.39px] pt-[11.99px] list-none bg-white absolute right-0 bottom-0">
              <li className="flex header-6 gap-[10px] items-center text-borderColor pb-[17px]">
                <FiCalendar className="!text-[16px]" />
                <span>15 Jun 2023</span>
              </li>
              <li className="flex header-6 gap-[10px] items-center text-borderColor">
                <FaRegUser className="!text-[16px]" />
                <span>Admin</span>
              </li>
            </ul>
          </div>
          <div className="flex  justify-between gap-[10px] items-end">
            <h1 className="header-5 mt-[24px] text-textdark lg:w-[405px] w-auto">
              Average U.S. Rental Price Hits A Two-Year High
            </h1>
            <CiCircleChevRight className="text-[42px] text-borderColor"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
