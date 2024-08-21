// "use client";

const Hero = () => {
  return (
    <div className="bg-[url('/hero2.png')] bg-contain h-[763px]  bg-no-repeat w-full">
      <div className="container flex w-full  !">
      <div className="basis-1/2"></div>
      <div className="basis-1/2 w-full  relative">
      <div className="w-full bg-[rgba(255,255,255,0.5)] bg-blur pt-[159px] pb-[25px]">
        <h5 className="header-5 text-borderColor text-end">Let’s find with us!</h5>
         <div className="flex justify-end items-end">         
         <h1 className="header-1 text-textdark text-end w-[515px] ">Your Dream Home </h1>
         </div>
         </div>
         <div className="flex justify-end items-end">         
          <p className="header-5 md:w-[344px] w-full text-borderColor text-end mt-[7px]">Find your dream home with our experts Real Estate Agents</p>
         </div>
       </div>
      </div>
    </div>
  );
};

export default Hero;
