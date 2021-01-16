import React from 'react';
import styled from 'styled-components';

import Particle from './Particle';

const ConfettiPiece = ({ angle, distance, color, delay }) => {
  return (
    <CenteredWithinParent>
      <Particle angle={angle} distance={distance} delay={delay}>
        <Piece color={color}/>
      </Particle>
    </CenteredWithinParent>
  );
}

const CenteredWithinParent = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  justify-content: center;
  align-items: center;
`;

const Piece = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export default ConfettiPiece;
