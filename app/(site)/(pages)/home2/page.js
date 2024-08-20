"use client";
import Banner from "../../../components/(site)/home1/banner/banner";
import Hero from "../../../components/(site)/home2/hero";
import Plan from "../../../components/(site)/home2/plan";

const page = () => {
    return (
        <div>
        <Hero home2={true}/>
        <Plan/>
        
        </div>
    );
};

export default page;