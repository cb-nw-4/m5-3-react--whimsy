import React, { createContext, useState } from "react";
import avatar from "../assets/carmen-sandiego.png";
import Moment from 'moment';

export const TweetContext = createContext(null);

export const TweetProvider = ({children}) => {
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);
    
    const tweetContents = " Where in the world am I?";
    const displayName = "Carmen Sandiego ✨";
    const username = "carmen-sandiego";
    const avatarSrc = avatar;
    // const isRetweetedByCurrentUser = isLiked;
    // const isLikedByCurrentUser = isRetweeted;
    const time = Moment().format('LT');
    const date = Moment().format("MMM Do YYYY");

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
        if (isLiked) {
            setNumOfLikes(numOfLikes - 1);
        } else {
            setNumOfLikes(numOfLikes + 1);
        }
    };

    const handleToggleRetweet = () => {
        setIsRetweeted(!isRetweeted);
        if (isRetweeted) {
            setNumOfRetweets(numOfRetweets - 1);
        } else {
            setNumOfRetweets(numOfRetweets + 1);
        }
    }

    return (
        <TweetContext.Provider
            value={{
                tweetContents,
                displayName,
                username,
                avatarSrc,
                // isRetweetedByCurrentUser,
                // isLikedByCurrentUser, 
                isLiked,
                isRetweeted,
                time,
                date,
                numOfLikes,
                numOfRetweets,
                handleToggleLike,
                handleToggleRetweet
            }}
            >
            {children}
        </TweetContext.Provider>
    )
};