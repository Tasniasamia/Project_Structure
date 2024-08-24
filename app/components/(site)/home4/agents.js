"use client";

import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Agents = () => {
  return (
    <div className="container h-auto z-10 mb-[60px]">
      <h2 className="header-2 text-center mb-[60px]">Meet Our Agents</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-6 justify-items-center"> {/* Updated justify-center */}
        <div className="bg-white h-[360px] ">
          <div className="group h-fit">
            <div className="relative z-10 w-[270px] h-[270px] group-hover:h-[360px] duration-150 transition-all">
              <Image
                src="/client.png"
                alt="client"
                width={270}
                height={360}
                className="w-full h-full object-fill rounded-full group-hover:rounded-[100px] cursor-pointer duration-150 transition-all"
              />
              <div className="flex flex-col items-center justify-between absolute pt-[19px] z-20 top-0 h-full w-full opacity-0 group-hover:opacity-100 duration-150 transition-all">
                <h5 className="button-18 text-white">Mr. Dorothy</h5>
                <div className="pb-[36px]">
                  <p className="paragraph-16 text-white hover:underline text-center duration-150 transition-all">
                    Chief Executive
                  </p>
                  <div className="pt-[24px] flex gap-1 justify-center items-center">
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaFacebookF />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <TbBrandTwitterFilled />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaInstagram />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[360px] ">
          <div className="group h-fit">
            <div className="relative z-10 w-[270px] h-[270px] group-hover:h-[360px] duration-150 transition-all">
              <Image
                src="/client.png"
                alt="client"
                width={270}
                height={360}
                className="w-full h-full object-fill rounded-full group-hover:rounded-[100px] cursor-pointer duration-150 transition-all"
              />
              <div className="flex flex-col items-center justify-between absolute pt-[19px] z-20 top-0 h-full w-full opacity-0 group-hover:opacity-100 duration-150 transition-all">
                <h5 className="button-18 text-white">Mr. Dorothy</h5>
                <div className="pb-[36px]">
                  <p className="paragraph-16 text-white hover:underline text-center duration-150 transition-all">
                    Chief Executive
                  </p>
                  <div className="pt-[24px] flex gap-1 justify-center items-center">
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaFacebookF />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <TbBrandTwitterFilled />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaInstagram />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[360px] ">
          <div className="group h-fit">
            <div className="relative z-10 w-[270px] h-[270px] group-hover:h-[360px] duration-150 transition-all">
              <Image
                src="/client.png"
                alt="client"
                width={270}
                height={360}
                className="w-full h-full object-fill rounded-full group-hover:rounded-[100px] cursor-pointer duration-150 transition-all"
              />
              <div className="flex flex-col items-center justify-between absolute pt-[19px] z-20 top-0 h-full w-full opacity-0 group-hover:opacity-100 duration-150 transition-all">
                <h5 className="button-18 text-white">Mr. Dorothy</h5>
                <div className="pb-[36px]">
                  <p className="paragraph-16 text-white hover:underline text-center duration-150 transition-all">
                    Chief Executive
                  </p>
                  <div className="pt-[24px] flex gap-1 justify-center items-center">
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaFacebookF />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <TbBrandTwitterFilled />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaInstagram />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[360px] ">
          <div className="group h-fit">
            <div className="relative z-10 w-[270px] h-[270px] group-hover:h-[360px] duration-150 transition-all">
              <Image
                src="/client.png"
                alt="client"
                width={270}
                height={360}
                className="w-full h-full object-fill rounded-full group-hover:rounded-[100px] cursor-pointer duration-150 transition-all"
              />
              <div className="flex flex-col items-center justify-between absolute pt-[19px] z-20 top-0 h-full w-full opacity-0 group-hover:opacity-100 duration-150 transition-all">
                <h5 className="button-18 text-white">Mr. Dorothy</h5>
                <div className="pb-[36px]">
                  <p className="paragraph-16 text-white hover:underline text-center duration-150 transition-all">
                    Chief Executive
                  </p>
                  <div className="pt-[24px] flex gap-1 justify-center items-center">
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaFacebookF />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <TbBrandTwitterFilled />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaInstagram />
                    </div>
                    <div className="text-[16px] cursor-pointer p-3 rounded-full text-borderColor hover:text-primary1 bg-transparent hover:bg-white hover:border-white border-borderColor border-2 duration-150 transition-all">
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <p className="header-5 text-center text-primary1 hover:underline">View All</p>
    </div>
  );
};

export default Agents;
