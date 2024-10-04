import { CSSProperties, ReactNode } from "react";

export type CardProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
};
const Card = ({ className, children, style }: CardProps) => {
  return (
    <div style={style} className={`${className} rounded-[3.5rem]`}>
      {children}
    </div>
  );
};

export default Card;
