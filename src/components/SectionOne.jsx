import { useState } from "react";
import Wrapper from "./Wrapper";

const SectionOne = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="relative flex flex-col items-center justify-start w-full h-full xl:h-screen max-h-[1069px] py-2 px-4 xl:px-12 text-base text-white bg-black ">
      <header className="flex z-10 items-center justify-start mt-1">
        <a href="/" className="no-underline cursor-pointer">
          <img className="w-[170px] h-12" alt="" src="/logo.svg" />
        </a>
        <div className="block md:hidden relative w-8 h-8 cursor-pointer mr-6">
          <img className="w-full" alt="card" src="/card.svg" />
          <div className="absolute top-[-14px] right-[-20px] w-6 h-5 rounded-lg bg-white flex items-center justify-center">
            <div className="text-center text-gray-200 text-[11px]">0</div>
          </div>
        </div>
        <div
          onClick={() => setActive(!active)}
          className={`${
            active && "hidden"
          } cursor-pointer md:hidden w-10 h-7 rounded-md flex flex-col justify-evenly items-center bg-black`}
        >
          <div className="w-[75%] h-[3px] rounded-md bg-white" />
          <div className="w-[75%] h-[3px] rounded-md bg-white" />
        </div>
        <nav className="hidden md:flex flex-col pt-8 xl:pt-0 xl:flex-row items-center justify-between gap-6  xl:gap-[160px]">
          <div className="flex  items-center justify-start gap-6 xl:gap-[60px] ">
            <a
              href="/"
              className="text-base no-underline cursor-pointer text-gold"
            >
              Home
            </a>
            <a
              href="/"
              className="text-base text-white no-underline cursor-pointer"
            >
              About
            </a>
            <a
              href="/"
              className="text-base text-white no-underline cursor-pointer "
            >
              Team
            </a>
            <a
              href="/"
              className="text-base text-white no-underline cursor-pointer"
            >
              Shop
            </a>
            <a
              href="/"
              className="text-base text-white no-underline cursor-pointer "
            >
              Pages
            </a>
          </div>
          <div className="flex items-center justify-end flex-1 gap-10 xl:justify-start">
            <div className="relative w-8 h-8 cursor-pointer">
              <img className="w-full" alt="card" src="/card.svg" />
              <div className="absolute top-[-14px] right-[-20px] w-6 h-5 rounded-lg bg-white flex items-center justify-center">
                <div className="text-center text-gray-200 text-[11px]">0</div>
              </div>
            </div>
            <button className="w-auto px-8 py-6 whitespace-nowrap cursor-pointer text-center text-lg bg-transparent text-white border-[1px] border-solid border-white">
              Contact Us
            </button>
          </div>
        </nav>

        <nav
          className={`${
            !active && "hidden"
          } w-[300px] z-10 absolute top-0 right-0 bg-black pl-8 pr-4 py-4 md:hidden flex flex-col items-end justify-between gap-6`}
        >
          <div
            onClick={() => setActive(!active)}
            className="cursor-pointer relative  md:hidden w-10 h-8 rounded-md flex flex-col justify-evenly items-center bg-black"
          >
            <div className="w-[80%] h-[3px] rounded-md bg-gray-300 [transform:_rotate(-45deg)]"></div>
            <div className="w-[80%] absolute h-[3px] rounded-md bg-gray-300 [transform:_rotate(45deg)]"></div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="text-base no-underline cursor-pointer text-gold"
            >
              Home
            </a>
            <a
              href="/"
              className="text-base text-white no-underline cursor-pointer"
            >
              About
            </a>
            <a
              href="/"
              className="text-base text-white no-underline cursor-pointer "
            >
              Team
            </a>
            <a
              href="/"
              className="text-base text-white no-underline cursor-pointer"
            >
              Shop
            </a>
            <a
              href="/"
              className="text-base text-white no-underline cursor-pointer "
            >
              Pages
            </a>
          </div>
          <button className="w-auto px-6 py-4 whitespace-nowrap cursor-pointer text-center text-lg bg-transparent text-white border-[1px] border-solid border-white">
            Contact Us
          </button>
        </nav>
      </header>
      <div className="relative z-[1] flex flex-1 items-center justify-start gap-[14px] mt-4 md:mt-0 text-[11px] text-lightslategray">
        <div className="absolute left-[-40px] top w-[25px] h-[370px] hidden md:flex flex-col items-start justify-between">
          <div className="text-[11px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
            TWITCH
          </div>
          <div className="text-[11px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
            INSTAGRAM
          </div>
          <div className="text-[11px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
            FACEBOOK
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 items-center xl:justify-start xl:flex-row">
          <div className="flex flex-col items-center justify-start gap-[16px]">
            <div className="flex items-center justify-start gap-[8px]">
              <img className="w-8 h-8" alt="fire" src="/fire.svg" />
              <div className="leading-[16px] text-base uppercase text-deepskyblue w-[203px]">
                FUTURE OF <br className="md:hidden" />
                eSPORTS
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-5 md:gap-[53px]  text-white">
              <div className="flex flex-col items-start justify-start gap-5 md:gap-[43px]">
                <h1 className="text-xl md:text-4xl xl:text-7xl font-normal xl:leading-[86px] capitalize">
                  Unleash the Next <br className="md:hidden" />
                  <span className="relative">
                    Generation
                    <img
                      className="absolute w-full bottom-[-10px] left-0 h-4"
                      alt="goldline"
                      src="/line.svg"
                    />
                  </span>{" "}
                  of Gaming
                </h1>

                <p className="relative text-xs md:text-lg xl:leading-[28px] text-darkgray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-[40px] text-lg">
                <button className="w-auto bg-deepskyblue border-none cursor-pointer transition px-6 py-4 md:px-8 md:py-6 whitespace-nowrap text-xs md:text-[18px] text-white ">
                  Explore More
                </button>
                <button className="w-auto bg-transparent border border-transparent cursor-pointer hover:border-white px-6 py-4 md:px-8 md:py-6 whitespace-nowrap  text-xs md:text-[18px] text-white ">
                  View our team
                </button>
              </div>
            </div>
          </div>
          <img
            className="w-[360px] h-auto md:w-[460px] xl:w-[660px] md:h-[318px] xl:h-[518px] object-cover"
            alt="hero"
            src="/hero.png"
          />
        </div>
      </div>
      <div className="bg-deepskyblue top-0 absolute w-[44%] z-0 right-0 h-full " />
    </section>
  );
};
const WSectionOne = Wrapper(SectionOne);

export default WSectionOne;
