import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
//console.log("POP")
    return(
        <Wrapper style={{ width: size, height: size, backgroundColor: color }}/>
    )
};

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fade = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0; 
}
`;

const Wrapper = styled.div`
  animation: ${fade} 500ms ease-in forwards, ${scale} 300ms cubic-bezier(.66,.41,.69,.78) forwards;
  position: absolute;
  border-radius: 50%;
`;

export default PoppingCircle;