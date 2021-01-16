import React from 'react'
import styled, { keyframes } from "styled-components";

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
const Circle = styled.div`
    border-radius: 50%;
    position: absolute;
    animation: ${fade} 500ms ease-in forwards, ${scale} 300ms cubic-bezier(0.44, 0.11, 0.93, 0.72) forwards; 
    
`;


function PoppingCircle({size, color}) {
  return (
    <Circle style={{width: size, height: size, background: color}}/>
  )
}



export default PoppingCircle
