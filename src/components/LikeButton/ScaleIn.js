import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 20,
      friction: 2,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;
