import { calculateEntireClassAverage } from "../../utils/calculateEntireClassAverage";
import { studentsData } from "../../utils/data";
import Card from "../card";
import DoughnutChart from "./doughnut-chart";

const GradesOverview = () => {
  return (
    <Card className=" bg-white self-center justify-self-center  rounded-[3.5rem]  flex justify-between py-[2.4rem] px-[2.4rem]   lg:w-6/12 ">
      <div className="flex flex-col gap-[3rem] h-full   justify-between">
        <div className="flex flex-col gap-0">
          <h3 className="text-[#0b0b0b] md:w-8/12  leading-7 font-semibold font-raleway text-[1.4rem] md:text-[1.8rem]">
            Overall Class Score
          </h3>
          <h1 className="text-[#0b0b0b] font-semibold text-[2.4rem] md:text-[3.5rem] font-poppins">
            {calculateEntireClassAverage(studentsData)}%
          </h1>
        </div>

        <div className="flex flex-col gap-0">
          <p className="text-neutral-400 text-[1.2rem] md:text-[1.4rem] font-medium font-poppins">
            Grade average
          </p>
          <h4 className="font-semibold text-[1.4rem] text-[#0b0b0b] font-poppins">
            {calculateEntireClassAverage(studentsData)}%
          </h4>
        </div>
      </div>
      <DoughnutChart />
      <div className="flex flex-col gap-[3rem] h-full  justify-between">
        <div className="flex flex-col gap-0">
          <h3 className="text-[#0b0b0b] md:w-8/12  leading-7 font-semibold font-raleway text-[1.4rem]  md:text-[1.8rem]">
            Work Assigned
          </h3>
          <h1 className="text-[#0b0b0b] font-semibold text-[2.4rem] md:text-[3.5rem] font-poppins">
            45
          </h1>
        </div>

        <div className="flex flex-col gap-0">
          <p className="text-neutral-400 text-[1.2rem] md:text-[1.4rem] font-medium font-poppins">
            Grade average
          </p>
          <h4 className="font-semibold text-[1.4rem] text-[#0b0b0b] font-poppins">
            {calculateEntireClassAverage(studentsData)}%
          </h4>
        </div>
      </div>
    </Card>
  );
};

export default GradesOverview;
