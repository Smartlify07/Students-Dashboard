import { NavLink } from "react-router-dom";
import Profile from "./profile";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./card";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const linkClassName =
    "text-[1.6rem] px-[1rem] flex items-center gap-[0.3rem] py-[1rem]  font-medium transition-all hover:bg-[#F2F9FF] rounded-[1rem]";
  return (
    <nav className="py-[1.6rem] px-[2rem] md:px-[5rem] w-full flex items-center justify-between">
      <h1 className="text-[2rem] hidden md:block font-semibold font-poppins text-slate-950">
        Studentii
      </h1>

      <button
        onClick={() => {
          setIsNavbarOpen((prevState) => !prevState);
        }}
        className="flex flex-col md:hidden z-[1000] "
      >
        <motion.span
          animate={{ rotate: isNavbarOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-[2.5rem] transition-all mb-[0.1rem] h-[0.4rem] rounded-[0.4rem] bg-[#0b0b0b]"
        ></motion.span>
        <motion.span
          animate={{
            rotate: isNavbarOpen ? -45 : 0,
            translateY: isNavbarOpen ? "-7px" : "0",
          }}
          transition={{ duration: 0.3 }}
          className="w-[2.5rem] my-[0.1rem] h-[0.4rem] rounded-[0.4rem] bg-[#0b0b0b]"
        ></motion.span>

        <motion.span
          animate={{
            display: isNavbarOpen ? "hidden" : "block",
            opacity: isNavbarOpen ? "0" : "1",
          }}
          transition={{ duration: 0.3 }}
          className={`w-[2.5rem] mt-[0.1rem] h-[0.4rem] rounded-[0.4rem] bg-[#0b0b0b] `}
        ></motion.span>
      </button>

      <AnimatePresence>
        ''
        {isNavbarOpen && (
          <Card
            className="flex flex-col md:hidden  z-[1000] border left-[0.2rem] w- top-[5rem] px-[1rem] py-[2.4rem]  w-[25rem] shadow-xl font-poppins absolute  rounded-[1rem] bg-[#fff] "
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
            <div className="flex flex-col  gap-[1.4rem]">
              <NavLink
                className={({ isActive }) =>
                  isActive ? linkClassName : `${linkClassName} text-gray-500`
                }
                to={"/"}
              >
                Dashboard
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? linkClassName : `${linkClassName} text-gray-500`
                }
                to={"students"}
              >
                Students
              </NavLink>
            </div>
          </Card>
        )}
      </AnimatePresence>

      {/* Desktop */}
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
