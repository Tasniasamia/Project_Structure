"use client";
import About from "../../components/(site)/home4/about";
import Hero from "../../components/(site)/home4/hero";
import Place from "../../components/(site)/home4/place";
import Property from "../../components/(site)/home4/property";
import Work from "../../components/(site)/home4/work";

const page = () => {
    return (
        <div>
           <Hero/>
           <Place/>
           <About/>
           <Work/>
           <Property/>
        </div>
    );
};

export default page;