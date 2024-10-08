import { IconType } from "react-icons";
import { Dispatch, SetStateAction, useState } from "react";
import SortDropdown from "../sort-dropdown";
import { motion } from "framer-motion";
import {
  Fields,
  SortDropdownContextType,
} from "../../context/SortDropDownContext";
import { useClickOutside } from "../../hooks/useClickOutside";

type TableHeadProps = {
  label: string;
  Icon: IconType;
  realPropertyName:
    | Fields.AverageScore
    | Fields.StudentName
    | Fields.WorkCompleted;
  justifyPosition?: "justify-end" | "justify-start" | "justify-center";
};

export type DropDownProps = SortDropdownContextType & {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<DropDownProps>>;
};
const TableHead = ({
  label,
  Icon,
  justifyPosition = "justify-center",
  realPropertyName,
}: TableHeadProps) => {
  const [isOpen, setIsOpen] = useState<DropDownProps>({
    isOpen: false,
  });

  const toggleIsOpen = () => {
    setIsOpen({ isOpen: !isOpen.isOpen });
  };
  const myRef = useClickOutside(() => {
    setIsOpen((prevState) => ({ ...prevState, isOpen: false }));
  });
  return (
    <th className="font-medium relative pb-[1.2rem] ">
      <div
        ref={myRef}
        className={`flex items-center gap-[0.5rem] ${justifyPosition}`}
      >
        {label}

        <motion.div
          animate={{ rotate: isOpen.isOpen ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <Icon
            onClick={toggleIsOpen}
            className={`text-gray-300  cursor-pointer text-[1.5rem] `}
          />
        </motion.div>
      </div>

      <SortDropdown
        setIsOpen={setIsOpen}
        whatToSort={realPropertyName}
        isOpen={isOpen.isOpen}
      />
    </th>
  );
};

export default TableHead;
