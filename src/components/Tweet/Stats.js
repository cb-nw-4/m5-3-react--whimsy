import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

const Stats = () => {
  const { numOfLikes, numOfRetweets } = useContext(TweetContext);
  return (
    <Wrapper>
      <BoldText>{numOfLikes}</BoldText>
      <Text>Likes </Text>
      <BoldText>{numOfRetweets}</BoldText>
      <Text> Retweets </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  height: 48px;
  padding-left: 0px;
`;

const Text = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-right: 16px;
  padding-top: 12px;
`;

const BoldText = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  font-weight: bold;
  padding-right: 8px;
  padding-top: 12px;
`;

export default Stats;
