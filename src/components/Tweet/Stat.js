import React, { useContext } from 'react';
import { TweetContext } from "../TweetContext";

const Stats = () => {
  const {numOfLikes, numOfRetweets} = useContext(TweetContext);

  return (
    <Stats>{numOfRetweets, numOfLikes}</Stats>
  )
}

export default Stats;