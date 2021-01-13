import moment from 'moment';
import React from 'react';
import avatar from "../assets/carmen-sandiego.png";


export const TweetContext = React.createContext(null);

export const TweetProvider =({children}) =>{

    const data = {
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        tweetContents: "Where in the world am I?",
        isRetweetedByCurrentUser:  false,
        isLikedByCurrentUser: false
    };

    const date = moment().format('h:mm a - MMM Do, YYYY');


    return <TweetContext.Provider 
                value={{tweetContents: data.tweetContents,
                displayName: data.displayName,
                username: data.displayName,
                avatarSrc: data.avatarSrc,
                isRetweetedByCurrentUser: data.isRetweetedByCurrentUser,
                isLikedByCurrentUser: data.isLikedByCurrentUser,
                date
                    
                }}
    >
        {children}
    </TweetContext.Provider>


}
