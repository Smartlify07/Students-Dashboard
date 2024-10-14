import { AnimationProps, motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

export type CardProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  animation?: AnimationProps;
};
const Card = ({ className, children, style, animation }: CardProps) => {
  return (
    <motion.div
      {...animation}
      style={style}
      className={`rounded-[3.5rem] ${className} `}
    >
      {children}
    </motion.div>
  );
};

export default Card;
