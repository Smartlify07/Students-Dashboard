import Avatar from "../avatar";
import Avatar1 from "../../assets/avatars/beanhead.svg";

const PupilsAvatars = () => {
  return (
    <div className="flex items-center ">
      <Avatar
        className="rounded-full w-[5rem] items-center flex justify-center h-[5rem] border-2 border-white "
        avatarImage={Avatar1}
      />
      <Avatar
        className="rounded-full w-[5rem] relative left-[-0.3rem] items-center flex justify-center h-[5rem] border-2 border-white "
        avatarImage={Avatar1}
      />
      <Avatar
        className="rounded-full w-[5rem] relative -left-[0.7rem] items-center flex justify-center h-[5rem] border-2 border-white "
        avatarImage={Avatar1}
      />
    </div>
  );
};

export default PupilsAvatars;
