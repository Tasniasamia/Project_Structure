"use client";
import { Dropdown } from "antd";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="container md:h-[77px] flex justify-between items-center">
      <div className="flex items-center gap-x-[17px] ">
        <Link href="/">
          <img
            src="/icon/logo.svg"
            alt="logo"
            className="md:w-[145px] md:h-[45px] w-[120px] h-[30px]"
          />
        </Link>
        <ul className="list-none flex gap-x-[17px] items-center text-[20px]">
          <li>
            <Dropdown
              overlay={
                <div className="bg-white bg-opacity-0 ps-[8px] pe-[20px] pb-[20px] pt-[16px] text-textprimary  flex flex-col gap-y-[16px] custom-shadowHeader rounded-[10px]">
                  <Link
                    href="/"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Home Page 1
                  </Link>
                  <Link
                    href="/home2"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Home Page 2
                  </Link>
                </div>
              }
            >
              <div className="flex items-center gap-2">
                <span>Home</span>
                <IoIosArrowDown />
              </div>
            </Dropdown>
          </li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/about">Listenings</Link></li>
          <li>
            <Dropdown
              overlay={
                <div className="bg-white bg-opacity-0 ps-[8px] pe-[20px] pb-[20px] pt-[16px] text-textprimary  flex flex-col gap-y-[16px] custom-shadowHeader rounded-[10px]">
                  <Link
                    href="/agent-list"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Agent List
                  </Link>
                  <Link
                    href="/agent-profile"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Agents Profile
                  </Link>
                </div>
              }
            >
              <div className="flex items-center gap-2">
                <span>Agents</span>
                <IoIosArrowDown />
              </div>
            </Dropdown>
          </li>
          <li>
            <Dropdown
              overlay={
                <div className="bg-white bg-opacity-0 ps-[8px] pe-[20px] pb-[20px] pt-[16px] text-textprimary  flex justify-between items-center custom-shadowHeader rounded-[10px] md:w-[350px] w-full text-[20px]">
                  <div className="flex flex-col gap-y-[16px]">
                  <Link
                    href="/blog"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/blog-singel"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Blog Singel
                  </Link>
                  <Link
                    href="/contact"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/license"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    License
                  </Link>
                  </div>
                  <div className="flex flex-col gap-y-[16px]">
                  <Link
                    href="/login"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/otp"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Enter OTP
                  </Link>
                  <Link
                    href="/new-password"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    New Password
                  </Link>
                  <Link
                    href="/reset-password"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Reset Password
                  </Link>
                  <Link
                    href="/create-account"
                    className="font-semibold hover:text-textheaderHover duration-300 transition-colors ease-in-out"
                  >
                    Create Account
                  </Link>
                  </div>
                </div>
              }
            >
              <div className="flex items-center gap-2">
                <span>Other Pages</span>
                <IoIosArrowDown />
              </div>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
