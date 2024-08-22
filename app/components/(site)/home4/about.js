"use client";
import { CiCircleChevRight } from "react-icons/ci";
import Image from "next/image";

const About = ({theme1}) => {
    return (
        <div className="container lg:my-[150px] my-10 flex lg:flex-row flex-col gap-[136px]">
        <div className="lg:basis-1/2 basis-full">
        <Image src="/about.png" width={536} height={569} alt="about" className="h-[569px] lg:w-auto w-full"/>
        </div>
        <div className="lg:basis-1/2 basis-full">
        <h2 className={`header-2 mb-[32px] ${theme1?"dark:text-white":"text-textdark"}  capitalize `}>Who We Are?</h2>
        <p className={`paragraph-16 ${theme1?"dark:text-white":"text-borderColor"} `}>We are a dynamic and innovative real estate company that provides comprehensive solutions for all your property needs. Whether you are looking for a new home, a commercial space, or an investment opportunity, we have the expertise and resources to help you achieve your goals. We are dedicated to creating long-term relationships with our clients based on trust and professionalism. We are a full-service real estate company that caters to the diverse needs of the real estate market in Bangladesh. We have a team of qualified and experienced professionals who can assist you with buying, selling, renting, or managing any type of property. We are passionate about delivering exceptional service and value to our clients and partners.</p>
        <p className={`paragraph-16 ${theme1?"dark:text-white":"text-borderColor"} mt-[32px]`}>We are a dynamic and innovative real estate company that provides comprehensive solutions for all your property needs. Whether you are looking for a new home, a commercial space, or an investment opportunity, we have the expertise and resources to help you achieve your goals. We are dedicated to creating long-term relationships with our clients based on trust and professionalism.</p>
        <div className="flex flex-wrap gap-[16px] items-center justify-end  mt-[48px]">
      <div className={`md:w-[313px] w-full h-[2px] bg-borderColor`}/>
      <button className={`button-18 ${theme1?"dark:text-white":"text-textdark"}`}>Read More</button>
      <CiCircleChevRight className={`text-[42px] ${theme1?"dark:text-white":"text-borderColor"} cursor-pointer`}/>
      </div>
        </div>
        </div>
    );
};

export default About;