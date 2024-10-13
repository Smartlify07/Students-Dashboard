import Card from "../card";
import { FaAngleDown } from "react-icons/fa6";
import { Student, studentsData } from "../../utils/data";
import { StudentListItemDesktop } from "./student-list-item-desktop";
import { Link, useLocation } from "react-router-dom";
import TableHead from "./table-head";
import { Fields } from "../../context/SortDropDownContext";
import { useEffect, useState } from "react";
import { sortFields } from "../../utils/sortFields";
import { useSortDropDownContext } from "../../hooks/useSortDropDownContext";

const StudentsListTableDesktop = ({ maxLength }: { maxLength?: number }) => {
  const pathname = useLocation().pathname;
  const [students, setStudents] = useState<Student[]>(studentsData);
  const { whatToSort, howToSort } = useSortDropDownContext();
  const sorted = sortFields(whatToSort!, howToSort!, students);

  useEffect(() => {
    if (JSON.stringify(students) !== JSON.stringify(sorted)) {
      setStudents(sorted);
    }
  }, [students, sorted]);

  return (
    <Card className="bg-white hidden lg:flex flex-col lg:px-[2.4rem]  py-[2.4rem]">
      <table className="w-full border-spacing-y-[0.5rem] hidden lg:table border-separate">
        <thead className="">
          <tr className="text-[1.4rem]    text-gray-700 font-poppins  font-normal">
            <TableHead
              justifyPosition="justify-start"
              Icon={FaAngleDown}
              label="Full name"
              realPropertyName={Fields.StudentName}
            />
            <TableHead
              Icon={FaAngleDown}
              realPropertyName={Fields.WorkCompleted}
              label="Work Completed"
            />
            <TableHead
              Icon={FaAngleDown}
              label="Average Score
"
              realPropertyName={Fields.AverageScore}
            />
            <TableHead
              Icon={FaAngleDown}
              realPropertyName={Fields.AverageScore}
              label="Grade"
            />
          </tr>
        </thead>
        <tbody>
          {students.slice(0, maxLength ? maxLength : -1).map((student) => (
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
