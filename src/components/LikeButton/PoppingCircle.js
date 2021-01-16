import React from "react";
import styled, { keyframes } from "styled-components";

const scale = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
      transform: scale(1);
  }
`;

const fade = keyframes`
  0% {
      opacity: 0%;
  }
  50% {
      opacity: 50%;
  }
  100% {
      opacity: 100%;
  }
`;

const Circle = styled.div` 
    animation: ${scale} 300ms forwards, ${fade} 500ms ease-out forwards;
    z-index: 0;
    position: absolute;
    border-radius: 50%;
`;

const PoppingCircle = ({size, color}) => {
  return (
    <Circle style={{ height: size, width: size, backgroundColor: color }} />
  )
}

export default PoppingCircle;
