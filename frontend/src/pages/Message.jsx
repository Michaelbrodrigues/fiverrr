import React from "react";
import styled from "styled-components";

const Message = () => {
  return (
    <Wrapper>
      <h2 className="title">Message</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    color: slateblue;
  }
`;

export default Message;
