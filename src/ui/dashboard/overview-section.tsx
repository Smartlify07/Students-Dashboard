import ClassRecordOverview from "./class-record-overview";
import GradesOverview from "./grades-overview";

const OverViewSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:h-[30rem] gap-[3.2rem] w-full mt-[6rem] items-stretch justify-between">
      <GradesOverview />
      <ClassRecordOverview />
    </section>
  );
};

export default OverViewSection;
