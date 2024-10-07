import Card from "../card";
import { FaAngleDown } from "react-icons/fa6";
import { studentsData } from "../../utils/data";
import { StudentListItemDesktop } from "./student-list-item-desktop";
import { Link } from "react-router-dom";

const StudentsListTableDesktop = () => {
  return (
    <Card className="bg-white flex flex-col px-[2.4rem]  py-[2.4rem]">
      <table className="w-full border-spacing-y-[0.5rem] border-separate">
        <thead>
          <tr className="text-[1.4rem]   mb-[2rem] text-gray-700 font-poppins font-normal">
            <th className="font-medium flex pb-[1rem]  justify-start items-center gap-[0.3rem]">
              Full name
              <FaAngleDown className="text-gray-300 text-[1.5rem]" />
            </th>
            <th className="font-medium pb-[1rem]">Work Completed</th>
            <th className="font-medium pb-[1rem]">Average Score</th>
            <th className="font-medium pb-[1rem]">Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.slice(0, 4).map((student) => (
            <StudentListItemDesktop key={student.id} {...student} />
          ))}
        </tbody>
      </table>

      <Link
        to="/students"
        className="mt-[2rem] text-[1.6rem] self-center font-medium font-poppins text-[#0b0b0b]"
      >
        View All
      </Link>
    </Card>
  );
};

export default StudentsListTableDesktop;
