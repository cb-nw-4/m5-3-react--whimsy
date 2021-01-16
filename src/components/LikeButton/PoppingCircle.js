import React from 'react';
import styled, { keyframes } from 'styled-components';

const PoppingCirle = ({ size, color }) => {
  return (
    <Wrapper style={{ width: size, height: size, backgroundColor: color }}></Wrapper>
  );
}

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fade = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
  
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${scale} 150ms forwards, ${fade} 300ms forwards;
`;

export default PoppingCirle;
