import React, { useContext, useRef } from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle  from './PoppingCircle';
import ScaleIn from './ScaleIn';
import ConfettiPiece from './ConfettiPiece';
import { range, sample, random } from '../../utils';

import { TweetContext } from '../TweetContext';

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const data = useContext(TweetContext);
  const heartSize = size * 0.6;

  const Confetti = useRef(
    range(12).map((i) => (
      <ConfettiPiece 
        key={i}
        angle={360 * (i / 12)}
        distance={random(5, 25)}
        color={sample(PARTICLE_COLORS)}
      />
    ))
  )

  return (
    <Wrapper style={{ width: size, height: size }}>
      {data.isLikedByCurrentUser ? (
      <ScaleIn>
        <Heart width={heartSize} isToggled={data.isLikedByCurrentUser} />
      </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={data.isLikedByCurrentUser} />
      )}
      {data.isLikedByCurrentUser && 
        <>
        <div style={{ position: 'absolute' }}>
        {Confetti.current}
        </div>
        <PoppingCircle size={size} color="#E790F7" />
        </>
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
