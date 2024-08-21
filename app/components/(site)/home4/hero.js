"use client";
import { CiCircleChevRight } from "react-icons/ci";
import { IoChevronDownCircle } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-[url('/hero2.png')] xl:bg-contain bg-cover  xl:h-[763px] h-[650px]  bg-no-repeat w-full mb-[150px]">
      <div className="container flex sm:flex-row flex-col-reverse w-full h-full sm:justify-end sm:items-end ">
        <div className="xl:basis-1/2 basis-full relative container">
          <div className="absolute bottom-[-18px] left-0 w-fit flex flex-col items-center gap-[16px]">
            <button className="button-18 text-textdark">Search Property</button>
            <IoChevronDownCircle className="text-strokeColor !text-[42px] cursor-pointer" />
          </div>
        </div>
        <div className="xl:basis-1/2 basis-full w-full h-full flex flex-col justify-between gap-6">
          {/* <div> */}
          <div className="w-full bg-[rgba(255,255,255,0.5)] bg-blur  pb-[25px] xl:pt-[159px] pt-4">
            <h5 className="header-5 text-borderColor text-end">
              Let’s find with us!
            </h5>
            <div className="xl:flex justify-end items-end">
              <h1 className="header-1 text-textdark text-end xl:w-[515px] w-full uppercase ">
                Your Dream Home{" "}
              </h1>
            </div>
            <div className="xl:flex justify-end items-end">
              <p className="header-5 xl:w-[344px] w-full text-borderColor text-end mt-[7px]">
                Find your dream home with our experts Real Estate Agents
              </p>
            </div>
          </div>
          {/* message */}
          <div className="flex justify-end    ">
            <div className="bg-white pt-[21px]  pb-[14px] md:w-fit w-full sm:ps-[37px] ps-2">
              <h4 className="header-4 text-textdark md:w-[177px] w-full">
                Leave us a message
              </h4>
              <br />
              <div className="flex flex-wrap gap-2 items-center ">
                <div className="w-[381px] h-[2px] bg-borderColor" />
                <button className="button-18">Contact</button>
                <CiCircleChevRight className="text-[42px] text-borderColor cursor-pointer" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
