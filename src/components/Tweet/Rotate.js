import React from 'react';
import { useSpring, animated } from 'react-spring';

const Rotate = ({ children }) => {
    const style = useSpring({
        transform: 'rotate(90deg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        from: {
            transform: 'rotate(0deg)'
        },
        config: {
            tension: 150,
            friction: 8
        }
    })

    return (
        <animated.div style={style}>{children}</animated.div>
    );
}

export default Rotate;