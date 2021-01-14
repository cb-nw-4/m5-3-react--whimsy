import React, { useState } from 'react';
import avatar from "../assets/carmen-sandiego.png";
import moment from 'moment';

export const TweetContext = React.createContext(null);

export const TweetProvider=({children})=>{
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isRetweetedByCurrentUser, setIsRetweetedByCurrentUser] = useState(false);
    const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false);
    const date = moment().format('h:mm A - MMM Do YYYY');
    let tweetContents="Where in the world am I?";
    let displayName="Carmen Sandiego ✨";
    let username="carmen-sandiego";
    let avatarSrc=avatar;

    const handleToggleLike=()=>{
        if(!isLikedByCurrentUser){
            setNumOfLikes(numOfLikes+1);
            setIsLikedByCurrentUser(true);
        }
        else{
            setNumOfLikes(numOfLikes-1);
            setIsLikedByCurrentUser(false);
        }
    }
    const handleToggleRetweet=()=>{
        if(!isRetweetedByCurrentUser){
            setNumOfRetweets(numOfRetweets+1);
            setIsRetweetedByCurrentUser(true);
        }
        else{
            setNumOfRetweets(numOfRetweets-1);
            setIsRetweetedByCurrentUser(false);
        }
    }

    return <TweetContext.Provider value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweet
    }}>{children}</TweetContext.Provider>
};