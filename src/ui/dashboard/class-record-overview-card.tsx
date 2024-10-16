import { calculateGradeFrequencyPercentage } from "../../utils/calculateGradeFrequency";
import { Student } from "../../utils/data";
import Avatar from "../avatar";
import Card, { CardProps } from "../card";

export type RecordOverviewCardProps = CardProps & {
  backgroundColor: string;
  width: string;
  peopleWithCorrespondingAverage: number;
  gradeAverage: number;
  avatarImage: string;
  firstStudentWithCorrespondingAverage: Student;
};
const ClassRecordOverviewCard = ({
  backgroundColor,
  width,
  peopleWithCorrespondingAverage,
  gradeAverage,

  firstStudentWithCorrespondingAverage,
  className,
}: RecordOverviewCardProps) => {
  return (
    <Card
      style={{ width: width, backgroundColor: backgroundColor }}
      className={`flex flex-col md:w-full px-[1.2rem] py-[1.2rem] justify-between ${className}`}
    >
      <Avatar
        className="rounded-full w-[6rem] h-[6rem] self-end"
        avatarImage={firstStudentWithCorrespondingAverage.profile.profileImage}
      />

      <div className="flex flex-col pl-[1rem] lg:pl-[2rem] w-full md:w-[8rem] lg:w-[7.726rem]  pb-[2rem] gap-[0.2rem]">
        <h1 className="text-[2.4rem] md:text-[3.6rem] lg:text-[4.8rem] font-semibold font-poppins text-[#0b0b0b]">
          {peopleWithCorrespondingAverage}
        </h1>

        <p className="text-[#0b0b0b] font-medium font-poppins text-[1.4rem]">
          {calculateGradeFrequencyPercentage(peopleWithCorrespondingAverage)}%
          of class
        </p>
        <p className="text-gray-600 text-[1.2rem] font-medium font-poppins">
          grade avg: {gradeAverage}%
        </p>
      </div>
    </Card>
  );
};
export default ClassRecordOverviewCard;
