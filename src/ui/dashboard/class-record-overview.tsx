import BeanHeadImage from "../../assets/avatars/Daniel Anderson.svg";
import { calculateGradeFrequency } from "../../utils/calculateGradeFrequency";
import ClassRecordOverviewCard from "./class-record-overview-card";

const ClassRecordOverview = () => {
  return (
    <aside className=" md:w-6/12 lg:flex-row lg:w-6/12 flex ">
      <ClassRecordOverviewCard
        avatarImage={BeanHeadImage}
        backgroundColor="#86D718"
        width="30%"
        gradeAverage={80}
        peopleWithCorrespondingAverage={
          calculateGradeFrequency(85, 100).studentsFrequency
        }
        firstStudentWithCorrespondingAverage={
          calculateGradeFrequency(85, 100).studentsWithScore[0]
        }
      />
      <ClassRecordOverviewCard
        avatarImage={BeanHeadImage}
        backgroundColor="#FFC329"
        width="50%"
        gradeAverage={50}
        peopleWithCorrespondingAverage={
          calculateGradeFrequency(50, 79).studentsFrequency
        }
        firstStudentWithCorrespondingAverage={
          calculateGradeFrequency(50, 79).studentsWithScore[0]
        }
      />
      <ClassRecordOverviewCard
        avatarImage={BeanHeadImage}
        backgroundColor="#FF8158"
        width="30%"
        gradeAverage={20}
        peopleWithCorrespondingAverage={
          calculateGradeFrequency(0, 49).studentsFrequency
        }
        firstStudentWithCorrespondingAverage={
          calculateGradeFrequency(0, 49).studentsWithScore[0]
        }
      />
    </aside>
  );
};

export default ClassRecordOverview;
