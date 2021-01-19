import React, { useContext } from "react";
import styled from "styled-components";

import Tweet from "./Tweet";

import avatar from "../assets/carmen-sandiego.png";
import {TweetProvider} from "../components/Tweet/TweetContext";

const App = () => {

  return (
    <Wrapper>
    <TweetProvider>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        isRetweetedByCurrentUser={false}
        isLikedByCurrentUser={false}
      />
    </TweetProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
