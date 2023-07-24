import Wrapper from "./Wrapper";

const SectionTwo = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full h-full gap-8 py-6 px-4 xl:gap-0 xl:px-12 lg:flex-row bg-darkslategray-200">
      <img
        className="hidden lg:block w-[396px] xl:w-[596px] h-[495px] xl:h-[695px] object-cover "
        alt="player1"
        src="/s2left.png"
      />
      <div className="lg:max-w-[45%] flex flex-col items-center gap-[54px]">
        <div className="flex flex-col items-start justify-start gap-[38px]">
          <div className="flex flex-col items-start justify-start gap-[11px]">
            <div className="flex items-center justify-start gap-[8px]">
              <img className="relative w-8 h-8 " alt="" src="fire.svg" />
              <div className="relative leading-[16px] uppercase inline-block w-[203px] text-deepskyblue">
                FUTURE OF eSPORTS
              </div>
            </div>
            <h1 className="text-4xl xl:text-[63px] text-white font-normal xl:leading-[74px] capitalize">
              Customize your <br /> Own Character
            </h1>
          </div>
          <p className=" text-xl text-start xl:leading-[30px] text-gainsboro xl:w-[95%]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae.
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center flex-wrap gap-2 xl:justify-start">
          <div className="rounded-[20px] bg-darkslategray-100 flex items-center justify-center w-[196px] h-[125px]">
            <img
              className="w-[174px] h-[102px] object-cover"
              alt="gameplay1"
              src="/s2img1.png"
            />
          </div>
          <div className="rounded-[20px]  flex items-center justify-center w-[196px] h-[125px]">
            <img
              className="w-[174px] h-[102px] object-cover"
              alt="gameplay2"
              src="/s2img2.png"
            />
          </div>
          <div className="rounded-[20px]  flex items-center justify-center w-[196px] h-[125px]">
            <img
              className="w-[174px] h-[102px] object-cover"
              alt="gameplay3"
              src="/s2img3.png"
            />
          </div>
        </div>
      </div>

      <img
        className="lg:hidden w-[296px] object-cover "
        alt="player1"
        src="/s2left.png"
      />

      <div className="flex lg:hidden items-center justify-center flex-wrap gap-2 xl:justify-start">
        <div className="rounded-[20px] bg-darkslategray-100 flex items-center justify-center w-[146px] h-[100px]">
          <img
            className="w-[124px] object-cover"
            alt="gameplay1"
            src="/s2img1.png"
          />
        </div>
        <div className="rounded-[20px]  flex items-center justify-center w-[146px] h-[100px]">
          <img
            className="w-[124px] object-cover"
            alt="gameplay2"
            src="/s2img2.png"
          />
        </div>
        <div className="rounded-[20px]  flex items-center justify-center w-[146px] h-[100px]">
          <img
            className="w-[124px] object-cover"
            alt="gameplay3"
            src="/s2img3.png"
          />
        </div>
      </div>
    </section>
  );
};

const WSectionTwo = Wrapper(SectionTwo);

export default WSectionTwo;
