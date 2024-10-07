import Card from "../card";
import { FaAngleDown } from "react-icons/fa6";
import { studentsData } from "../../utils/data";
import { StudentListItemDesktop } from "./student-list-item-desktop";
import { Link, useLocation } from "react-router-dom";
import TableHead from "./table-head";

const StudentsListTableDesktop = () => {
  const pathname = useLocation().pathname;
  return (
    <Card className="bg-white flex flex-col px-[2.4rem]  py-[2.4rem]">
      <table className="w-full border-spacing-y-[0.5rem] border-separate">
        <thead className="">
          <tr className="text-[1.4rem]    text-gray-700 font-poppins  font-normal">
            <TableHead
              justifyPosition="justify-start"
              Icon={FaAngleDown}
              label="Full name"
            />
            <TableHead Icon={FaAngleDown} label="Work Completed" />
            <TableHead
              Icon={FaAngleDown}
              label="Average Score
"
            />
            <TableHead Icon={FaAngleDown} label="Grade" />
          </tr>
        </thead>
        <tbody>
          {studentsData.slice(0, 4).map((student) => (
            <StudentListItemDesktop key={student.id} {...student} />
          ))}
        </tbody>
      </table>

      {pathname !== "/students" && (
        <Link
          to="/students"
          className="mt-[2rem] text-[1.6rem] self-center font-medium font-poppins text-[#0b0b0b]"
        >
          View All
        </Link>
      )}
    </Card>
  );
};

export default StudentsListTableDesktop;
