import React from "react";
import styled from "styled-components";

const Messages = () => {
  return (
    <Wrapper>
      <h2 className="title">Messages</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    color: slateblue;
  }
`;

export default Messages;
