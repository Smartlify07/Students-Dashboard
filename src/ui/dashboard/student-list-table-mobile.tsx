import { useEffect, useState } from "react";
import { Student, studentsData } from "../../utils/data";
import { useSortDropDownContext } from "../../hooks/useSortDropDownContext";
import { sortFields } from "../../utils/sortFields";
import { StudentListItemMobile } from "./student-list-item-mobile";
import Card from "../card";
import SortModal from "../modal";
import { useModalContext } from "../../hooks/useModalContext";
import { AnimatePresence } from "framer-motion";

const StudentListTableMobile = () => {
  const [students, setStudents] = useState<Student[]>(studentsData);
  const { whatToSort, howToSort } = useSortDropDownContext();
  const { isOpen, onToggle } = useModalContext();
  const sorted = sortFields(whatToSort!, students, howToSort!);

  useEffect(() => {
    if (JSON.stringify(students) !== JSON.stringify(sorted)) {
      setStudents(sorted);
    }
  }, [students, sorted]);
  return (
    <div className="flex flex-col relative w-full mt-[3rem]">
      <button
        onClick={onToggle}
        className="py-[1.2rem] self-end px-[1.5rem]  mb-[3rem] bg-[rgba(255,165,0)] text-white   rounded-[1rem] text-[1.6rem] font-normal font-poppins  "
      >
        Sort students
      </button>

      <AnimatePresence mode="popLayout">
        {isOpen && <SortModal />}
      </AnimatePresence>

      <Card className="bg-white flex flex-col gap-[1.6rem] px-[1rem] py-[1rem] rounded-[0.5rem]">
        {students.map((student) => (
          <StudentListItemMobile key={student.id} {...student} />
        ))}
      </Card>
    </div>
  );
};

export default StudentListTableMobile;
