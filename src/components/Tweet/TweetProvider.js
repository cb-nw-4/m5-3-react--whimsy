import React, { useState, useEffect } from "react";
import { TweetContext } from "./TweetContext";
import avatar from "../../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetProvider = ({ children }) => {
  const [numofLikes, setNumofLikes] = useState(400);
  const [numofRetweets, setNumofRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const date = moment().format("h:mm A- MMMM Do, YYYY ");
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = `${avatar}`;
  const isRetweetedByCurrentUser = isRetweeted;
  const isLikedByCurrentUser = isLiked;

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };
  useEffect(() => {
    setNumofLikes(numofLikes + 1);
    if (!isLiked) {
      setNumofLikes(400);
    }
  }, [isLiked]);

  const handleToggleRetweet = () => {
    setIsRetweeted(!isRetweeted);
  };
  useEffect(() => {
    setNumofRetweets(numofRetweets + 1);
    if (!isRetweeted) {
      setNumofRetweets(65);
    }
  }, [isRetweeted]);

  return (
    <TweetContext.Provider
      value={{
        date,
        numofLikes,
        numofRetweets,
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweeted,
        isLiked,
        handleToggleLike,
        handleToggleRetweet,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
