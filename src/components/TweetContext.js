import React, { createContext } from 'react';
import moment from 'moment';
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  const isRetweetedByCurrentUser = false;
  const isLikedByCurrentUser = false;
  const now = moment().format('h:m A - MMM DDDo, YYYY');

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        now
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
