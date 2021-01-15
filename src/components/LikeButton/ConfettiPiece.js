import React from 'react';
import styled from "styled-components";
import Circle from './Circle';
import Particle from './Particle';


const CenteredInsideParent = styled.div`

    display: flex;
    position: absolute; 
    align-items: center;
    justify-content: center;
    
`;

const ConffettiPiece = (({angle, distance, color}) => {
    
    return ( <CenteredInsideParent>
                <Particle angle={angle} distance={distance}>
                    <Circle color={color} /> 
                </Particle>
            </CenteredInsideParent>
    
        );

})



export default ConffettiPiece;