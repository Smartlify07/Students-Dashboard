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
    cutout: "70%", // Creates the 'doughnut' effect
    plugins: {
      legend: {
        display: false, // Hide legend if not needed
      },
    },
  };

  return (
    <div style={{ width: "250px", height: "250px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
