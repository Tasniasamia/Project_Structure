"use client";
import Blog from "../../../components/(site)/home3/blog";
import Hero from "../../../components/(site)/home3/hero";


const page = () => {
    return (
        <div>
            {/* <Hero home3={true}/> */}
            <Hero/>
            <Blog/>
        </div>
    );
};

export default page;