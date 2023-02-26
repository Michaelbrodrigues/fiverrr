import React from "react";
import styled from "styled-components";

const MyGigs = () => {
  return (
    <Wrapper>
      <h2 className="title">My Gigs</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    color: slateblue;
  }
`;

export default MyGigs;
