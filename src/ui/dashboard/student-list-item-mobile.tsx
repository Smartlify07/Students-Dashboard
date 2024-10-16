import { calculateGrade } from "../../utils/calculateGrade";
import { Student } from "../../utils/data";
import { generateBg } from "../../utils/generateBg";
import Avatar from "../avatar";
import Card from "../card";

export const StudentListItemMobile = ({
  averageScore,
  profile,
  workCompleted,
}: Student) => {
  const { profileImage, studentName } = profile;
  const { mainBgColor, lightBgColor } = generateBg(averageScore);

  return (
    <Card
      style={{ backgroundColor: lightBgColor }}
      className="flex flex-col gap-[2rem]  pt-[1.2rem] pb-[1.6rem] px-[1.4rem]  lg:hidden rounded-[0.5rem]"
    >
      <div className="flex gap-[0.4rem] items-center">
        <Avatar
          avatarImage={profileImage}
          className="w-[5rem] h-[5rem] rounded-full"
        />
        <h3 className="text-[1.4rem] md:text-[1.6rem] text-[#0b0b0b]  font-medium font-poppins">
          {studentName}
        </h3>
      </div>

      <div className="flex flex-col gap-[0.4rem]   font-poppins">
        <p className="text-[1.4rem] md:text-[1.4rem]">Average score:</p>
        <div className="flex w-full  text-[2.2rem] text-center text-[#0b0b0b] font-medium font-poppins  ">
          <div
            className=" h-[6rem]  relative text-[#0b0b0b] flex items-center justify-center   rounded-[1.2rem] rounded-br-[1.2rem]"
            style={{ width: `${averageScore}%`, backgroundColor: mainBgColor }}
          >
            {averageScore >= 50 && (
              <p
                className={`absolute  ${
                  averageScore < 80 ? "right-[-2rem]" : ""
                }`}
              >
                {averageScore}%
              </p>
            )}
          </div>
          <div
            className="flex items-center justify-center h-[6rem]  rounded-[1.2rem]"
            style={{
              width: `${100 - averageScore}%`,
              backgroundColor: "white",
            }}
          >
            {averageScore < 50 && (
              <p className={`  ${averageScore < 80 ? "right-[-2rem]" : ""}`}>
                {averageScore}%
              </p>
            )}
          </div>
        </div>
      </div>
      <p className="text-[1.6rem] md:text-[1.8rem] font-poppins flex items-center">
        <span className="text-[1.4rem] md:text-[1.4rem] font-normal">
          Grade:{" "}
          <span className="text-[1.8rem] md:text-[2.4rem] font-medium">
            {calculateGrade(averageScore)}
          </span>
        </span>
      </p>

      <p className="text-[1.6rem] md:text-[2rem] flex flex-col    text-[#0b0b0b]  font-normal font-poppins">
        <span className="font-normal text-[1.4rem] md:text-[1.4rem]">
          Work Completed:
        </span>
        <span className="self-start font-medium ">{workCompleted} / 40</span>
      </p>
    </Card>
  );
};
