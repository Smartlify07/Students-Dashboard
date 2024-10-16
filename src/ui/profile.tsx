import Avatar from "./avatar";
import Teacher from "../assets/avatars/teacherProfileImage.jpg";
import ProfileDropdown from "./profile-dropdown";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  console.log(isDropdownOpen);
  return (
    <div
      onClick={() => {
        setIsDropdownOpen((prevState) => !prevState);
        console.log("clicked", isDropdownOpen);
      }}
      className="flex items-center gap-[0.5rem]  relative"
    >
      <Avatar
        className=" rounded-full w-[4rem] h-[4rem] cursor-pointer"
        avatarImage={Teacher}
        imageClassName="rounded-full w-[4rem] h-[4rem]"
      />

      <div className=" md:flex hidden flex-col gap-[0.rem]">
        <h1 className="text-[#0b0b0b] hidden md:block leading-[1.5rem] text-[1.4rem] font-semibold font-poppins">
          Jane Smith
        </h1>
        <h2 className="text-neutral-500 font-poppins text-[1.2rem] font-medium">
          Teacher
        </h2>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <ProfileDropdown setIsDropdownOpen={setIsDropdownOpen} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
