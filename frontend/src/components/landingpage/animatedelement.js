import React from "react";
import { useInView } from "react-intersection-observer";

export const AnimatedElement = ({ children, animationClass }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={`${inView ? animationClass : ""}`}>
      {children}
    </div>
  );
};
