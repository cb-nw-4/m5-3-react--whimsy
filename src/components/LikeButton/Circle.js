import React from 'react';
import styled from "styled-components";


const Circle = ({color}) => {
    return ( 
        <Wrapper style={{backgroundColor: color }} >
            
            </Wrapper>
    );
}


const Wrapper = styled.div`
    border-radius: 50%;
    width: 10px;
    height: 10px;
`;
export default Circle;