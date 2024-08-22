"use client";
import Image from "next/image";

const Work = ({ theme1 }) => {
  return (
    <div className="container lg:mb-[150px] mb-10">
      <h2
        className={`text-center ${
          theme1 ? "dark:text-white" : "text-textdark"
        } header-2`}
      >
        How It Works
      </h2>
      <p
        className={`paragraph-16 text-center pt-[24px] pb-[60px] ${
          theme1 ? "dark:text-white" : "text-textdark"
        }`}
      >
        A great platform to buy, sell and rent your properties without any agent
        or commissions.
      </p>
      <div className={`grid lg:grid-cols-3 grid-cols-1 gap-[26px]`}>
        <div className="px-[30px] py-[23px] bg-mainbg1">
          <Image
            src="/home.png"
            width={48}
            height={48}
            alt="home"
            className="w-[48px] h-[48px] object-fill"
          />
          <div className="pt-[26px]">
            <h5 className="flex gap-[30px] ">
              <span
                className={`${
                  theme1 ? "dark:text-white" : "text-footertextColor"
                } header-5`}
              >
                01
              </span>
              <span
                className={`${
                  theme1 ? "dark:text-white" : "text-footertextColor"
                } header-4 font-bold `}
              >
                Evaluate Property
              </span>
            </h5>
            <p
              className={`${
                theme1 ? "dark:text-white" : "text-footertextColor"
              } paragraph-16 pt-[16px] border-t border-footertextColor mt-[40px]`}
            >
              The sales comparison approach, which compares similar properties
              that have sold or rented in the same area within a given time
              period.
            </p>
          </div>
        </div>
        <div className="px-[30px] py-[23px] bg-mainbg1">
          <Image
            src="/man.png"
            width={48}
            height={48}
            alt="home"
            className="w-[48px] h-[48px] object-fill"
          />
          <div className="pt-[26px]">
            <h5 className="flex gap-[30px] ">
              <span
                className={`${
                  theme1 ? "dark:text-white" : "text-footertextColor"
                } header-5`}
              >
                02
              </span>
              <span
                className={`${
                  theme1 ? "dark:text-white" : "text-footertextColor"
                } header-4 font-bold `}
              >
                Meeting With Agent
              </span>
            </h5>
            <p
              className={`${
                theme1 ? "dark:text-white" : "text-footertextColor"
              } paragraph-16 pt-[16px] border-t border-footertextColor mt-[40px]`}
            >
              Do your research. Before you meet with an agent, do some homework on the market, the property, and the agent.
            </p>
          </div>
        </div>
        <div className="px-[30px] py-[23px] bg-mainbg1">
          <Image
            src="/handseck.png"
            width={48}
            height={48}
            alt="home"
            className="w-[48px] h-[48px] object-fill"
          />
          <div className="pt-[26px]">
            <h5 className="flex gap-[30px] ">
              <span
                className={`${
                  theme1 ? "dark:text-white" : "text-footertextColor"
                } header-5`}
              >
                03
              </span>
              <span
                className={`${
                  theme1 ? "dark:text-white" : "text-footertextColor"
                } header-4 font-bold `}
              >
                Close The Deal
              </span>
            </h5>
            <p
              className={`${
                theme1 ? "dark:text-white" : "text-footertextColor"
              } paragraph-16 pt-[16px] border-t border-footertextColor mt-[40px]`}
            >
             The sales comparison approach, which compares similar properties that have sold or rented in the same area within a given time period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
