import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated} from 'react-spring';

const PoppingCircle = ({ size, color }) => {
    const style = useSpring({
        //
        // opacity: 1, from: {opacity: 0}
    });

    return (
        <PoppingStyle style={style}>
        </PoppingStyle>
    );
}

const PoppingKeyframe = keyframes`
    /* from {
    color: inherit;
    }
    to {
    color: red;
    } */
`;

const PoppingStyle = styled(animated.button)`
    /* animation: ${PoppingKeyframe} 1000ms; */
    background: black;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
`


export default PoppingCircle;