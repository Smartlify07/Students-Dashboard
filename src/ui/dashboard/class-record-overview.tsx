import BeanHeadImage from "../../assets/avatars/beanhead.svg";
import ClassRecordOverviewCard from "./class-record-overview-card";

const ClassRecordOverview = () => {
  return (
    <aside className=" md:w-6/12 lg:flex-row lg:w-6/12 flex ">
      <ClassRecordOverviewCard
        avatarImage={BeanHeadImage}
        backgroundColor="#86D718"
        width="30%"
        gradeAverage={80}
        peopleWithCorrespondingGrade={5}
      />
      <ClassRecordOverviewCard
        avatarImage={BeanHeadImage}
        backgroundColor="#FFC329"
        width="50%"
        gradeAverage={50}
        peopleWithCorrespondingGrade={10}
      />
      <ClassRecordOverviewCard
        avatarImage={BeanHeadImage}
        backgroundColor="#FF8158"
        width="30%"
        gradeAverage={20}
        peopleWithCorrespondingGrade={10}
      />
    </aside>
  );
};

export default ClassRecordOverview;
