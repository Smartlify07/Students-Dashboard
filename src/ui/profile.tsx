import Avatar from "./avatar";

const Profile = () => {
  return (
    <div className="flex items-center gap-[0.5rem] ">
      <Avatar className="border rounded-full bg-neutral-50 w-[4rem] h-[4rem] " />
      <h3 className="text-[1.8rem] font-medium text-slate-900">Jane Doe</h3>
    </div>
  );
};

export default Profile;
