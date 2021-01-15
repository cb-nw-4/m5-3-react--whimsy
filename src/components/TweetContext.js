import React, {useState} from "react";
import moment from 'moment';
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const date = moment(new Date()).format("h:mm A - MMM Do, YYYY");

    const handleToggleLike = ()=>{
        if (isLiked)
            setNumOfLikes((n) => n - 1);
        else
            setNumOfLikes((n) => n + 1);
        setIsLiked(!isLiked);
    };

    const handleToggleRetweet = ()=>{
        if (isRetweeted)
            setNumOfRetweets((n) => n - 1);
        else
            setNumOfRetweets((n) => n + 1);
        setIsRetweeted(!isRetweeted);
    };

    return (
        <TweetContext.Provider
            value={{
                tweetContents: "Where in the world am I?",
                displayName: "Carmen Sandiego ✨",
                username: "carmen-sandiego",
                avatarSrc: avatar,
                isRetweetedByCurrentUser: isRetweeted,
                isLikedByCurrentUser: isLiked,
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
};//new