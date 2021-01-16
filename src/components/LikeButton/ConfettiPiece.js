import React from 'react';
import styled from 'styled-components';
import Particle from './Particle';

const Circle = styled.div`
    height: 3px;
    width: 3px;
    border-radius: 50%;
`;

const CenteredWithinParent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

const ConfettiPiece = ({ angle, distance, color }) => {
    return (
        <CenteredWithinParent>
            <Particle angle={angle} distance={distance}>
                <Circle style={{backgroundColor: color, boxShadow: `0 0 2px 1px ${color}`}} />
            </Particle>
        </CenteredWithinParent>
    );
}

export default ConfettiPiece;