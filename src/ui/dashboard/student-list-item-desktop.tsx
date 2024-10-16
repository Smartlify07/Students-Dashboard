import Avatar from "../avatar";
import { generateBg } from "../../utils/generateBg";
import { Student } from "../../utils/data";
import { calculateGrade } from "../../utils/calculateGrade";

export const StudentListItemDesktop = ({
  workCompleted,
  profile,
  averageScore,
}: Student) => {
  const { mainBgColor, lightBgColor } = generateBg(averageScore);
  const grade = calculateGrade(averageScore);
  const { studentName, profileImage } = profile;

  return (
    <tr className="w-full  h-[9rem] rounded-[1.2rem] hidden md:table-row  font-poppins">
      <td
        style={{ background: lightBgColor }}
        className=" flex rounded-tl-[1.2rem] rounded-bl-[1.2rem]    h-[9rem]  items-center   gap-[2rem]"
      >
        <Avatar
          avatarImage={profileImage}
          className="w-[5rem] h-[5rem] rounded-full"
        />

        <h3 className="text-[1.6rem] text-[#0b0b0b]  font-normal font-poppins">
          {studentName}
        </h3>
      </td>

      <td
        style={{ background: lightBgColor }}
        className=" text-[2.4rem] text-center text-[#0b0b0b]  font-medium font-poppins "
      >
        {workCompleted}/40
      </td>
      <td
        style={{ background: lightBgColor }}
        className=" text-[2.4rem] text-center text-[#0b0b0b] font-medium font-poppins "
      >
        <div className="flex justify-center">
          <div
            className=" h-[6rem] relative text-[#0b0b0b] flex items-center justify-center self-center  rounded-[1.2rem] rounded-br-[1.2rem]"
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
            className="flex items-center justify-center h-[6rem] self-center rounded-[1.2rem]"
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
      </td>
      <td
        style={{ background: lightBgColor }}
        className=" text-[2.4rem] text-center text-[#0b0b0b] rounded-tr-[1.2rem] rounded-br-[1.2rem] font-medium font-poppins "
      >
        {grade}
      </td>
    </tr>
  );
};
