"use client";

import { Button, Dropdown, Menu, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const menu = (
    <Menu className="paragraph-6 text-textdark w-fit ">
      <Menu.Item>
        <Link className="hover:bg-white/86.67%" href="/">
          Home 1
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="hover:bg-white/86.67%" href="/home2">
          Home 2
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="hover:bg-white/86.67%" href="/home3">
          Home 3
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="hover:bg-white/86.67%" href="/home4">
          Home 4
        </Link>
      </Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu className="paragraph-6 text-textdark w-fit ">
      <Menu.Item>
        <Link className="hover:bg-white/86.67%" href="/agents">
          Agents
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="hover:bg-white/86.67%" href="/news">
          News
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="hover:bg-white/86.67%" href="/about">
          About
        </Link>
      </Menu.Item>
    </Menu>
  );
  const user = false;
  const [toggle, setToggle] = useState(false);
  return (
    <div className="lg:mx-0 mx-4">
      <div
        className="container lg:bg-white lg:bg-opacity-[86.67%] bg-[#ebedf9] rounded-[10px] mt-7 relative z-30 "
        style={{ filter: "drop-shadow(0px 4px 25px -1px rgba(0, 0, 0, 0.2))" }}
      >
        <div className="flex justify-between items-center ">
          <Image
            src="/logo-homestick.png"
            height={90}
            width={120}
            className="lg:h-[90px]  h-[70px] w-[100px] lg:w-[120px] mb-3 mt-[4px] object-cover"
            alt="logo"
          />
          <div className="lg:flex hidden gap-16 items-center">
            <Dropdown overlay={menu} trigger={["hover"]} className="">
              <div className="flex items-center  text-textdark group">
                <span className="paragraph-6  group-hover:text-primary1 duration-150 transition-colors">
                  Home
                </span>
                <FaPlus className="!text-[10px] text-textdark group-hover:text-primary1 duration-150 transition-colors" />
              </div>
            </Dropdown>
            <Link
              href="/property"
              className="paragraph-6 text-textdark hover:text-primary1 duration-150 transition-colors"
            >
              Property
            </Link>
            <Link
              href="/pricing"
              className="paragraph-6 text-textdark hover:text-primary1 duration-150 transition-colors"
            >
              Pricing
            </Link>
            <Dropdown overlay={menu2} trigger={["hover"]}>
              <div className="flex items-center  text-textdark group ">
                <span className="paragraph-6  group-hover:text-primary1 duration-150 transition-colors">
                  Pages
                </span>
                <FaPlus className="!text-[10px] text-textdark group-hover:text-primary1 duration-150 transition-colors" />
              </div>
            </Dropdown>
            <Link
              href="/"
              className="paragraph-6 text-textdark  hover:text-primary1 duration-150 transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-[22.14px] ">
            <Select
              variant="borderless"
              className="w-fit "
              options={[
                { label: "EN", value: "en" },
                { label: "BN", value: "bn" },
              ]}
              value="EN"
            />
            {user ? (
              <FaRegUser className="text-base text-textdark" />
            ) : (
              <span className="text-textdark paragraph-6  hover:text-primary1 duration-150 transition-colors cursor-pointer">
                Login
              </span>
            )}
            {toggle ? (
              <IoMdClose
                className="paragraph-6 lg:hidden block"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            ) : (
              <FaBars
                className="paragraph-6 lg:hidden block"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            )}
            <Dropdown
              overlay={menu2}
              trigger={["hover"]}
              className="lg:flex hidden "
            >
              <div className="flex items-center text-textdark cursor-pointer group">
                <span className="paragraph-6  group-hover:text-primary1 duration-150 transition-colors">
                  Add Property
                </span>
                <FaPlus className="!text-[10px] text-textdark ml-1  group-hover:text-primary1 duration-150 transition-colors" />
              </div>
            </Dropdown>
          </div>
        </div>
        {toggle && (
          <div className=" top-[77px] lg:hidden flex flex-col gap-6 absolute  z-40 h-auto left-0 bg-[#ebedf9] pt-2 w-full container rounded-b-[10px]">
            <Dropdown overlay={menu} trigger={["hover"]} className="">
              <div className="flex items-center  text-textdark group">
                <span className="paragraph-6  group-hover:text-primary1 duration-150 transition-colors">
                  Home
                </span>
                <FaPlus className="!text-[10px] text-textdark group-hover:text-primary1 duration-150 transition-colors" />
              </div>
            </Dropdown>
            <Link
              href="/property"
              className="paragraph-6 text-textdark hover:text-primary1 duration-150 transition-colors"
            >
              Property
            </Link>
            <Link
              href="/pricing"
              className="paragraph-6 text-textdark hover:text-primary1 duration-150 transition-colors"
            >
              Pricing
            </Link>
            <Dropdown overlay={menu2} trigger={["hover"]}>
              <div className="flex items-center  text-textdark group ">
                <span className="paragraph-6  group-hover:text-primary1 duration-150 transition-colors">
                  Pages
                </span>
                <FaPlus className="!text-[10px] text-textdark group-hover:text-primary1 duration-150 transition-colors" />
              </div>
            </Dropdown>
            <Link
              href="/"
              className="paragraph-6 text-textdark  hover:text-primary1 duration-150 transition-colors"
            >
              Contact
            </Link>
            <button className="mb-6 w-full py-2 bg-primary1 text-white text-center rounded cursor-pointer">
              <span className="flex items-center justify-center  text-textdark group gap-2">
                <span className="paragraph-6 text-white">
                  Add Property
                </span>
                <FaPlus className="!text-[10px] text-white" />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
