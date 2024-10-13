import { CSSProperties, ReactNode } from "react";

export type CardProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
};
const Card = ({ className, children, style }: CardProps) => {
  return (
    <div style={style} className={`rounded-[3.5rem] ${className} `}>
      {children}
    </div>
  );
};

export default Card;
