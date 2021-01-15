import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity:1;
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

export const PoppingCircle =({ size, color })=>{
    return (
        <Circle 
            style={{ 
                width: size, 
                height: size, 
                backgroundColor:color,
            }}
        />
    ); 
};

const Circle = styled.div`
border-radius:50%;
animation: ${fadeIn} 500ms forwards, ${scale} 300ms forwards;
opacity:0; 
`;
