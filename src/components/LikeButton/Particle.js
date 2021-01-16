import React from 'react';
import styled, { keyframes } from 'styled-components';

const Particle = ({ angle, distance, delay, children }) => {
  const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;
  
  const angleInRads = convertDegreesToRadians(angle);
  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;

  return (
    <Wrapper x={x} y={y} delay={delay}>{children}</Wrapper>
  );
}

const animate = (x, y) => keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }

  100% {
    transform: translate(${x}px, ${y}px) scale(0);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  animation: ${props => animate(props.x, props.y)} 1000ms ${props => props.delay}ms forwards;
`;

export default Particle;
