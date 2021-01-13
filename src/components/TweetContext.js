import avatar from "../assets/carmen-sandiego.png";
import React, { useState } from 'react';

import moment from 'moment';

export const TweetContext = React.createContext();

const time = moment().format('LT');
const date = moment().format('ll'); 
const dateTime = `${time} - ${date}`;

export const TweetProvider = ({ children }) => {
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
        
        if (isLiked === true) {
            setNumOfLikes(numOfLikes - 1);
        }
        else if (isLiked === false) {
            setNumOfLikes(numOfLikes + 1);
        }
    }

    const handleToggleRetweet = () => {
        setIsRetweeted(!isRetweeted);

        if (isRetweeted === true) {
            setNumOfRetweets(numOfRetweets - 1);
        }
        else if (isRetweeted === false) {
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
}

