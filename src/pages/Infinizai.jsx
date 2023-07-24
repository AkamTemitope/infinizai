import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour
} from "../components";

const Infinizai = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-auto">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default Infinizai;
