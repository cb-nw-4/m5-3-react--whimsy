import moment from "moment";
import React from "react";

import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
    const tweetContents="Where in the world am I?";
    const displayName="Carmen Sandiego ✨";
    const username="carmen-sandiego";
    const avatarSrc=avatar;
    const date = moment().format('h:mm A・MMM Do, YYYY');
    const [ numOfLikes, setNumOfLikes ] = React.useState(460); 
    const [ numOfRetweets, setNumOfRetweets ] = React.useState(65); 
    const [ isLiked, setIsLiked ] = React.useState(false);
    const [ isRetweeted, setIsRetweeted ]  = React.useState(false);
    const isRetweetedByCurrentUser=isRetweeted;
    const isLikedByCurrentUser=isLiked;

    const handleToggleLike =()=>{
        setIsLiked(!isLiked);
        if(isLiked===false){
            setNumOfLikes(numOfLikes+1);
        } else {
            setNumOfLikes(numOfLikes-1);
        };
    };

    const handleToggleRetweet =()=>{
        setIsRetweeted(!isRetweeted);
        if (isRetweeted===false) {
            setNumOfRetweets(numOfRetweets+1);
        } else {
            setNumOfRetweets(numOfRetweets-1);
        }; 
    }; 

    return (
        <TweetContext.Provider 
        value={{
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
        }}
        > 
            {children}
        </TweetContext.Provider>
    );
};