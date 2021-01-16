import React from 'react';
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

const Wrapper = styled.div`
  position: absolute;
  z-index: 0; 
  border-radius: 50%; 
  animation: ${scale} 300ms ease forwards, ${fade} 800ms ease forwards;
  background-color: ${(props)=>props.color};
  height: ${(props)=>props.height};
  width: ${(props)=>props.width};  
  `;

const PoppingCircle = ({size, color})=> {
    return (
        <Wrapper
            color={color}
            width={size} 
            height={size}             
        />   
    );

};


export default PoppingCircle;