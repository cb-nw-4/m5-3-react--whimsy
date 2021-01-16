import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import Stats from "./Stats"
import { TweetContext } from "../TweetContext";

const Tweet = ({
  displayName,
  username,
  avatarSrc,
  tweetContents,
  isRetweetedByCurrentUser,
  isLikedByCurrentUser,
  date,
  numOfLikes,
  numOfRetweets
}) => {
  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stat>
        <Stats number={numOfLikes} string="Likes"/>
        <Stats number={numOfRetweets} string="Retweets"/>
      </Stat>
      
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
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

const Stat = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export default Tweet;
