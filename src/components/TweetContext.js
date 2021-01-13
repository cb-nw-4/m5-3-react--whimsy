import React, { createContext } from "react";
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = createContext(null)
export const TweetProvider = ({children}) => {

  const tweetContents="Where in the world am I?"
  const displayName="Carmen Sandiego ✨"
  const username="carmen-sandiego"
  const avatarSrc = avatar
  let isRetweetedByCurrentUser=false
  let isLikedByCurrentUser=false

  return (
    <TweetContext.Provider value={{
      tweetContents, displayName, username, avatarSrc, isRetweetedByCurrentUser, isLikedByCurrentUser
    }}>
      {children}
    </TweetContext.Provider>
  )
}