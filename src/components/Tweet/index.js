import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import {TweetContext} from "./TweetContext";

const Tweet = () => {
  const {tweetData, date, actionData} = useContext(TweetContext);

  return (
    <Wrapper>
      <Header/>
      <TweetContents>{tweetData.tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stats>
        <Number>{actionData.numOfRetweets}</Number> Retweets 
        <Likes><Number>{actionData.numOfLikes}</Number> Likes</Likes></Stats>
      <Divider/>
      <ActionBar/>
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
  color: rgb(101, 119, 134);
  font-size: 16px;
`;

const Number = styled.div`
  font-weight: bold;
  color: black;
  padding-right: 6px;
`;

const Likes = styled.div`
  padding-left: 30px;
  display: flex;
`;

export default Tweet;
