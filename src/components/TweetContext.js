import React, { useState } from 'react';
import avatar from "../assets/carmen-sandiego.png";
import moment from 'moment';

export const TweetContext = React.createContext(null);

export const TweetProvider=({children})=>{
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const date = moment().format('h:mm A - MMM Do YYYY');
    let tweetContents="Where in the world am I?";
    let displayName="Carmen Sandiego ✨";
    let username="carmen-sandiego";
    let avatarSrc=avatar;
    let isRetweetedByCurrentUser=false;
    let isLikedByCurrentUser=false;

    return <TweetContext.Provider value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets
    }}>{children}</TweetContext.Provider>
};