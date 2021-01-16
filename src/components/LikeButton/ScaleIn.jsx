import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      mass: 2,
      tension: 250,
      friction: 20,
    },
  });
  return <Scale style={{ ...style }}>{children}</Scale>;
};

const Scale = styled(animated.div)``;

export default ScaleIn;
