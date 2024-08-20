"use client";
import Image from "next/image";
import { FiCheckSquare } from "react-icons/fi";

const Plan = ({home3,home2,about}) => {
  return (
    <div className="relative">
    <img src="/plan-svg1.png" alt="svg" className={`w-[109.09px] h-[101.11px] object-fill absolute top-0 left-[24px] ${about && "hidden"}`}/>
    <img src="/plan-svg2.png" alt="svg" className={`md:block hidden  absolute bottom-[94px] left-[196px] z-0 ${about && "hidden"}`}/>
    <img src="/vector.png" alt="svg" className={` absolute  bottom-[167.31px] right-[437.35px]`}/>
    <img src="/element.png" alt="svg" className={` absolute  top-[71px] right-[70.51px]`}/>
    <img src="/group2.png"alt="svg" className="absolute bottom-[78.39px] right-[42.58px]"/>
    <div className="py-[150px] container flex lg:flex-row flex-col justify-between gap-[120px] ">
      {/* <div className="md:basis-1/2 basis-full">
        <Image src="/plan.png" width={560} height={490} alt="plan" className="w-full"/>
      </div> */}
      <img
        src="/plan.png"
        className="w-auto sm:h-[490px] h-auto object-fill relative z-10"
        alt="plan"
      />
      
      <div className="md:basis-1/2 basis-full relative">
        <img src="/group.png"alt="group"className="absolute top-[-26px] -translate-x-1/2 left-1/2"/>
        <h2 className="header-2 mb-[32px] text-[#313234]">
          Planning & Designing Your Dream House
        </h2>
        <p className="ps-[20.74px] border-l-[4px] border-primary1 text-borderColor mb-[32px] paragraph-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap
        </p>
        <ul className="list-none flex flex-col gap-[16px]">
          <li className="flex gap-[12px] items-center">
            <FiCheckSquare className="text-primary1" />
            <span className="paragraph-6 text-[#313234]">
              mordern city location & exceptional lifestyel
            </span>
          </li>
          <li className="flex gap-[12px] items-center">
            <FiCheckSquare className="text-primary1" />
            <span className="paragraph-6 text-[#313234]">
              outstanding property
            </span>
          </li>
          <li className="flex gap-[12px] items-center">
            <FiCheckSquare className="text-primary1" />
            <span className="paragraph-6 text-[#313234]">
              provide the best service for users
            </span>
          </li>
        </ul>
        <button className="px-[32px] py-[16px] bg-primary1 text-white cursor-pointer primary-btn-shape mt-[42px]">
          View More
        </button>
      </div>
    </div>
    </div>
  );
};

export default Plan;
