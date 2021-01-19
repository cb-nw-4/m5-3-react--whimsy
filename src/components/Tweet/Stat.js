import React from 'react';
import styled from 'styled-components';

import { TweetContext } from './TweetContext';


const Stat = () => {
    const {
        numOfRetweets,
        numOfLikes,
    } = React.useContext(
        TweetContext
    );

    return (
    <Stats>
        <span><strong>{numOfRetweets}</strong> Retweets</span> <Span><strong>{numOfLikes}</strong> Likes</Span>
    </Stats>
    )
}

const Stats = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
`;

const Span = styled.span`
    margin-left: 20px;
`;

export default Stat;