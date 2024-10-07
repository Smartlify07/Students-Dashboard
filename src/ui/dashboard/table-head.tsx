import { IconType } from "react-icons";

type TableHeadProps = {
  label: string;
  Icon: IconType;
  justifyPosition?: "justify-end" | "justify-start" | "justify-center";
};
const TableHead = ({
  label,
  Icon,
  justifyPosition = "justify-center",
}: TableHeadProps) => {
  return (
    <th className="font-medium pb-[1.2rem] ">
      <div className={`flex items-center gap-[0.5rem] ${justifyPosition}`}>
        {label}
        <Icon className="text-gray-300 cursor-pointer text-[1.5rem]" />
      </div>
    </th>
  );
};

export default TableHead;
