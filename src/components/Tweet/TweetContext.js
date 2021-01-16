import React, { useState } from "react";
import moment from 'moment'
import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);
const TweetProvider =({children})=>{
    const [numOfLikes, setNumOfLikes] = useState(460)
    const [numOfRetweets , setnumOfRetweets] = useState(65)
    const [isLiked, setIsLiked] = useState(false)
    const [isRetweeted, setIsRetweeted] = useState(false)

    const date = moment().format('h:mm A - MMM Do, YYYY');

    const handleToggleLike = () => {
        if (isLiked)
        setNumOfLikes((like) => like - 1 )
        else
        setNumOfLikes((like) => like + 1 )
        setIsLiked(!isLiked)
    }
    const handleToggleRetweet = () => {
        if (isRetweeted)
        setnumOfRetweets((tweet) => tweet - 1 )
        else
        setnumOfRetweets((tweet) => tweet + 1 )
        setIsRetweeted(!isRetweeted)
    }
    return (
        <TweetContext.Provider
        value={{
            tweetContents:"Where in the world am I?",
            displayName:"Carmen Sandiego ✨",
            username:"carmen-sandiego",
            avatarSrc:avatar,
            isRetweetedByCurrentUser:isRetweeted,
            isLikedByCurrentUser:isLiked,
            date,
            numOfLikes,
            numOfRetweets,
            handleToggleLike,
            handleToggleRetweet,
            isLiked,
        }}
        >
            {children}
    </TweetContext.Provider>
    )

}


export default TweetProvider; 