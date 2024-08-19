"use client";

import { Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

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
  return (
    <div
      className="container bg-white bg-opacity-[86.67%] rounded-[10px] mt-7"
      style={{ filter: "drop-shadow(0px 4px 25px -1px rgba(0, 0, 0, 0.2))" }}
    >
      <Image
        src="/logo-homestick.png"
        height={90}
        width={120}
        className="h-[90px] w-[120px]"
        alt="logo"
      />
      <div className="pb-3"></div>
      <div className="flex gap-16 items-center">
        <Dropdown overlay={menu} trigger={["hover"]}>
          <div className="flex items-center  text-textdark">
            <span className="paragraph-6">Home</span>
            <FaPlus className="!text-[10px] text-textdark" />
          </div>
        </Dropdown>
        <Link href="/property" className="paragraph-6 text-textdark">Property</Link>

        <Link href="/pricing" className="paragraph-6 text-textdark">Pricing</Link>

        <Dropdown overlay={menu2} trigger={["hover"]}>
          <div className="flex items-center  text-textdark">
            <span className="paragraph-6">Pages</span>
            <FaPlus className="!text-[10px] text-textdark" />
          </div>
        </Dropdown>
        <Link href="/" className="paragraph-6 text-textdark">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
