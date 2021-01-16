import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
    const style = useSpring({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
<<<<<<< HEAD
        zIndex: 1,
=======
>>>>>>> 7efac04d72da511b0f7127402589bc70704a9610
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