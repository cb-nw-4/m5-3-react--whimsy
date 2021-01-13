import React, { createContext, useState } from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from 'moment'

export const TweetContext = createContext(null)
export const TweetProvider = ({children}) => {

  const [numLikes, setNumLikes] = useState(460)
  const [numOfRetweets, setNumOfRetweets] = useState(65) 
  const [isLiked, setIsLiked] = useState(false)
  const [isRetweeted, setIsRetweeted] = useState(false)
  const tweetContents="Where in the world am I?"
  const displayName="Carmen Sandiego ✨"
  const username="carmen-sandiego"
  const avatarSrc = avatar
  let isRetweetedByCurrentUser=isRetweeted
  let isLikedByCurrentUser=isLiked
  const date = moment().format('h:m a - MMM Do, YYYY')

  return (
    <TweetContext.Provider value={{
      tweetContents, displayName, username, avatarSrc, isRetweetedByCurrentUser, isLikedByCurrentUser, date, numLikes, numOfRetweets
    }}>
      {children}
    </TweetContext.Provider>
  )
}