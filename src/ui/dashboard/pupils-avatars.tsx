import Avatar from "../avatar";
import { studentsData } from "../../utils/data";

const PupilsAvatars = () => {
  const firstThreeStudents = studentsData
    .slice(0, 3)
    .map((student) => (
      <Avatar
        key={student.id}
        className="rounded-full w-[6rem] items-center flex justify-center h-[6rem] border-2 border-white "
        avatarImage={student?.profile?.profileImage}
      />
    ));
  return <div className="flex items-center ">{firstThreeStudents}</div>;
};

export default PupilsAvatars;
