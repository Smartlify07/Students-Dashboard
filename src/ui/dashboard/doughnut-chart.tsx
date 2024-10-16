import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { calculateEntireClassAverage } from "../../utils/calculateEntireClassAverage";
import { studentsData } from "../../utils/data";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Work Assigned", "Overall Class Score"],
    datasets: [
      {
        label: "Class",
        data: [45, calculateEntireClassAverage(studentsData)],
        backgroundColor: ["#FFC329", "#86D718"],
      },
    ],
  };
  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-[14rem] left-[-0.5rem] md:left-[-2rem] relative h-[16rem] md:h-[25rem] md:w-[25rem]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
