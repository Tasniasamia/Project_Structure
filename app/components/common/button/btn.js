"use client";
const Btn = ({ children, className }) => {
  return (
    <div
      className={` w-[187px] h-[56px] bg-[url('/btn-shape.png')] xl:bg-contain bg-cover flex justify-center items-center text-white cursor-pointer     bg-no-repeat`}
    >
      {children}
    </div>
  );
};

export default Btn;
