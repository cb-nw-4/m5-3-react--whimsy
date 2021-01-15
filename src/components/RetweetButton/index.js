import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";

import Retweet from "./Retweet";
import PoppingCircle from "../LikeButton/PoppingCircle";
import AnimateRetweet from "./AnimateRetweet";

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