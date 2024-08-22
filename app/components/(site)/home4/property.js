"use client";
import { CiCircleChevRight } from "react-icons/ci";

const Property = ({ theme1 }) => {
  return (
    <div>
      <div className="flex justify-between items-center container mt-[32px] bg-red-300">
        <h2 className="header-2 text-textdark ">Featured Properties</h2>
        <div className="flex flex-wrap gap-[16px] items-center justify-end ">
          <div className={`md:w-[380px] w-full h-[2px] bg-borderColor`} />
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
      <div className="flex gap-[109px]">
        <div className="lg:basis-1/2 w-full">
          <div>
          <p className="paragraph-16 text-borderColor mb-[42.06px]">
            A residential project that offers affordable and spacious apartments
            with modern amenities and scenic views. The project aims to provide
            quality housing for middle-income families in a convenient and safe
            location.
          </p>
          <div className="mt-[42.06px] header-5 flex items-center gap-[32px]">
            <span className="text-textyellow">Property for Rent</span>
            <span>Property for Seals</span>
          </div>
          </div>
          <div>
            <h4 className="header-4">Nice Apartment for Rent</h4>
            <p className="paragraph-16 text-borderColor mb-[24px]">New Jersey, New York </p>
            <ul className="mt-[24px] list-none flex flex-wrap gap-[16px]">
                <li className="header-6"><span>3 Bed</span></li>
            </ul>
          </div>
        </div>
        <div className="lg:basis-1/2 basis-full"></div>
      </div>
    </div>
  );
};

export default Property;
