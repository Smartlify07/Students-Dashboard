import { useModalContext } from "../hooks/useModalContext";
import StudentListTableMobile from "../ui/dashboard/student-list-table-mobile";
import StudentsListTableDesktop from "../ui/dashboard/students-list-table";

const StudentsPage = () => {
  const { isOpen } = useModalContext();
  console.log(isOpen);
  return (
    <main
      style={{
        overflowY: isOpen ? "hidden" : "scroll",
      }}
      className="w-full bg-[#F2F9FF]  flex  justify-center py-[1rem] md:py-[3rem]  md:rounded-tr-[5rem] md:rounded-tl-[5rem] min-h-screen"
    >
      <div
        style={{
          overflowY: isOpen ? "hidden" : "scroll",
        }}
        className="lg:w-[93%] w-[95%]"
      >
        <StudentsListTableDesktop />
        <StudentListTableMobile />
      </div>
    </main>
  );
};

export default StudentsPage;
