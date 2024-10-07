import { IconType } from "react-icons";
import { useState } from "react";
import SortDropdown from "../sort-dropdown";
import { motion } from "framer-motion";

type TableHeadProps = {
  label: string;
  Icon: IconType;
  justifyPosition?: "justify-end" | "justify-start" | "justify-center";
};

export type DropDownState = {
  isOpen?: boolean;
};
const TableHead = ({
  label,
  Icon,
  justifyPosition = "justify-center",
}: TableHeadProps) => {
  const [isOpen, setIsOpen] = useState<DropDownState>({
    isOpen: false,
  });

  const toggleIsOpen = () => {
    setIsOpen({ isOpen: !isOpen.isOpen });
  };

  return (
    <th className="font-medium relative pb-[1.2rem] ">
      <div className={`flex items-center gap-[0.5rem] ${justifyPosition}`}>
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

      <SortDropdown isOpen={isOpen.isOpen} />
    </th>
  );
};

export default TableHead;
