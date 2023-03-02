import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CatCard = ({ card }) => {
  return (
    <Wrapper>
      <div className="catCard">
        <img src={card.img} alt={card.title} />
        <Link to="/gigs?cat=design">
          <div className="text">
            <span className="desc">{card.desc}</span>
            <span className="title">{card.title}</span>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .catCard {
    position: relative;
    margin: 0px 1rem;
    img {
      display: block;
      width: 100%;
      height: 340px;
      object-fit: cover;
    }
    .text {
      display: block;
      width: 100%;
      position: absolute;
      top: 5px;
      padding: 0px 5px;
      transition: 0.3s all ease;
      &:hover .title,
      &:hover .desc {
        text-shadow: #49cb8f 1px 0px 10px;
      }
      .title {
        color: #ffffff;
        display: block;
        font-size: 1.8rem;
        text-align: center;
        line-height: 1;
        text-shadow: #000000 1px 0px 10px;
      }
      .desc {
        color: #ffffff;
        display: block;
        font-size: 1.2rem;
        text-align: center;
        line-height: 1;
        text-shadow: #000000 1px 0px 10px;
      }
    }
  }
`;

export default CatCard;
