import React from "react";
import styled from "styled-components";

const Stats = ({ numOfRetweets, numOfLikes }) => {
  return (
    <Wrapper>
      <strong>{numOfRetweets}&nbsp;</strong>Retweets&nbsp;
      <strong>{numOfLikes}&nbsp;</strong>Likes
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export default Stats;
