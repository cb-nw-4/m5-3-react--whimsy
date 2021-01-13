import React from "react";
import styled from "styled-components";

const Stats = ({ numofRetweets, numofLikes }) => {
  return (
    <Wrapper>
      <Main>
        <Span>{numofRetweets}</Span> Retweets
      </Main>
      <Main>
        <Span>{numofLikes} </Span>Likes
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 48px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;
const Main = styled.p`
  padding: 5px;
  color: rgb(101, 119, 134);
`;
const Span = styled.span`
  font-weight: bold;
  color:black;
`;
export default Stats;
