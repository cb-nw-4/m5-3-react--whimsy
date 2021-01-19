import React from 'react';
import styled, { keyframes } from 'styled-components';

const PoppingCircle = ({ size, color }) => {

    return (
        <PoppingStyle style={{
            background: color,
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
        }}>
        </PoppingStyle>
    );
}

const scale = keyframes`
    from {
    transform: scale(0);
    }
    to {
    transform: scale(1);
    }
`;
const fade = keyframes`
    from {
    opacity: 1;
    }
    to {
    opacity: 0;
    }
`;
const PoppingStyle = styled.div`
    animation: ${fade} 1500ms forwards, ${scale} 500ms forwards;
`


export default PoppingCircle;