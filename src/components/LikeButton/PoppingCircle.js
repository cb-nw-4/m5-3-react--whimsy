import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = (props) => {
    return <Effect style={{width: props.size, height: props.size}}/>
};

const colorChange = keyframes`
    from {
        color: inherit;
        opacity: 0;
        transform: scale(0);
    }
    to {
        color: ${props => props.color};
        opacity: 1;
        transform: scale(1);
    }
`;

const colorChangeFade = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0);
    }
`;

const Effect = styled.div`
    animation: ${colorChange} 1000ms forwards, ${colorChangeFade} 500ms forwards;
    border-radius: 50%;
    border: 1px solid ${props => props.color};
    position: absolute;
`;

export default PoppingCircle;