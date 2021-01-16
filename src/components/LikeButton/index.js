import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = () => {
  const { isLikedByCurrentUser, size } = useContext(TweetContext);
  const heartSize = size * 0.6;

  return (
    <Wrapper>
      {isLikedByCurrentUser ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
          <PoppingCircle size={size} color="#E790F7" />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
