import { Link } from "react-router-dom";
import Card from "./card";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { useClickOutside } from "../hooks/useClickOutside";
import { Dispatch, SetStateAction } from "react";

const ProfileDropdown = ({
  setIsDropdownOpen,
}: {
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const linkClassName =
    "text-[1.4rem] px-[1rem] flex items-center gap-[0.3rem] py-[1rem] font-medium transition-all hover:bg-[#F2F9FF] rounded-[1rem]";
  const cardRef = useClickOutside<HTMLDivElement>(() => {
    setIsDropdownOpen(false);
  });
  return (
    <Card
      className="flex flex-col  z-[1000] border right-0 top-[5rem] px-[1rem] py-[1.4rem] w-[25rem] shadow-xl font-poppins absolute  gap-[2rem] rounded-[1rem] bg-[#fff] "
      innerRef={cardRef}
      animation={{
        initial: { y: -10 },
        animate: { y: 0 },

        exit: {
          opacity: 0,
          display: "none",
          y: -10,
        },
      }}
    >
      <div className="flex flex-col px-[1rem]    gap-[0.rem]">
        <h1 className="text-[#0b0b0b] leading-[1.5rem] text-[1.4rem] font-semibold font-poppins">
          Jane Smith
        </h1>
        <h2 className="text-neutral-500 font-poppins text-[1.2rem] font-medium">
          janesmith@mail.com
        </h2>
      </div>
      <div className="flex flex-col  gap-[0.2rem]">
        <Link to={""} className={linkClassName}>
          <CgProfile className="text-[2rem] text-neutral-500" /> Profile
        </Link>

        <button className="text-[1.4rem] py-[1rem] font-poppins font-medium gap-[0.6rem] px-[1rem] flex items-center text-[#6d1010]">
          <CgLogOut className="text-[2rem]" /> Logout
        </button>
      </div>
    </Card>
  );
};

export default ProfileDropdown;
