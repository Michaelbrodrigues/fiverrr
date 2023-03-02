import React from "react";
import styled from "styled-components";
import {
  Container,
  Typography,
  TextField,
  InputAdornment,
  Stack,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import heroImage from "../assets/images/freelance.svg";

const Hero = () => {
  const handleClick = (event) => {
    console.log(event.target.textContent);
  };
  return (
    <Wrapper>
      <Container maxWidth="lg" className="heroContainer">
        <div className="left">
          <Typography
            variant="h4"
            sx={{ fontWeight: 300 }}
            color="success.contrastText"
          >
            Find the perfect freelance services for your business
          </Typography>
          <div className="search">
            <div className="searchInput">
              <TextField
                fullWidth
                variant="outlined"
                label="Search gigs"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#ffffff" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        disableElevation
                        color="success"
                        sx={{
                          color: "#FFFFFF",
                          backgroundColor: "#1cbf73",
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                        }}
                      >
                        Go
                      </Button>
                    </InputAdornment>
                  ),
                }}
                sx={{ paddingRight: "0px !important" }}
              />

              <Stack
                direction="row"
                spacing={1}
                sx={{ display: "flex", alignItems: "center", mt: 2 }}
              >
                <span>Popular: </span>
                <Chip
                  label="Web Design"
                  variant="filled"
                  sx={{ color: "#FFFFFF" }}
                  onClick={handleClick}
                />
                <Chip
                  label="React Developer"
                  variant="filled"
                  sx={{ color: "#FFFFFF" }}
                  onClick={handleClick}
                />
                <Chip
                  label="Photography"
                  variant="filled"
                  sx={{ color: "#FFFFFF" }}
                  onClick={handleClick}
                />
                <Chip
                  label="AI Services"
                  variant="filled"
                  sx={{ color: "#FFFFFF" }}
                  onClick={handleClick}
                />
              </Stack>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={heroImage} alt="Freelance Image" />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #49cb8f;
  background: linear-gradient(
    320deg,
    rgba(21, 57, 40, 1) 0%,
    rgba(73, 203, 143, 1) 100%
  );
  .heroContainer {
    min-height: 400px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    .left {
      flex: 13;
      padding: 0px 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        color: #ffffff;
      }
      .searchInput {
        display: block;
        width: 100%;
        margin: 2rem 0px;
        .MuiOutlinedInput-notchedOutline {
          border-color: #ffffff !important;
        }
        .MuiInputLabel-root {
          color: #ffffff !important;
        }
        .MuiOutlinedInput-input {
          color: #ffffff !important;
        }
        .MuiOutlinedInput-root {
          padding-right: 0px;
        }
      }
    }
    .right {
      flex: 11;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        width: 100%;
      }
    }
  }
`;

export default Hero;
