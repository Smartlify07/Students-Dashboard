import Avatar from "./avatar";
import Teacher from "../assets/avatars/teacherProfileImage.jpg";

const Profile = () => {
  return (
    <div className="flex items-center gap-[0.5rem] ">
      <Avatar
        className=" rounded-full w-[4rem] h-[4rem] cursor-pointer"
        avatarImage={Teacher}
        imageClassName="rounded-full w-[4rem] h-[4rem]"
      />
    </div>
  );
};

export default Profile;
