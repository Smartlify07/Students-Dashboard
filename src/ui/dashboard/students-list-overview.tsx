import StudentsListOverviewTabs from "./student-list-overview-tabs";
import StudentListTableMobile from "./student-list-table-mobile";
import StudentsListTableDesktop from "./students-list-table";

const StudentsListOverview = () => {
  return (
    <section className="py-[6rem] relative flex flex-col gap-[3rem] w-full">
      <div className="flex flex-col gap-[1rem] md:gap-0 md:flex-row items-center justify-between">
        <h1 className="text-[2rem] whitespace-nowrap md:text-[3.6rem]  font-semibold text-[#0b0b0b] font-raleway">
          Students Proficiency
        </h1>
        <StudentsListOverviewTabs />
      </div>
      <StudentsListTableDesktop maxLength={5} />
      <StudentListTableMobile maxLength={5} />
    </section>
  );
};

export default StudentsListOverview;
