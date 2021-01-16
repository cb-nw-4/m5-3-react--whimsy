import React from "react";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";

const Stats = () => {
  const { numOfLikes, numOfRetweets } = React.useContext(TweetContext);
  return (
    <StatsStyling>
      <strong>{numOfRetweets}</strong>&nbsp;Retweets&nbsp;&nbsp;&nbsp;&nbsp;
      <strong>{numOfLikes}</strong>&nbsp;Likes
    </StatsStyling>
  );
};
const StatsStyling = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;
export default Stats;
