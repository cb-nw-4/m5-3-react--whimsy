import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "./TweetContext.js";

const Stat = () => {
    const {numOfLikes, numOfRetweets} = useContext(TweetContext);

    return (
        <>
            <Info><Span>{numOfRetweets}</Span> Retweets
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
            </Info>
            <Info><Span>{numOfLikes}</Span> Likes</Info>
        </>
    )
};

const Info = styled.p`
    color: rgb(101, 119, 134);
    font-size: 16px;
`;

const Span = styled.span`
    font-weight: bold;
    color: black;
`;

export default Stat;