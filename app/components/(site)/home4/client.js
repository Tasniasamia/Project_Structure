"use client";

import { Rate } from "antd";
import Image from "next/image";

const Client = () => {
    return (
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-[139px] ">
        <div className="col-span-1">
        <h2 className="header-2 ">What our happy clients says about Us</h2>
        <p className="header-6 text-borderColor my-[32px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <button className="flex flex-col gap-1 property">
            <span className="button-18">Jenny Wilson - Client</span>
            <Rate defaultValue={4} disabled className="!text-[18px]"/>
        </button>
         </div>  
         <div className="col-span-1 flex justify-end">
         <div className="lg:max-w-[460px] lg:max-h-[460px] ">
         <Image src="/client.png" width={460} height={460} alt="client" className="w-full lg:h-full h-auto"/>
         </div>
         </div>
        </div>
    );
};

export default Client;