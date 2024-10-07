import StudentsListTableDesktop from "../ui/dashboard/students-list-table";

const StudentsPage = () => {
  return (
    <main className="w-full bg-[#F2F9FF] flex  justify-center py-[3rem]  rounded-tr-[5rem] rounded-tl-[5rem] min-h-screen">
      <div className="w-[93%]">
        <StudentsListTableDesktop />
      </div>
    </main>
  );
};

export default StudentsPage;
