import React from "react";
import styled from "styled-components";

import Tweet from "./Tweet";
import {TweetProvider} from './TweetContext'
import avatar from "../assets/carmen-sandiego.png";

const App = () => {

  

  return (
    <TweetProvider>
      <Wrapper>
        <Tweet
          tweetContents="Where in the world am I?"
          displayName="Carmen Sandiego ✨"
          username="carmen-sandiego"
          avatarSrc={avatar}
          isRetweetedByCurrentUser={false}
          isLikedByCurrentUser={false}
        />
      </Wrapper>
    </TweetProvider>
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
