import React from "react";
import styled from "styled-components";
import { Container, Divider, Typography } from "@mui/material";
import promoVideo from "../assets/images/testMovie.mp4";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Marketing1 = () => {
  return (
    <Wrapper>
      <Container maxWidth="lg" className="container">
        <div className="left">
          <Typography variant="h1" color="text">
            A whole world of freelance talent at your fingertips
          </Typography>
          <Divider sx={{ margin: "1rem 0px" }} />
          <Typography variant="h3">
            <CheckCircleOutlineIcon />
            The best for every budget
          </Typography>
          <Typography variant="body1">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </Typography>

          <Typography variant="h3">
            <CheckCircleOutlineIcon />
            Quality work done quickly
          </Typography>
          <Typography variant="body1">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </Typography>

          <Typography variant="h3">
            <CheckCircleOutlineIcon />
            Protected payments every time
          </Typography>
          <Typography variant="body1">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </Typography>

          <Typography variant="h3">
            <CheckCircleOutlineIcon />
            24/7 support
          </Typography>
          <Typography variant="body1">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </Typography>
        </div>
        <div className="right">
          <video src={promoVideo} controls className="featuredVideo"></video>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
  margin-bottom: 2rem;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    .left {
      flex: 9;
      h1 {
        font-size: 1.3rem;
        line-height: 1.1;
        color: #333333;
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 1rem;
        font-weight: 300;
        color: #333333;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 0.25rem;
      }
      p {
        color: #aaa;
        font-weight: 200;
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
      }
    }
    .right {
      flex: 11;
      .featuredVideo {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
`;

export default Marketing1;
