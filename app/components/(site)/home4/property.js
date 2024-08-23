"use client";
import { CiCircleChevRight } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { BsBoundingBoxCircles } from "react-icons/bs";
import Image from "next/image";
import { ImStarEmpty } from "react-icons/im";
import { Flex, Rate } from 'antd';

const Property = ({ theme1 }) => {

const customIcons = {
  1: <ImStarEmpty className="text-[14px]"/>,
  2: <ImStarEmpty className="text-[14px]"/>,
  3: <ImStarEmpty className="text-[14px]"/>,
  4: <ImStarEmpty className="text-[14px]"/>,
  5: <ImStarEmpty className="text-[14px]"/>,
};
  return (
    <div className="lg:pb-[196px] pb-10">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center container mt-[32px] ">
        <h2 className="header-2 text-textdark ">Featured Properties</h2>
        <div className="flex  gap-[16px] items-center md:justify-end justify-between lg:mt-0 mt-[10px] ">
          <div className={`sm:w-[380px] w-full h-[2px] bg-borderColor`} />
          <button
            className={`button-18 ${
              theme1 ? "dark:text-white" : "text-textdark"
            }`}
          >
            Explore All Property
          </button>
          <CiCircleChevRight
            className={`text-[42px] ${
              theme1 ? "dark:text-white" : "text-borderColor"
            } cursor-pointer`}
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:relative h-auto">
        <div className="lg:basis-1/2  basis-full mt-[32px]  ">
        <div className="w-full container lg:absolute  lg:left-1/2 lg:-translate-x-1/2">
          <div>
            <p className="paragraph-16 text-borderColor mb-[42.06px] xl:w-[560px] lg:w-[500px] w-full">
              A residential project that offers affordable and spacious
              apartments with modern amenities and scenic views. The project
              aims to provide quality housing for middle-income families in a
              convenient and safe location.
            </p>
            <div className="mt-[42.06px] header-5 flex items-center gap-[32px]">
              <span className="text-textyellow">Property for Rent</span>
              <span>Property for Seals</span>
            </div>
          </div>
          <div>
            <h4 className="header-4  mt-[238.98px]">Nice Apartment for Rent</h4>
            <p className="paragraph-16 text-borderColor mb-[24px] ">
              New Jersey, New York{" "}
            </p>
            <ul className="mt-[24px] list-none flex flex-wrap gap-[16px]">
              <li className="header-6 flex items-center gap-[8px]">
                <FaHome className="text-textyellow text-[18px]" />
                <span>5 Beds</span>
              </li>
              <li className="header-6 flex items-center gap-[8px]">
                <MdBathtub className="text-textyellow text-[18px]" />
                <span>3 Baths</span>
              </li>
              <li className="header-6 flex items-center gap-[8px]">
                <BsBoundingBoxCircles className="text-textyellow text-[18px]" />
                <span>710 sqft</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="lg:basis-1/2 basis-full mt-[48px] relative property">
        <Image src="/property.png" alt="property" width={979} height={560} className="lg:h-[560px] h-auto w-full" />
        <div className="lg:pt-[22px] pt-[10px] lg:pb-[28px] pb-[10px] lg:pe-[61px] pe-[10px] lg:ps-0 ps-[4px] absolute bottom-0 left-0 bg-white">
        <h6 className="header-6 text-borderColor">Price</h6>
        <button className="button-18 text-textdark">$125.950’000</button>
        <h6 className="header-6 text-borderColor">Ratings</h6>
        <Rate defaultValue={3} character={({ index = 0 }) => customIcons[index + 1]} disabled allowHalf/>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
