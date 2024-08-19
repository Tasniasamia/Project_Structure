"use client";
import { Dropdown } from "antd";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Button from "../common/button/button";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = ({ theme1 }) => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [theme]);

  return (
    <div className="navbar-sticky-nav top-0 sticky">
      <div
        className={`container h-[77px] flex justify-between items-center 
        ${ theme1 ? "dark:bg-black  bg-white" : "bg-white text-primary"} 
        transition-all duration-300`}
      >
        <div className="flex items-center gap-x-10">
          <Link href="/">
            <img
              src="/icon/logo.svg"
              alt="logo"
              className="md:w-[145px] md:h-[45px] w-[120px] h-[30px]"
            />
          </Link>
          <ul className="list-none md:flex hidden gap-x-[17px] items-center">
            <li>
              <Dropdown
                overlay={
                  <div className="bg-white ps-[8px] pe-[20px] pb-[20px] pt-[16px] text-textprimary flex flex-col gap-y-[16px] custom-shadowHeader rounded-[10px]">
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
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">Listenings</Link>
            </li>
            <li>
              <Dropdown
                overlay={
                  <div className="bg-white ps-[8px] pe-[20px] pb-[20px] pt-[16px] text-textprimary flex flex-col gap-y-[16px] custom-shadowHeader rounded-[10px]">
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
                  <div className="bg-white ps-[16px] pe-[20px] pb-[20px] pt-[16px] text-textprimary flex justify-between items-center custom-shadowHeader rounded-[10px] md:w-[300px] w-full text-[16px]">
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
                        Blog Single
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
                      {theme === "dark" ? (
                        <Button
                          wrapperClassName={"md:block hidden"}
                          onClick={() => setTheme("light")}
                        >
                          Light
                        </Button>
                      ) : (
                        <Button
                          wrapperClassName={"md:block hidden"}
                          onClick={() => setTheme("dark")}
                        >
                          Dark
                        </Button>
                      )}
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
        <div className="flex gap-x-10 items-center">
          <div className="flex gap-x-[8px] items-center">
            <CiSearch className="text-[20px] text-primary" />
            <span className="text-primary font-bold text-[18px]">Search</span>
          </div>
          <div className="md:hidden block">
            {toggle ? (
              <IoMdClose
                className="text-primary text-[20px]"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <FaBars
                className="text-primary text-[20px]"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
          <Button href={"/login"} wrapperClassName={"md:block hidden"}>
            Log In
          </Button>
        </div>
      </div>

      {/* Mobile Screen */}
      {toggle && (
        <div
          className="container md:hidden block bg-white w-full "
          style={{ filter: "drop-shadow(0px  20px 10px rgba(0, 0, 0, 0.20))" }}
        >
          <div className=" flex gap-x-10 items-center ">
            <ul className="list-none flex flex-col h-full md:hidden gap-10 pb-10">
              <li>
                <div className="flex flex-col">
                  <Dropdown
                    overlay={
                      <div className="bg-white ps-[8px] pe-[20px] pb-[20px] pt-[16px] text-textprimary flex flex-col gap-y-[16px] custom-shadowHeader rounded-[10px]">
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
                </div>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about">Listenings</Link>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <div className="bg-white ps-[8px] pe-[20px] pb-[20px] pt-[16px] text-textprimary flex flex-col gap-y-[16px] custom-shadowHeader rounded-[10px]">
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
                    <div className="bg-white ps-[16px] pe-[20px] pb-[20px] pt-[16px] text-textprimary flex justify-between items-center custom-shadowHeader rounded-[10px] md:w-[300px] w-full text-[16px]">
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
                          Blog Single
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
                        {theme === "dark" ? (
                          <Button
                            wrapperClassName={"md:block hidden"}
                            onClick={() => setTheme("light")}
                          >
                            Light
                          </Button>
                        ) : (
                          <Button
                            wrapperClassName={"md:block hidden"}
                            onClick={() => setTheme("dark")}
                          >
                            Dark
                          </Button>
                        )}
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
      )}
    </div>
  );
};

export default Header;
