import React, { useContext } from "react";

import styled, { keyframes } from "styled-components";
import { TweetContext } from "../Tweet/TweetContext";
import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import PopEffect from "./PopEffect";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = () => {
  const { isLiked } = useContext(TweetContext);
  let size = 40;
  const heartSize = size * 0.6;

  return (
    
   
    <Wrapper style={{ width: size, height: size }}>
    {isLiked && <PoppingCircle  color="#E790F7" /> } 
    {isLiked ? (
      <PopEffect >
 <Heart width={heartSize} isToggled={isLiked} />
 </PopEffect>
    ) :  <Heart width={heartSize} isToggled={isLiked} />}
  
     
    </Wrapper>
  
  );
};



const Wrapper = styled.div`

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.div`
 position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const PoppingEffect = styled(Circle)`
// width:100px;
// height:100%;
// animation: ${turnBlue} 500ms;
// z-index:2;
// `;

export default LikeButton;
