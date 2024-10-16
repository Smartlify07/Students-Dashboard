import { useEffect, useState } from "react";
import { Student, studentsData } from "../../utils/data";
import { useSortDropDownContext } from "../../hooks/useSortDropDownContext";
import { sortFields } from "../../utils/sortFields";
import { StudentListItemMobile } from "./student-list-item-mobile";
import Card from "../card";
import SortModal from "../modal";
import { useModalContext } from "../../hooks/useModalContext";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const StudentListTableMobile = ({ maxLength }: { maxLength?: number }) => {
  const [students, setStudents] = useState<Student[]>(studentsData);
  const { whatToSort, howToSort } = useSortDropDownContext();
  const { isOpen, onToggle } = useModalContext();
  const pathname = useLocation().pathname;
  const sorted = sortFields(whatToSort!, students, howToSort!);

  useEffect(() => {
    if (JSON.stringify(students) !== JSON.stringify(sorted)) {
      setStudents(sorted);
    }
  }, [students, sorted]);
  return (
    <div className="flex flex-col relative w-full lg:hidden mt-[3rem]">
      {pathname === "/students" && (
        <button
          onClick={() => {
            if (onToggle) onToggle();
          }}
          className="py-[1.2rem] self-end px-[1.5rem]  mb-[3rem] bg-[rgba(255,165,0)] text-[#0b0b0b] font-medium   rounded-[1rem] text-[1.6rem] font-poppins  "
        >
          Sort students
        </button>
      )}

      <AnimatePresence mode="popLayout">
        {isOpen && <SortModal />}
      </AnimatePresence>

      <Card className="bg-white flex flex-col gap-[1.6rem] px-[1rem] py-[1rem] rounded-[0.5rem]">
        {students.slice(0, maxLength ? maxLength : -1).map((student) => (
          <StudentListItemMobile key={student.id} {...student} />
        ))}

        {maxLength && (
          <Link
            to="/students"
            className="my-[2rem] text-[1.6rem] self-center font-medium font-poppins text-[#0b0b0b]"
          >
            View All
          </Link>
        )}
      </Card>
    </div>
  );
};

export default StudentListTableMobile;
