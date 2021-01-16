import React, { useContext} from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from './PoppingCircle';
import ScaleIn from './ScaleIn';
import ConfettiPiece from './ConfettiPiece';
import { range, random } from '../../utils';

import { TweetContext } from '../TweetContext';

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const heartSize = size * 0.6;
  const { isLiked } = useContext(TweetContext);

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLiked} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLiked} />
      )}
      {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      {isLiked &&
        range(12).map((i) => (
          <ConfettiPiece
            key={i}
            angle={random(1, 360)}
            distance={random(10, 40)}
            delay={random(0, 250)}
            color={PARTICLE_COLORS[random(0, 4)]}
          />
        ))
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export default LikeButton;
