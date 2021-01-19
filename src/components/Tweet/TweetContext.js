import moment from "moment";
import React, { useEffect, useState } from "react";
import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({children})=>{

    const tweetData = {
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc:avatar,
    };

    const [actionData, setActionData] = useState({
        numOfLikes: 460,
        numOfRetweets: 65,
        isLiked: false,
        isRetweeted: false
    });

    const handleToggleLike = ()=>{
            if(actionData.isLiked===true){
                setActionData({...actionData, numOfLikes: (actionData.numOfLikes-1),
                    isLiked: false});
            }else{
                setActionData({...actionData, numOfLikes: (actionData.numOfLikes+1),
                    isLiked: true});
            }
    };

    const handleToggleTweet = ()=>{
        if(actionData.isRetweeted===true){
            setActionData({...actionData, numOfRetweets: (actionData.numOfRetweets-1),
                isRetweeted: false});
        }else{
            setActionData({...actionData, numOfRetweets: (actionData.numOfRetweets+1),
                isRetweeted: true});
        }
};

    const date = moment().format('LT') + " - "+ moment().format('LL');

    return <TweetContext.Provider 
    value={{
        tweetData, 
        date, 
        actionData, 
        setActionData, 
        handleToggleLike, 
        handleToggleTweet}}>
        {children}</TweetContext.Provider>

};