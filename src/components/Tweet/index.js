import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { TweetContext } from './TweetContext';
import moment from "moment";

const Tweet = ({
  // displayName,
  // username,
  // avatarSrc,
  // tweetContents,
  // isRetweetedByCurrentUser,
  // isLikedByCurrentUser,
}) => {
  const {
    tweetContents,
    displayName,
    username,
    avatarSrc,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
    numOfLikes,
    numOfRetweets,
    isLiked,
    isRetweeted,
  } = React.useContext(
    TweetContext
  );

  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{moment().format('MMM Do YYYY, h:mm:ss a')}</Timestamp>
      <Divider />
      <Stats>
        <span><strong>{numOfRetweets}</strong> Retweets</span> <Span><strong>{numOfLikes}</strong> Likes</Span>
      </Stats>
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isLiked}
        isLikedByCurrentUser={isRetweeted}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const Span = styled.span`
  margin-left: 20px;
`;

export default Tweet;
