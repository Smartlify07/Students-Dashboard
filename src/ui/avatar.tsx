type AvatarProps = {
  className?: string;
  avatarImage?: string;
  children?: string;
};
const Avatar = ({ className, avatarImage, children }: AvatarProps) => {
  return (
    <div className={className}>
      {avatarImage ? (
        <img className="object-cover" src={avatarImage} alt="avatar" />
      ) : null}
      {children}
    </div>
  );
};

export default Avatar;
