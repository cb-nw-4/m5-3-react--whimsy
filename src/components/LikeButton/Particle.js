import React from 'react';
import { useSpring, animated } from "react-spring";




const Particle = ({distance, angle, children}) => {

    const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;

    const angleInRads = convertDegreesToRadians(angle);

    const x = Math.cos(angleInRads) * distance;
    const y = Math.sin(angleInRads) * distance;

    const style = useSpring({
        
        position: "absolute",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        from: {
            opacity: 1,
            transform: `translate(0px, 0px)`,
        },

        to: {
            opacity: 0,
            transform: `translate(${x}px, ${y}px)`,
        },
        delay: 100,
        config: {
            tension: 100,
            mass: 1,
            friction: 10,
        },
    });
    return (<animated.div style={style}>
        {children}
    </animated.div>);
}



export default Particle;