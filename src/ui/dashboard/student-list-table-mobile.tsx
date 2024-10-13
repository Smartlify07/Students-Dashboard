import { useEffect, useState } from "react";
import { Student, studentsData } from "../../utils/data";
import { useSortDropDownContext } from "../../hooks/useSortDropDownContext";
import { sortFields } from "../../utils/sortFields";
import { StudentListItemMobile } from "./student-list-item-mobile";
import Card from "../card";

const StudentListTableMobile = () => {
  const [students, setStudents] = useState<Student[]>(studentsData);
  const { whatToSort, howToSort } = useSortDropDownContext();
  useEffect(() => {
    const sorted = sortFields(whatToSort!, howToSort!, students);
    setStudents(sorted);
  }, [whatToSort, howToSort]);
  return (
    <Card className="bg-white flex flex-col gap-[1.6rem] px-[1rem] py-[1rem] rounded-[0.5rem]">
      {students.map((student) => (
        <StudentListItemMobile key={student.id} {...student} />
      ))}
    </Card>
  );
};

export default StudentListTableMobile;
