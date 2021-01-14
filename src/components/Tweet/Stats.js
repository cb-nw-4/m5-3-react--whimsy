import React from "react";
import styled from "styled-components";


const Stats=({ number, string })=>{
    return(
        <Stat>
            <p><strong>{number} </strong> {string}</p>
        </Stat>
    )
}



const Stat = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    margin-inline-end:30px;
`;

export default Stats;