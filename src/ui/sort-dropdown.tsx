import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { DropDownState } from "./dashboard/table-head";

const SortDropdown = ({ isOpen }: DropDownState) => {
  return (
    <AnimatePresence mode="popLayout">
      {isOpen && (
        <motion.div
          style={{
            boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          role="filter-dropdown"
          className=" border z-[1000] backdrop-grayscale-[1] absolute top-[3rem] bg-[#fefefe] flex rounded-[1.2rem] py-[1.2rem] flex-col gap-[0.2rem]"
        >
          <span
            className="hover:bg-gray-100 transition-all px-[1.4rem] py-[1rem]  flex items-center whitespace-nowrap text-[#092307]  cursor-pointer gap-[0.2rem]"
            role="input"
          >
            <BsArrowUp className="text-[1.4rem]" />
            Sort Ascending
          </span>
          <span
            className="hover:bg-gray-100 transition-all px-[1.4rem] py-[1rem] flex items-center whitespace-nowrap  text-[#ca2323] cursor-pointer gap-[0.2rem]"
            role="input"
          >
            <BsArrowDown className="text-[1.4rem]" />
            Sort Descending
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SortDropdown;
