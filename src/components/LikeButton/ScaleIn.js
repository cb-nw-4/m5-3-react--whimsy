import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
    const style = useSpring({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1,
        transform: "scale(1)",
        from: {
          transform: "scale(0)",
        },
        config: {
          tension: 250,
          friction: 10,
        },
      });
    
      return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;