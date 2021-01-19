import React, { useState } from 'react';

// import avatar from "../assets/carmen-sandiego.png";
import avatar from '../../assets/carmen-sandiego.png';

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
    const [tweetContents, setTweetContents] = useState("Where in the world am I?");
    const [displayName, setDisplayName] = useState("Carmen Sandiego ✨");
    const [username, setUsername] = useState("carmen-sandiego");
    const [avatarSrc, setAvatarSrc] = useState(avatar);
    const [isRetweetedByCurrentUser, setIsRetweetedByCurrentUser] = useState(false);
    const [isLiked, setIsLiked] = useState(false);//To Change
    const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false);

    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    // const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const handleToggleLike = () => {
        // (isLiked) ? setIsLiked(false) : setIsLiked(true);
        if(!isLiked){
            setIsLiked(true);
            setNumOfLikes(numOfLikes + 1);
            setIsLikedByCurrentUser(true);
        } else {
            setIsLiked(false)
            setNumOfLikes(numOfLikes - 1);
            setIsLikedByCurrentUser(false);
        }
        console.log('handleToggleLike Clicked');
    }

    const handleToggleRetweet = () => {
        if(!isRetweeted){
            setIsRetweeted(true);
            setNumOfRetweets(numOfRetweets + 1);
            setIsRetweetedByCurrentUser(true);
        } else {
            setIsRetweeted(false);
            setNumOfRetweets(numOfRetweets - 1);
            setIsRetweetedByCurrentUser(true);
        }
        console.log('handleToggleRetweet Clicked');
    }



    return (
        <TweetContext.Provider
            value={{
                tweetContents,
                displayName,
                username,
                avatarSrc,
                isRetweetedByCurrentUser,
                isLikedByCurrentUser,
                numOfLikes,
                numOfRetweets,
                isLiked,
                isRetweeted,
                handleToggleLike,
                handleToggleRetweet,
            }}
        >
            {children}
            
        </TweetContext.Provider>
    )
}
