import Wrapper from "./Wrapper";

const SectionOne = () => {
  return (
    <section className="relative flex flex-col items-center justify-start w-full h-full xl:h-screen max-h-[1069px] p-2 xl:px-16 text-base text-white bg-black ">
      <header className="flex z-10 items-center justify-between mt-1 gap-6 lg:gap-[182px]">
        <a href="/" className="no-underline cursor-pointer">
          <img className="w-[170px] h-12" alt="" src="/logo.svg" />
        </a>
        <nav className="flex flex-col pt-8 xl:pt-0 xl:flex-row items-center justify-end gap-6 xl:gap-[160px] ">
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
      </header>
      <div className="relative z-10 flex flex-1 items-center justify-start gap-[14px] text-[11px] text-lightslategray">
        <div className="absolute left-[-40px] top w-[25px] h-[370px] flex flex-col items-start justify-between">
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
        <div className="flex flex-col items-end justify-center gap-6 xl:items-center xl:justify-start xl:flex-row">
          <div className="flex flex-col items-center justify-start gap-[16px]">
            <div className="flex items-center justify-start gap-[8px]">
              <img className="w-8 h-8" alt="fire" src="/fire.svg" />
              <div className="leading-[16px] text-base uppercase text-deepskyblue w-[203px]">
                FUTURE OF eSPORTS
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[53px]  text-white">
              <div className="flex flex-col items-start justify-start gap-[43px]">
                <h1 className="text-4xl xl:text-7xl font-normal xl:leading-[86px] capitalize">
                  Unleash the Next{" "}
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

                <p className="relative text-lg xl:leading-[28px] text-darkgray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[40px] text-lg">
                <button className="w-auto bg-deepskyblue border-none cursor-pointer transition px-8 py-6 whitespace-nowrap text-[18px] text-white ">
                  Explore More
                </button>
                <button className="w-auto bg-transparent border border-transparent cursor-pointer hover:border-white px-8 py-6 whitespace-nowrap text-[18px] text-white ">
                  View our team
                </button>
              </div>
            </div>
          </div>
          <img
            className="w-[460px] lg:w-[660px] h-[318px] lg:h-[518px] object-cover"
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
