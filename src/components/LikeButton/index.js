import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";
import ConffettiPiece from "./ConfettiPiece";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";
import {range, sample, random} from "../../../src/utils";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {

  const { isLikedByCurrentUser} =  useContext(TweetContext);

  const heartSize = size * 0.6;


  return (
    <Wrapper style={{ width: size, height: size }}>

      {isLikedByCurrentUser && <PoppingCircle size={size} color="#E790F7" />}

      {isLikedByCurrentUser ? (
      <ScaleIn>
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      </ScaleIn>
      ) : <Heart width={heartSize} isToggled={isLikedByCurrentUser} /> }
      
      {isLikedByCurrentUser && range(12).map((i) => (
        <ConffettiPiece 
          key={i} 
          angle={360 * (i / 12)}
          distance={random(0, 40)}
          color={sample(PARTICLE_COLORS)}/>
      ))}
      
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
