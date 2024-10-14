import { FaPercent } from "react-icons/fa6";
import Card from "./card";
import { BiTask } from "react-icons/bi";
import SortSelector from "./sort-selector";
import { Fields } from "../context/SortDropDownContext";
import { useModalContext } from "../hooks/useModalContext";
import { motion } from "framer-motion";

const SortModal = () => {
  const { onToggle } = useModalContext();
  return (
    <motion.div className="fixed inset-0 flex w-full justify-self-center items-center justify-center z-[1000] bg-[#333] bg-opacity-50 backdrop-brightness-50">
      <Card
        animation={{
          initial: { y: "40vh" },
          animate: { y: "6vh" },
          transition: { duration: 0.3 },
          exit: { y: "100vh" },
        }}
        className="rounded-[1.5rem] bottom-[1vh] w-full right-0 z-[1000] mb-[3rem] fixed  px-[1.5em] py-[2rem] bg-white backdrop-filter backdrop-brightness-75 "
      >
        <div className="flex items-center px-[1rem] gap-[1rem]">
          <h1 className="text-black font-bold font-raleway text-[2.4rem]">
            Sort by
          </h1>
        </div>

        <div className="flex flex-col px-[2rem] gap-[2.4rem] mt-[2.4rem]">
          <SortSelector
            realPropertyName={Fields.WorkCompleted}
            name="Work completed"
            Icon={BiTask}
          />
          <SortSelector
            realPropertyName={Fields.AverageScore}
            name="Average Score"
            Icon={FaPercent}
          />
        </div>

        <button
          onClick={onToggle}
          className="bg-[#86D718]  rounded-[1.4rem] font-semibold font-poppins text-[1.6rem] w-full mt-[3rem] py-[1.4rem]"
        >
          Done
        </button>
      </Card>
    </motion.div>
  );
};

export default SortModal;
