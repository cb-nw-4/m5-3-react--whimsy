import React from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;

  const size = 40;

  const date = moment().format("h:mm a - MMM Do, YYYY"); // January 14th 2021, 6:40:30 pm

  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  const handleToggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setNumOfLikes(numOfLikes + 1);
      console.log(numOfLikes);
      console.log("I set it to False!");
    } else {
      setIsLiked(true);
      setNumOfLikes(numOfLikes - 1);
      console.log(numOfLikes);
      console.log("I set it to True!");
    }
  };

  const handleRetweet = () => {
    if (isRetweeted) {
      setIsRetweeted(false);
      setNumOfRetweets(numOfRetweets + 1);
      console.log(numOfRetweets);
      console.log("I set it to",isRetweeted);
    } else {
      setIsRetweeted(true);
      setNumOfRetweets(numOfRetweets - 1);
      console.log(numOfRetweets);
      console.log("I set it to",isRetweeted);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        numOfRetweets,
        size,
        handleToggleLike,
        handleRetweet
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
