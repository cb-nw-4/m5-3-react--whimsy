import React, { useContext } from 'react';
import styled from 'styled-components';

import { TweetContext } from './TweetContext';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 3em;
`;

const Stat = styled.div`
    color: #888888;
    margin-right: 2em;
    font-size: 1em;
    .statNum {
        color: black;
        font-weight: bold;
    }
`;

const Stats = () => {
    const data = useContext(TweetContext);

    return (
        <Wrapper>
            <Stat><span className='statNum'>{data.numOfRetweets}</span> Retweets</Stat>
            <Stat><span className='statNum'>{data.numOfLikes}</span> Likes</Stat>
        </Wrapper>
    )
}

export default Stats; 