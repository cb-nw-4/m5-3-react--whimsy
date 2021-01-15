import moment from 'moment';
import React, { useState } from 'react';
import avatar from "../assets/carmen-sandiego.png";


export const TweetContext = React.createContext(null);

export const TweetProvider =({children}) =>{

    const date = moment().format('h:mm a - MMM Do, YYYY');

    const [numOfLikes, setNumofLikes]= useState(460);
    const [numOfRetweets, setNumofRetweets]= useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const handleToggleLike = () =>{
        setIsLiked(!isLiked);
        !isLiked ? setNumofLikes(numOfLikes + 1) : setNumofLikes(numOfLikes -1);

    }

    const handleToggleRetweet = () =>{
        setIsRetweeted(!isRetweeted);
        !isRetweeted ? setNumofRetweets(numOfRetweets + 1) : setNumofRetweets(numOfRetweets -1);

    }

    const data = {
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        tweetContents: "Where in the world am I?",
        isRetweetedByCurrentUser:  isRetweeted,
        isLikedByCurrentUser: isLiked
    };



    return <TweetContext.Provider 
                value={{tweetContents: data.tweetContents,
                displayName: data.displayName,
                username: data.username,
                avatarSrc: data.avatarSrc,
                isRetweetedByCurrentUser: data.isRetweetedByCurrentUser,
                isLikedByCurrentUser: data.isLikedByCurrentUser,
                date,
                numOfLikes,
                numOfRetweets,
                handleToggleLike,
                handleToggleRetweet
                }}
    >
        {children}
    </TweetContext.Provider>


}
