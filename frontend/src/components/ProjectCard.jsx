import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CatCard = ({ project }) => {
  return (
    <Wrapper>
      <div className="projectCard">
        <img src={project.img} alt={project.title} className="projectImg" />
        <Link to="/gigs?cat=design">
          <div className="user">
            <img src={project.pp} alt={project.username} className="userPic" />
            <div className="text">
              <span className="cat">{project.cat}</span>
              <span className="username">by {project.username}</span>
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 10px;
  .projectCard {
    position: relative;
    margin: 0px 1rem;

    .projectImg {
      display: block;
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 4px 4px 0px 0px;
    }
    .user {
      width: 100%;
      padding: 1rem 0.5rem;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      border-radius: 0px 0px 4px 4px;
      .userPic {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        object-position: 30% 20%;
        flex: 1;
      }
      .text {
        flex: 4;
        .cat {
          display: block;
          font-size: 1rem;
          text-align: left;
          line-height: 1;
          margin-bottom: 5px;
        }
        .username {
          display: block;
          font-size: 0.9rem;
          text-align: left;
          line-height: 1;
          color: #666666;
          font-weight: 200;
        }
      }
    }
  }
`;

export default CatCard;
