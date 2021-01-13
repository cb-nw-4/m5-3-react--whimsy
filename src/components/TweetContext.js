import avatar from "../assets/carmen-sandiego.png";
import React from 'react';

import moment from 'moment';

export const TweetContext = React.createContext();

const time = moment().format('LT');
const date = moment().format('ll'); 
const dateTime = `${time} - ${date}`;

export const TweetProvider = ({ children }) => {
    return (
        <TweetContext.Provider 
            value={{ 
                tweetContents: "Where in the world am I?",
                displayName: "Carmen Sandiego ✨",
                username: "carmen-sandiego",
                avatarSrc: avatar,
                isRetweetedByCurrentUser: false,
                isLikedByCurrentUser: false,
                date: dateTime
            }}
        >
        {children}
        </TweetContext.Provider>
    );
}

