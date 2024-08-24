"use client";

import Image from "next/image";

const Blog = () => {
  return (
    <div className="container md:my-[150px] my-10">
      {/* Title */}
      <div className="mb-[60px] flex flex-wrap gap-[28px] justify-between items-end ">
        <div>
          <h2 className="header-2 text-textdark">Latest News From Blogs</h2>
          <p className="paragraph-16 text-borderColor lg:w-[711px] w-full mt-[24px]">
            active home - building will lead to more demand the of the wit
            warehouse space strong cospending and the rise in housing
            construction active...
          </p>
        </div>
        <p className="paragraph-5 text-borderColor underline cursor-pointer">
          Explore All News
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="w-full h-[450px] relative">
          <Image
            src="/1.png"
            width={424}
            height={542}
            alt="blog"
            className="w-full h-full "
          />
          <div className="bg-white bg-opacity-[90%] md:ms-[72px] ms-[20px] md:pb-[16px] ps-[12px] md:ps-[24px] md:pt-[28px] pt-[14px] pe-[12px]  border-l-transparent border-l-[7px] group hover:border-l-primary1 absolute right-0 bottom-0">
            <h5 className="header-5 text-textdark mb-[16px]">
              Summary of real estate
            </h5>
            <p className="mb-[34px] paragraph-16 line-clamp-3 ">
              Strong consumer spending, increased the on demand for warehouse..
            </p>
            <div className="flex flex-wrap justify-between items-center">
                <h6 className="header-6 text-borderColor">January 10, 2023</h6>
                <p className="paragraph-5 underline text-textdark group-hover:text-primary1">Read More</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[450px] relative">
          <Image
            src="/1.png"
            width={424}
            height={542}
            alt="blog"
            className="w-full h-full "
          />
          <div className="bg-white bg-opacity-[90%] md:ms-[72px] ms-[20px] md:pb-[16px] ps-[12px] md:ps-[24px] md:pt-[28px] pt-[14px] pe-[12px]  border-l-transparent border-l-[7px] group hover:border-l-primary1 absolute right-0 bottom-0">
            <h5 className="header-5 text-textdark mb-[16px]">
              Summary of real estate
            </h5>
            <p className="mb-[34px] paragraph-16 line-clamp-3 ">
              Strong consumer spending, increased the on demand for warehouse..
            </p>
            <div className="flex flex-wrap justify-between items-center">
                <h6 className="header-6 text-borderColor">January 10, 2023</h6>
                <p className="paragraph-5 underline text-textdark group-hover:text-primary1">Read More</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[450px] relative">
          <Image
            src="/1.png"
            width={424}
            height={542}
            alt="blog"
            className="w-full h-full "
          />
          <div className="bg-white bg-opacity-[90%] md:ms-[72px] ms-[20px] md:pb-[16px] ps-[12px] md:ps-[24px] md:pt-[28px] pt-[14px] pe-[12px]  border-l-transparent border-l-[7px] group hover:border-l-primary1 absolute right-0 bottom-0">
            <h5 className="header-5 text-textdark mb-[16px]">
              Summary of real estate
            </h5>
            <p className="mb-[34px] paragraph-16 line-clamp-3 ">
              Strong consumer spending, increased the on demand for warehouse..
            </p>
            <div className="flex flex-wrap justify-between items-center">
                <h6 className="header-6 text-borderColor">January 10, 2023</h6>
                <p className="paragraph-5 underline text-textdark group-hover:text-primary1">Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
