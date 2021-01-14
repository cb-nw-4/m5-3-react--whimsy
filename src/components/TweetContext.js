import React, { createContext, useState } from 'react';
import moment from 'moment';
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  const now = moment().format('h:mm A - MMM DDDo, YYYY');

  return (
    <TweetContext.Provider
      value={{
        numOfLikes,
        numOfRetweets,
        isRetweeted,
        isLiked,
        tweetContents,
        displayName,
        username,
        avatarSrc,
        now
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
