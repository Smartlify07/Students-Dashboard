import { AnimationProps, motion } from "framer-motion";
import { CSSProperties, MutableRefObject, ReactNode } from "react";

export type CardProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  animation?: AnimationProps;
  innerRef?: MutableRefObject<HTMLDivElement | null>;
};
const Card = ({
  className,
  children,
  style,
  animation,
  innerRef,
}: CardProps) => {
  console.log(innerRef);
  return (
    <motion.div
      ref={innerRef}
      {...animation}
      style={style}
      className={`rounded-[rem] ${className} `}
    >
      {children}
    </motion.div>
  );
};

export default Card;
