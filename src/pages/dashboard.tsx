import Header from "../ui/dashboard/header";
import OverViewSection from "../ui/dashboard/overview-section";
import StudentsListOverview from "../ui/dashboard/students-list-overview";

const Dashboard = () => {
  return (
    <main className="w-full bg-[#F2F9FF] flex  justify-center py-[3rem]  rounded-tr-[5rem] rounded-tl-[5rem] min-h-screen">
      <div className="w-[93%]  flex items-center flex-col">
        <Header />
        <OverViewSection />
        <StudentsListOverview />
      </div>
    </main>
  );
};

export default Dashboard;
