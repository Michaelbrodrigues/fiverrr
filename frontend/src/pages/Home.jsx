import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <h2 className="title">Home</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    color: slateblue;
  }
`;

export default Home;
