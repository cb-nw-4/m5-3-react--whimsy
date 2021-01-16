import React from "react";
import styled from "styled-components";

const Stat = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
};

const Wrapper = styled.div`
  margin-right: 25px;
`;

export default Stat;
