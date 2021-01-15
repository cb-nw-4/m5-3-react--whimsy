import React , { useContext }from 'react';
import styled from "styled-components";
import { TweetContext } from '../TweetContext';

const Stat = () => {

    const {
        numOfLikes,
        numOfRetweets
    } = useContext(TweetContext);

    return ( 
        <Stats>
            <Div>
                {numOfRetweets} <Span> Retweets</Span>
            </Div>
            <Div>
                {numOfLikes} <Span> Likes </Span>
            </Div>
        </Stats>
    
    );
}


const Stats = styled.div`
    display: flex;
    align-items: center;
    height: 48px;

`;
const Div = styled.div`
    font-weight: bold;
    margin-right: 20px;
`;

const Span = styled.span`
    color: rgb(101, 119, 134);
    font-weight:normal; 
    
`;
export default Stat;

