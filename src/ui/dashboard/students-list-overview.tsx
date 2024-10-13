import StudentsListOverviewTabs from "./student-list-overview-tabs";
import StudentsListTableDesktop from "./students-list-table";

const StudentsListOverview = () => {
  return (
    <section className="py-[6rem] flex flex-col gap-[3rem] w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[3.6rem]  font-semibold text-[#0b0b0b] font-raleway">
          Students Proficiency
        </h1>
        <StudentsListOverviewTabs />
      </div>
      <StudentsListTableDesktop maxLength={5} />
    </section>
  );
};

export default StudentsListOverview;
