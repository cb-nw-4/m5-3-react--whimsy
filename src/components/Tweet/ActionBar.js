import React, { useContext } from "react";
import styled from "styled-components";
import LikeButton from "../LikeButton";
import Action from "./Action";
import RetweetMain from "../TweetIcon/RetweetMain";
import TweetActionIcon from "../TweetIcon/TweetActionIcon";
import { TweetContext } from "../Tweet/TweetContext";

const ActionBar = () => {
  const {
    handleToggleLike,
    handleToggleRetweet,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
  } = useContext( TweetContext);
console.log(isLikedByCurrentUser)
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action onClick={handleToggleRetweet} color="rgb(23, 191, 99)" size={40}>
        <RetweetMain />
       
      </Action>
      <Action onClick={handleToggleLike} color="rgb(224, 36, 94)" size={40}>
        <LikeButton   />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
