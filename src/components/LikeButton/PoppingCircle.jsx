import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ color, size }) => {
  return (
    <Wrapper
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
};

const turnPink = keyframes`
  from {
    
    opacity: 1;
       transform: scale (0);
     }
     to {
       opacity: 0;
       transform: scale (1);
     }}
`;

const Wrapper = styled.div`
  animation: ${turnPink} 500ms forwards;
  display: block;
  position: absolute;
  z-index: 0;
  border-radius: 50%;
`;

export default PoppingCircle;
