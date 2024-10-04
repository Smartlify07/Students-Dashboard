import Avatar from "../avatar";
import Card, { CardProps } from "../card";

export type RecordOverviewCardProps = CardProps & {
  backgroundColor: string;
  width: string;
  peopleWithCorrespondingGrade: number;
  gradeAverage: number;
  avatarImage: string;
};
const ClassRecordOverviewCard = ({
  backgroundColor,
  width,
  peopleWithCorrespondingGrade,
  gradeAverage,
  avatarImage,
  className,
}: RecordOverviewCardProps) => {
  return (
    <Card
      style={{ width: width, backgroundColor: backgroundColor }}
      className={`flex flex-col md:w-full px-[1.2rem] py-[1.2rem] justify-between ${className}`}
    >
      <Avatar
        className="rounded-full w-[6rem] h-[6rem] self-end"
        avatarImage={avatarImage}
      />

      <div className="flex flex-col pl-[1rem] lg:pl-[2rem] md:w-[8rem] lg:w-[7.726rem]  pb-[2rem] gap-[0.2rem]">
        <h1 className="md:text-[3.6rem] lg:text-[4.8rem] font-semibold font-poppins text-[#0b0b0b]">
          {peopleWithCorrespondingGrade}
        </h1>

        <p className="text-[#0b0b0b] font-medium font-poppins text-[1.4rem]">
          23% of class
        </p>
        <p className="text-gray-500 text-[1.2rem] font-medium font-poppins">
          grade avg: {gradeAverage}%
        </p>
      </div>
    </Card>
  );
};
export default ClassRecordOverviewCard;
