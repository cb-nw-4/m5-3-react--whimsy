import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";
import Header from "./Header";
import ActionBar from "./ActionBar";
import Stats from "./Stats";

const Tweet = () => {
  const {
    date,
    numofLikes,
    numofRetweets,
    tweetContents,
    displayName,
    username,
    avatarSrc,
    isRetweeted,
    isLiked,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
  } = useContext(TweetContext);

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
      <Stats numofRetweets={numofRetweets} numofLikes={numofLikes} />
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
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

export default Tweet;
