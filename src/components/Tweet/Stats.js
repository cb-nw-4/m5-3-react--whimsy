import React from "react";
import styled from "styled-components";


const Stats = ({num, children}) => {
return(
    <StatsContainer>
        <p><strong>{num} </strong><Span>{children}</Span></p>
    </StatsContainer>
)
}

const StatsContainer = styled.div`
    display:flex;
    align-items:center;
    height:50px;
    
    
`;
const Span = styled.span`
    color: rgb(101, 119, 134);
    margin-right:20px;
`;

export default Stats;