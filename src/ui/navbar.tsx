import { NavLink } from "react-router-dom";
import Profile from "./profile";

const Navbar = () => {
  return (
    <nav className="py-[1.6rem] px-[5rem] w-full flex items-center justify-between">
      <h1 className="text-[2rem] font-semibold font-poppins text-slate-950">
        Studentii
      </h1>
      <ul className=" font-poppins items-center gap-[1.6rem] hidden lg:flex">
        <li className=" text-[1.6rem] ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#0b0b0b] font-medium" : "text-neutral-500"
            }
            to={"/"}
          >
            Dashboard
          </NavLink>
        </li>
        <li className=" text-[1.6rem]">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#0b0b0b] font-medium" : "text-neutral-500"
            }
            to={"students"}
          >
            Students
          </NavLink>
        </li>
      </ul>
      <Profile />
    </nav>
  );
};

export default Navbar;
