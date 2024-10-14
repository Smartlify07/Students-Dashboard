import { IconType } from "react-icons";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import SortDropdown from "./sort-dropdown";
import { DropDownProps } from "./dashboard/table-head";
import { useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { Fields } from "../context/SortDropDownContext";
import { useSortDropDownContext } from "../hooks/useSortDropDownContext";

type SortSelectorProps = {
  Icon: IconType;
  name: string;
  iconClassName?: string;
  realPropertyName: Fields.AverageScore | Fields.WorkCompleted;
};

const SortSelector = ({
  Icon,
  name,
  iconClassName,
  realPropertyName,
}: SortSelectorProps) => {
  const [isOpen, setIsOpen] = useState<DropDownProps>({
    isOpen: false,
  });
  const { howToSort } = useSortDropDownContext();

  const toggleIsOpen = () => {
    setIsOpen({ isOpen: !isOpen.isOpen });
  };

  const buttonRef = useClickOutside<HTMLButtonElement>(() => {
    setIsOpen((prevState) => ({ ...prevState, isOpen: false }));
  });

  return (
    <div className="w-full relative justify-between flex items-center">
      <div className="text-[1.6rem] flex gap-[0.5rem] items-center text-neutral-800 font-medium font-poppins">
        <Icon
          className={`text-[1.6rem] rounded-full  border-black ${iconClassName}`}
        />
        {name}
      </div>

      <button
        ref={buttonRef}
        onClick={toggleIsOpen}
        className="flex capitalize items-center gap-[0.5rem] font-poppins text-neutral-500 text-[1.4rem] "
      >
        {howToSort?.[realPropertyName]}
        {howToSort?.[realPropertyName] === "ascending" ? (
          <FaArrowUp className="text-[#86D718] text-[1.4rem]" />
        ) : (
          <FaArrowDown className="text-[#FF8158] text-[1.4rem]" />
        )}
        <SortDropdown
          className="right-0 top-[-3rem]"
          isOpen={isOpen.isOpen}
          whatToSort={realPropertyName}
        />
      </button>
    </div>
  );
};

export default SortSelector;
