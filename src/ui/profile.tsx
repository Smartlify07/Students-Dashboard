import Avatar from "./avatar";
import Teacher from "../assets/avatars/teacherProfileImage.jpg";

const Profile = () => {
  return (
    <div className="flex items-center gap-[0.5rem] ">
      <Avatar
        className=" rounded-full w-[4rem] h-[4rem] "
        avatarImage={Teacher}
        imageClassName="rounded-full w-[4rem] h-[4rem]"
      />
      <h3 className="text-[1.8rem] font-medium text-slate-900">Jane Doe</h3>
    </div>
  );
};

export default Profile;
