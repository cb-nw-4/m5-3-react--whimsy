import avatar from "../assets/carmen-sandiego.png";
import React from 'react';

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
    return (
        <TweetContext.Provider 
            value={{ 
                tweetContents: "Where in the world am I?",
                displayName: "Carmen Sandiego ✨",
                username: "carmen-sandiego",
                avatarSrc: avatar,
                isRetweetedByCurrentUser: false,
                isLikedByCurrentUser: false
            }}
        >
        {children}
        </TweetContext.Provider>
    );
}