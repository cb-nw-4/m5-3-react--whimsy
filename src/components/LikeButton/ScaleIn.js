import React from 'react';
import { useSpring, animated } from 'react-spring';

const ScaleIn = ({ children }) => {
  const style = useSpring({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'scale(0.999)',
    from: {
      transform: 'scale(0)'
    },
    config: {
      tension: 600,
      friction: 20
    }
  });

  return (
    <animated.div style={style}>{children}</animated.div>
  );
}

export default ScaleIn;
