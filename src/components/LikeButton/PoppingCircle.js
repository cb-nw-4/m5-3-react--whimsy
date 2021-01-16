import React from 'react';
import styled, { keyframes } from 'styled-components';

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
        opacity: 0%;
    }
    50% {
        opacity: 50%;
    }
    100% {
        opacity: 0%;
    }
`;

const Wrapper  = styled.div`
    border-radius: 50%;
    animation: ${scale} 300ms forwards, ${fade} 500ms ease-out forwards;
    position: absolute;
    z-index: 0;
`;

const PoppingCircle = ({ size, color }) => {
    return (
        <Wrapper  style={{ width: size, height: size, backgroundColor: color }}/>
    )
}

export default PoppingCircle; 