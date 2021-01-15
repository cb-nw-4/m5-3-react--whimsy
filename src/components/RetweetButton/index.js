import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";

import Retweet from "./Retweet";
import PoppingCircle from "../LikeButton/PoppingCircle";
import AnimateRetweet from "./AnimateRetweet";
import ConffettiPiece from "../LikeButton/ConfettiPiece";
import {range, sample, random} from "../../../src/utils";


const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const RetweetButton = ({ size = 40 }) => {

    const { isRetweetedByCurrentUser} =  useContext(TweetContext);

  const RetweetSize = size * 0.6;


    return (
        <Wrapper style={{ width: size, height: size }}>

    {isRetweetedByCurrentUser && <PoppingCircle size={size} color="#43a047" />}

    {isRetweetedByCurrentUser ? (
        <AnimateRetweet >
            <Retweet width={RetweetSize} isToggled={isRetweetedByCurrentUser} />
        </AnimateRetweet>
    ) : <Retweet width={RetweetSize} isToggled={isRetweetedByCurrentUser} /> }

    {isRetweetedByCurrentUser && range(12).map((i) => (
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

export default RetweetButton;