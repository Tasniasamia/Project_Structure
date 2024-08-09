"use client";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import Link from "next/link";

const footer = () => {
  return (
    <div className="bg-white ">
      <div className="container ">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 py-[120px] gap-6">
          <div className="lg:col-span-4 cols-span-1 text-secondary ">
            <Link href="/">
              <img
                src="/icon/logo.svg"
                alt="logo"
                className="md:w-[145px] md:h-[45px] w-[120px] h-[30px] mb-[30px]"
              />
            </Link>
            <div className="mb-[40px]">
              <p className="  md:w-[280px] mb-[16px]">
                59 Bervely Hill Ave, Brooklyn Town, New York, NY 5630, CA, US
              </p>
              <p>+056 686 56 56 98</p>
              <p>info@staticmania.com</p>
            </div>
            <div className="flex gap-[12px] items-center">
              <a href="https://www.facebook.com/">
                <PiFacebookLogo className="text-secondary !text-[30px] hover:-translate-y-1 duration-300 transition-transform" />
              </a>
              <a href="https://www.facebook.com/">
                <PiTwitterLogo className="text-secondary !text-[30px] hover:-translate-y-1 duration-300 transition-transform" />
              </a>
              <a href="https://www.facebook.com/">
                <PiInstagramLogo className="text-secondary !text-[30px] hover:-translate-y-1 duration-300 transition-transform" />
              </a>
              <a href="https://www.facebook.com/">
                <PiLinkedinLogo className="text-secondary !text-[30px] hover:-translate-y-1 duration-300 transition-transform" />
              </a>
              <a href="https://www.facebook.com/">
                <PiYoutubeLogo className="text-secondary !text-[30px] hover:-translate-y-1 duration-300 transition-transform" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-1  ">
            <h5 className="text-[20px] font-bold mb-[30px] text-primary">
              Pages
            </h5>
            <ul className="list-none  text-[16px]">
              <li className="footer-link ">
                <Link href="">Home Page 1</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Home Page 2</Link>
              </li>
              <li className="footer-link ">
                <Link href="">About</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Contact</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Search</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-1  ">
            <h5 className="text-[20px] font-bold mb-[30px] text-primary">
              Company Details
            </h5>
            <ul className="list-none  text-[16px]">
              <li className="footer-link ">
                <Link href="">Listening</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Property details</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Agent List</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Agent Profile</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-1 ">
            <h5 className="text-[20px] font-bold mb-[30px] text-primary">
              Other Pages{" "}
            </h5>
            <ul className="list-none  text-[16px]">
              <li className="footer-link ">
                <Link href="">Blog</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Blog-single</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Privacy Policy</Link>
              </li>
              <li className="footer-link ">
                <Link href="">License</Link>
              </li>
              <li className="footer-link ">
                <Link href="">404 Page</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-1 ">
            <h5 className="text-[20px] font-bold mb-[30px] text-primary">
              Others
            </h5>
            <ul className="list-none  text-[16px]">
              <li className="footer-link ">
                <Link href="">Log In</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Enter OTP</Link>
              </li>
              <li className="footer-link ">
                <Link href="">New Password</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Reset Password</Link>
              </li>
              <li className="footer-link ">
                <Link href="">Create Account</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="font-semibold text-secondary  pb-[80px] lg:text-start text-center">
          RealStatic Limited © 2024
        </p>
      </div>
    </div>
  );
};

export default footer;
