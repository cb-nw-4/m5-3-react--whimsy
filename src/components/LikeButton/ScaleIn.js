import React from 'react';
import { useSpring, animated } from "react-spring";


const ScaleIn= ( {children} )=>{ 

    const style = useSpring({ 
        transform: 'scale(1.0)',          
          from: {
            transform: 'scale(1.4)',
          },
        config: {
            tension: 200,
            friction: 14,
        },
      });

    return (
    <animated.div style={style}>
        {children}
    </animated.div>);

};

export default ScaleIn;