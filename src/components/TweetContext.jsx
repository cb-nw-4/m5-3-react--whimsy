import React, { useState } from "react";
import avatar from "../assets/carmen-sandiego.png";
const moment = require("moment");

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setnumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsReetweeted] = useState(false);

  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  const date = moment().format("hh:mm a - MMMM Do, YYYY");
  const size = 40;

  const handleToggleLike = () => {
    setIsLiked(() => {
      setnumOfLikes(!isLiked ? numOfLikes + 1 : numOfLikes - 1);
      return !isLiked;
    });
  };
  // setIsLiked(!isLiked);
  // setnumOfLikes(!isLiked ? numOfLikes + 1 : numOfLikes - 1);

  const handleToggleRetweet = () => {
    //this bit below sets if retweeted is true or false (which is returned at the bottom)
    setIsReetweeted(() => {
      //this bit below sets the number of retweets
      setNumOfRetweets(!isRetweeted ? numOfRetweets + 1 : numOfRetweets - 1);
      return !isRetweeted;
    });
  };
  return (
    <TweetContext.Provider
      value={{
        handleToggleRetweet,
        handleToggleLike,
        numOfLikes,
        setnumOfLikes,
        numOfRetweets,
        setNumOfRetweets,
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweeted,
        setIsReetweeted,
        isLiked,
        setIsLiked,
        date,
        size,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

// tweetContents="Where in the world am I?",
//     displayName="Carmen Sandiego ✨",
//     username="carmen-sandiego",
//     avatarSrc={avatar},
//     isRetweetedByCurrentUser={false},
//     isLikedByCurrentUser={false},
