import React, { useState } from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {

    const date = moment().format("LT - MMM Do, YYYY");

    const [ numOfLikes, setNumOfLikes ] = useState(460);
    const [ numOfRetweets, setNumOfRetweets ] = useState(65);
    const [ isLiked, setIsLike ] = useState(false);
    const [ isRetweeted, setIsRetweeted ]= useState(false);

    const handleToggleLike = () => {
        setIsLike(isLiked => !isLiked);
        //console.log("during button" + isLiked)
        isLiked ? setNumOfLikes(numOfLikes - 1): setNumOfLikes(numOfLikes + 1);
    };
    
    const handleToggleRetweet = () => {
        setIsRetweeted(isRetweeted => !isRetweeted);
        isRetweeted ? setNumOfRetweets(numOfRetweets - 1): setNumOfRetweets(numOfRetweets + 1);
    }

    return (
        <TweetContext.Provider value={{      
        tweetContents:"Where in the world am I?",
        displayName:"Carmen Sandiego ✨",
        username:"carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date: date,
        numOfLikes: numOfLikes,
        numOfRetweets: numOfRetweets,
        handleToggleLike: handleToggleLike,
        handleToggleRetweet: handleToggleRetweet
        }}>
            {children}
        </TweetContext.Provider>
    )
};
