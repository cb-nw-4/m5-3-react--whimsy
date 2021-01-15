import React from "react";
import styled from "styled-components";

export const Stat = ({ number, type }) => { 
    return (
        <StatDiv><strong>{number}</strong> {type}</StatDiv>
    ); 
};

const StatDiv = styled.div`
padding: 14px;
`;
