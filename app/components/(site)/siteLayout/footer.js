"use client";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandTwitterFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-secondary1 relative mt-2">
      <img src="/footer-svg.png" alt="footer-bg" className="absolute top-[249px] right-[79.17px] 2xl:block hidden 2xl:w-[118.11px] object-fill 2xl:h-[106px] w-[80px] h-[70px] " />
      <div className="container">
        <div className="pt-[96px] flex md:flex-row flex-col justify-between gap-2">
          <div>
            <p className="header-5 mb-[18px] text-white">Become an Agent</p>
            <div className="flex flex-wrap !text-white items-center gap-2">
              <div className="w-[231px] h-[2px] bg-borderColor"></div>
              <p className="paragraph-5 capitalize">Sign up today</p>
              <button className="w-[42px] h-[42px] group hover:bg-primary1 border border-borderColor rounded-full relative duration-300 transition-all">
                <LuChevronRight className="text-borderColor group-hover:text-white text-[18px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 transition-all" />
              </button>
            </div>
          </div>
          <div className="flex  gap-2 basis-3/3">
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-[50px] bg-transparent border border-borderColor text-borderColor hover:bg-white hover:text-textdark p-5 basis-3/4"
              />
              <p className="paragraph-16 text-footertextColor">
                We care about your data in our privacy policy
              </p>
            </div>
            <button className="px-[32px] bg-primary1 h-fit py-[13px] cursor-pointer text-white basis-1/4">
              Subscribe
            </button>
          </div>
        </div>
        <div className="py-[70px] flex flex-wrap gap-2 justify-between items-center border-b border-borderColor">
          <img
            src="/logo-dark.png"
            alt="logo"
            className="w-[100px] h-[70px] md:[120px] md:h-[99.66px] object-fill"
          />
          <div className="flex flex-wrap md:gap-[20px] gap-[10px] items-center">
            <Link
              href="/overview"
              className="text-footertextColor hover:text-primary1 duration-300 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/features"
              className="text-footertextColor hover:text-primary1 duration-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-footertextColor hover:text-primary1 duration-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/help"
              className="text-footertextColor hover:text-primary1 duration-300 transition-colors"
            >
              Help
            </Link>
            <Link
              href="/privacy"
              className="text-footertextColor hover:text-primary1 duration-300 transition-colors"
            >
              Privacy
            </Link>
          </div>
          <div className="flex flex-wrap gap-[13px] items-center">
            <a href="">
              <FaLinkedinIn className="text-[23.33px] text-footertextColor hover:text-primary1 duration-300 transition-colors" />
            </a>
            <a href="">
              <PiInstagramLogoFill className="text-[23.33px] text-footertextColor hover:text-primary1 duration-300 transition-colors" />
            </a>{" "}
            <a href="">
              <FaFacebookF className="text-[23.33px] text-footertextColor hover:text-primary1 duration-300 transition-colors" />
            </a>
            <a href="">
              <TbBrandTwitterFilled className="text-[23.33px] text-footertextColor hover:text-primary1 duration-300 transition-colors" />
            </a>
          </div>
        </div>
        <p className="pt-[32px] pb-[67.33px] text-borderColor text-center">
          Copyright ©_2023 Homestic
        </p>
      </div>
    </div>
  );
};

export default Footer;
