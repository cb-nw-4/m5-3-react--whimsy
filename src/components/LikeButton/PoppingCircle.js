import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Wrapper style={{ width: size, height: size, background: color }} />;
};

const fade = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `;

const scale = keyframes`
from {
  transform: scale(0);
}
to {
  transform: scale(1);
}
`;

const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${fade} 500ms ease-in forwards, ${scale} 500ms forwards;
`;

export default PoppingCircle;
