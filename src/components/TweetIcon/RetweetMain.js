import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "../Tweet/TweetContext";
import TweetActionIcon from "./TweetActionIcon";
import RetweetIcon from "./RetweetIcon";
import Spin from "./Spin";
import AnimatedSpin from "./AnimatedSpin";

const RetweetMain = () => {
  const { isRetweetedByCurrentUser } = useContext(TweetContext);

  return (
    <Wrapper>
      {isRetweetedByCurrentUser && <Spin />}
      {isRetweetedByCurrentUser ? (
        <AnimatedSpin>
          <RetweetIcon isToggle={isRetweetedByCurrentUser} />
        </AnimatedSpin>
      ) : (
        <RetweetIcon isToggle={isRetweetedByCurrentUser} />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RetweetMain;
