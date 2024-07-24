import React from "react";
import { useInView } from "react-intersection-observer";
export const AnimatedSection = ({
  id,
  className,
  children,
  animationClass,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      id={id}
      ref={ref}
      className={`${className} ${inView ? animationClass : ""}`}
    >
      {children}
    </div>
  );
};
