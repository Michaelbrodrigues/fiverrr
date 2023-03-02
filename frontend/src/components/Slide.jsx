import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Container, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Slide = ({ children, sliderTitle, backColor }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <ArrowBackIosIcon {...props} />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <ArrowForwardIosIcon {...props} />
  );
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <Wrapper className={`${backColor ? backColor : ""}`}>
      <Container maxWidth="lg" className="container">
        <Typography
          variant="h2"
          sx={{
            margin: "0px 0px 1.5rem 1rem",
            fontSize: "1.8rem",
            textAlign: "left",
            fontWeight: 300,
          }}
        >
          {sliderTitle}
        </Typography>
        <Slider {...sliderSettings}>{children}</Slider>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 2rem;
  padding: 1rem 0px 2rem;
  &.backColor {
    background-color: #f5f5f5;
  }
  .container {
    padding: 2rem 2rem;
  }
  .slick-arrow {
    color: #111111;
    font-size: 2rem;
    opacity: 0.5;
    transition: all 0.2s ease-in;
    &:hover {
      opacity: 1 !important;
    }
  }
  .slick-prev {
  }
  .slick-next {
  }
`;

export default Slide;
