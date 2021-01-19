import React from "react";
import styled, { keyframes } from "styled-components";

import Heart from "./Heart";
import { TweetContext } from '../Tweet/TweetContext';
import PoppingCircle from "../LikeButton/PoppingCircle";
import ScaleIn from '../LikeButton/ScaleIn';

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const heartSize = size * 0.6;
  const { isLiked, isLikedByCurrentUser } = React.useContext(TweetContext);
  console.log(isLikedByCurrentUser,'isLikedByCurrentUser')

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLiked} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLiked} />
      )}
      {/* {isLikedByCurrentUser && <PoppingCircle size={size} color="#E790F7" />} */}
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
