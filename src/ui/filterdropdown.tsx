import { BsArrowUp } from "react-icons/bs";

const FilterDropdown = () => {
  return (
    <div
      role="filter-dropdown"
      className="shadow-md absolute top-[3rem] bg-white flex rounded-[1.2rem] p-[1.2rem] flex-col gap-[1rem]"
    >
      <span
        className="hover:bg-gray-100 transition-all p-[1rem] text-gray-500"
        role="input"
      >
        <BsArrowUp className="text-[1.4rem]" />
        Sort Ascending
      </span>
    </div>
  );
};

export default FilterDropdown;
