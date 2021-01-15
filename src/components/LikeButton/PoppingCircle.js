import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle=({ size, color })=>{
    return(
        <Wrapper style={{
            background: color, 
            width: size, 
            height: size,}}
        />
    )
};

const thePopper = keyframes`
        from {
            transform: scale(0);
        }
        to {
            transform:scale(1);
        }
`;

const fade = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity:0;
    }
`;

const Wrapper = styled.div`
    display: block;
    border-radius: 50%;
    position: absolute;
    animation: ${fade} 500ms forwards, ${thePopper} 300ms forwards;
`;


export default PoppingCircle;

