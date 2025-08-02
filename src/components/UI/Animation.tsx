import { useInView, animated } from "@react-spring/web";
import * as React from "react";

interface TestingProps {
  children: React.ReactNode;
  delay?: number;
  direction?:
    | "right"
    | "left"
    | "top"
    | "bottom"
    | "ZoomIn"
    | "ZoomOut"
    | "FadeIn"
    | "FadeOut"
    | "fadeInUp";
}
const Animation = ({ children, direction = "left" }: TestingProps) => {
  const getFrom = (dir: string) => {
    switch (dir) {
      case "right":
        return { opacity: 0, transform: "translateX(100px)" };
      case "left":
        return { opacity: 0, transform: "translateX(-100px)" };
      case "top":
        return { opacity: 0, transform: "translateY(-100px)" };
      case "bottom":
        return { opacity: 0, transform: "translateY(100px)" };
      case "fadeInUp":
        return { opacity: 0, transform: "translateY(-100px)" };
      case "ZoomIn":
        return { opacity: 0, transform: "scale(0.8)" };
      case "ZoomOut":
        return { opacity: 0, transform: "scale(1.5)" };
      case "FadeIn":
        return { opacity: 0 };
      case "FadeOut":
        return { opacity: 1 };
      default:
        return { opacity: 0, transform: "translateX(-100px)" };
    }
  };

  const getTo = (dir: string) => {
    switch (dir) {
      case "ZoomIn":
      case "ZoomOut":
        return { opacity: 1, transform: "scale(1)" };
      case "top":
      case "bottom":
      case "fadeInUp":
        return { opacity: 1, transform: "translateY(0px)" };
      case "left":
      case "right":
        return { opacity: 1, transform: "translateX(0px)" };
      case "FadeIn":
        return { opacity: 1 };
      case "FadeOut":
        return { opacity: 0 };
      default:
        return { opacity: 1, transform: "translateX(0px)" };
    }
  };
  const [ref, springs] = useInView(
    () => {
      return {
        from: getFrom(direction),
        to: getTo(direction),
        config: { duration: 500 },
        //   delay,
        // reverse: toggle,
        reset: true,
      };
    }
    // {
    //   amount: 0.4,
    // }
  );

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};
export default Animation;
