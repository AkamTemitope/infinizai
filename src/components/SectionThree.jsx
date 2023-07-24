import Wrapper from "./Wrapper";

const SectionThree = () => {
  return (
    <div className="flex flex-col w-full h-full px-16 py-16 xl:max-h-[1069px] bg-black items-center justify-start gap-[64px]">
      <div className="flex flex-col items-start justify-between w-full h-full text-base text-left xl:items-center xl:flex-row ">
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="flex items-center justify-start gap-[8px]">
            <img className="w-8 h-8" alt="fire" src="/fire.svg" />
            <div className="text-deepskyblue leading-[16px] uppercase">
              FUTURE OF eSPORTS
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-4xl xl:text-[64px] leading-[74px] capitalize text-white">
            Latest News & <br />
            Articles
          </div>
        </div>
        <button className="w-auto px-8 py-6 text-white capitalize transition border-none cursor-pointer whitespace-nowrap bg-deepskyblue text-[17px] ">
          Read More
        </button>
      </div>
      <div className="flex flex-col items-center justify-start gap-10 text-left xl:flex-row xl:gap-6 text-deepskyblue">
        <div className="flex flex-col items-center xl:items-start justify-start gap-[54px]">
          <img
            className="w-[448px] md:w-[648px] h-[310px] md:h-[510px] object-cover"
            alt="joystick"
            src="s3left.png"
          />
          <div className="flex flex-col items-start justify-start gap-[28px]">
            <div className="leading-[18px] text-lg">April 2, 2021</div>
            <h2 className="font-normal text-4xl leading-[46px] capitalize text-white">
              Esports Group teams up with the Indianapolis Colts
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[40px] text-base">
          <div className="flex flex-col items-center justify-start gap-6 md:flex-row">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <img
                className="w-[312px] h-[189px] object-cover"
                alt="s3img1"
                src="s3img1.png"
              />
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="leading-[16px]">April 2, 2021</div>
                <h2 className="font-normal text-[23px] leading-[34px] capitalize text-white">
                  NAVI reveals s1mple fifth anniversary
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <img
                className="w-[312px] h-[189px] object-cover"
                alt="s3img2"
                src="s3img2.png"
              />
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="leading-[16px]">April 2, 2021</div>
                <div className="font-normal text-2xl leading-[34px] capitalize text-white">
                  A1esports Shares new picture
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-6 md:flex-row">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <img
                className="relative w-[312px] h-[189px] object-cover"
                alt=""
                src="s3img3.png"
              />
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className=" leading-[16px]">April 2, 2021</div>
                <div className="font-normal text-2xl leading-[34px] capitalize text-white">
                  T1 unveil partnership with Razer
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <img
                className="w-[312px] h-[189px] object-cover"
                alt=""
                src="s3img4.png"
              />
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="leading-[16px]">April 2, 2021</div>
                <div className="font-normal text-[23px] leading-[34px] capitalize text-white">
                  RX secures content partnership with
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WSectionThree = Wrapper(SectionThree);

export default WSectionThree;
