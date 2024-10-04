import StudentsListOverviewTabs from "./student-list-overview-tabs";

const StudentsListOverview = () => {
  return (
    <section className="py-[6rem] w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[3.6rem]  font-semibold text-[#0b0b0b] font-raleway">
          Students Proficiency
        </h1>
        <StudentsListOverviewTabs />
        <StudentsListOverview />
      </div>
    </section>
  );
};

export default StudentsListOverview;
