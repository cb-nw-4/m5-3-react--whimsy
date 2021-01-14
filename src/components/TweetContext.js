import moment from "moment";
import React, { useState } from "react";
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const date = moment().format('h:mm:ss a, MMMM Do YYYY');

  const data = {
    tweetContents: "Where in the world am I?",
    displayName: "Carmen Sandiego ✨",
    username: "carmen-sandiego",
    avatarSrc: avatar,
    isRetweetedByCurrentUser: isRetweeted,
    isLikedByCurrentUser: isLiked,
    date: date,
    numOfLikes: numOfLikes,
    numOfRetweets: numOfRetweets,
  };

  return (
    <TweetContext.Provider
      value={data}
      >
        {children}
    </TweetContext.Provider>    
  )
}