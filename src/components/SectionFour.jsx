import Wrapper from "./Wrapper";

const SectionFour = () => {
  return (
    <footer className="bg-gray-100 w-full min-h-[500px] flex flex-col md:flex-row py-6 xl:py-0 items-start justify-start gap-10 md:gap-[150px] px-4 md:px-12 md:items-center ">
      <div className="md:w-[30%]  flex flex-col items-start gap-[35px]">
        <img className="w-[170px] h-12" alt="logo" src="/logo.svg" />
        <div className="leading-[25px] text-[15px]  text-darkgray">
          Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
          quam ac sed turpis volutpat. Cursus sed massa non .
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start gap-6 xl:gap-[150px] text-lg">
        <div className="w-[168px] flex flex-col gap-[23px]">
          <div className="leading-[30px] capitalize text-white">Menu Items</div>
          <div className="flex flex-col text-[15px] text-darkgray">
            <a className="leading-[37.5px] capitalize">About</a>
            <a className="leading-[37.5px] capitalize">Blog</a>
            <a className="leading-[37.5px] capitalize">Shop</a>
            <a className="leading-[37.5px] capitalize">Contact us</a>
          </div>
        </div>
        <div className="w-[168px] flex flex-col gap-[23px]">
          <div className="leading-[30px] capitalize text-white">
            Other Pages
          </div>
          <div className="flex flex-col text-[15px] text-darkgray">
            <a className="leading-[37.5px] capitalize">Styleguide</a>
            <a className="leading-[37.5px] capitalize">Changelog</a>
            <a className="leading-[37.5px] capitalize">licenses</a>
            <a className="leading-[37.5px] capitalize">Team</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WSectionFour = Wrapper(SectionFour);

export default WSectionFour;
