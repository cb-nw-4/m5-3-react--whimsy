import React, { useContext } from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import PoppingCircle from '../LikeButton/PoppingCircle';
import Rotate from './Rotate';

import { TweetContext } from '../TweetContext';

const ActionBar = ({ size = 40 }) => {
  const data = useContext(TweetContext);
  
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action color="rgb(23, 191, 99)" size={40} onClick={data.handleToggleRetweet}>
        {data.isRetweetedByCurrentUser ? (
          <Rotate>
            <TweetActionIcon
              kind="retweet"
              color={data.isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            />
          </Rotate>
        ) : (
          <TweetActionIcon
              kind="retweet"
              color={data.isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            />
        )}
        {data.isRetweetedByCurrentUser && 
        <PoppingCircle size={size} color="#23d973" />
        }
      </Action>
      <Action color="rgb(224, 36, 94)" size={40} onClick={data.handleToggleLike}>
        <LikeButton />
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
