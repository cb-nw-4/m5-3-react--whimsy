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
    const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false);

    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);


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
            }}
        >
            {children}
            
        </TweetContext.Provider>
    )

}