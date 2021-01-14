import moment from "moment";
import React from "react";
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format('h:mm:ss a, MMMM Do YYYY');
  
  const data = {
    tweetContents: "Where in the world am I?",
    displayName: "Carmen Sandiego ✨",
    username: "carmen-sandiego",
    avatarSrc: avatar,
    isRetweetedByCurrentUser: false,
    isLikedByCurrentUser: false,
    date: date,
  };

  return (
    <TweetContext.Provider
      value={data}
      >
        {children}
    </TweetContext.Provider>    
  )
}