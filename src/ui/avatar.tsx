type AvatarProps = {
  className?: string;
  avatarImage?: string;
  children?: string;
  imageClassName?: string;
};
const Avatar = ({
  className,
  avatarImage,
  children,
  imageClassName,
}: AvatarProps) => {
  return (
    <div className={className}>
      {avatarImage ? (
        <img
          className={`${imageClassName} object-cover`}
          src={avatarImage}
          alt="avatar"
        />
      ) : null}
      {children}
    </div>
  );
};

export default Avatar;
