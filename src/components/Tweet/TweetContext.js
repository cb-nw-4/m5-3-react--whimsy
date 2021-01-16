import React, { createContext, useState } from 'react';
import moment from 'moment';

import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = createContext();;

const dateTime = `${moment().format('LT')} - ${moment().format('ll')}`;

export const TweetProvider = ({ children }) => {
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
        if (isLiked) {
            setNumOfLikes(numOfLikes - 1);
        } else {
            setNumOfLikes(numOfLikes + 1);
        }
    }

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
                tweetContents: "Where in the world am I?",
                displayName: "Carmen Sandiego ✨",
                username: "carmen-sandiego",
                avatarSrc: avatar,
                isRetweetedByCurrentUser: isRetweeted,
                isLikedByCurrentUser: isLiked,
                date: dateTime,
                numOfLikes,
                numOfRetweets,
                handleToggleLike,
                handleToggleRetweet
            }}
            >
            {children}
        </TweetContext.Provider>
    );
};