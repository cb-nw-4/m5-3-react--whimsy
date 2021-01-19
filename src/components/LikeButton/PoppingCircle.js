import React from "react";
import styled, {keyframes} from "styled-components";

 const PoppingCircle = ({size, color})=>{
     return <Circle></Circle>;

};

const turnPink = keyframes`
    0% { opacity: 0%;}
    50%{opacity: 30%;}
    100%{opacity: 0%;}
`;
const scale = keyframes`
    0% { transform: scale(0);}
    50% { transform: scale(0.5);}
    100%{transform: scale(1);}
`;

const Circle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0%;
    background-color: #E790F7;
    animation: ${scale} 300ms forwards, ${turnPink} 500ms forwards;
    `;

export default  PoppingCircle;
