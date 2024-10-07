import { studentsData } from "../../utils/data";
import PupilsAvatars from "./pupils-avatars";

const Header = () => {
  return (
    <section className="flex w-full  items-center justify-between">
      <div className="flex items-center relative gap-[6rem]  w-8/12">
        <h1 className="text-[#0b0b0b] font-raleway md:text-[3.6rem] lg:text-[4.8rem] font-semibold">
          Dashboard
        </h1>
        <div className="flex gap-[0.5rem] items-end">
          <PupilsAvatars />
          <span className="rounded-full relative  flex items-center justify-center bg-white w-[3rem] h-[3rem] text-slate-900">
            <p className="font-semibold text-[1.2rem] font-poppins">
              +{studentsData.length - 3}
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
