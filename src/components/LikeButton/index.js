import React, { useContext } from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle  from './PoppingCircle';
import ScaleIn from './ScaleIn';

import { TweetContext } from '../TweetContext';

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const data = useContext(TweetContext);
  const heartSize = size * 0.6;

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
        <PoppingCircle size={size} color="#E790F7" />
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
