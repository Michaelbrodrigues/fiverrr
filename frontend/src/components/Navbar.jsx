import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Stack } from "@mui/material";
import logoDark from "../assets/images/fiverrr-logo-dark.svg";
import logoLight from "../assets/images/fiverrr-logo-light.svg";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const { pathname } = useLocation();

  //const currentUser = null;
  const currentUser = {
    id: 1,
    username: "Nata Slut",
    isSeller: true,
  };

  return (
    <Wrapper>
      <div className="upperNav">
        <Container maxWidth="lg" className="upperNavContainer">
          <div className="logo">
            <Link to="/">
              <img src={logoDark} alt="Fiverrr Logo" />
            </Link>
          </div>
          <Stack
            direction="row"
            orientation="vertical"
            spacing={2}
            className="upperNavLinks"
          >
            <Button
              variant="text"
              color="inherit"
              component={NavLink}
              to="/business"
            >
              Fiverrr Business
            </Button>
            <Button
              variant="text"
              color="inherit"
              component={NavLink}
              to="/mygigs"
            >
              Explore
            </Button>
            <Button
              variant="text"
              color="inherit"
              component={NavLink}
              to="/orders"
            >
              Orders
            </Button>
            {!currentUser && (
              <Button
                variant="outlined"
                color="success"
                onClick={() => {}}
                className="joinButton"
              >
                Join
              </Button>
            )}
            {currentUser && (
              <div className="user">
                <UserProfile currentUser={currentUser} />
              </div>
            )}
          </Stack>
        </Container>
      </div>
      <hr />
      <div className="lowerNav">
        <Container maxwidth="lg" className="lowerNavContainer">
          <Stack
            direction="row"
            orientation="vertical"
            spacing={2}
            sx={{ justifyContent: "space-between" }}
            className="navLinksBottom"
          >
            <Button variant="text" component={NavLink} to="/">
              Graphics & Design
            </Button>
            <Button variant="text" component={NavLink} to="/">
              Digital Marketing
            </Button>
            <Button variant="text" component={NavLink} to="/">
              Writing & Translation
            </Button>
            <Button variant="text" component={NavLink} to="/">
              Video & Animation
            </Button>
            <Button variant="text" component={NavLink} to="/">
              Music & Audio
            </Button>
            <Button variant="text" component={NavLink} to="/">
              Programming & Tech
            </Button>
          </Stack>
        </Container>
      </div>
      {pathname !== "/" ? <hr /> : ""}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 100;
  .upperNav {
    background-color: #ffffff;
    transition: all 0.3s ease-in !important;
    .upperNavContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        font-weight: 600;
        font-size: 2rem;
        text-transform: lowercase;
        padding: 0px;
        margin: 0px;
        img {
          max-width: 120px;
        }
      }
      .upperNavLinks {
        a {
          color: #424242;
          &.active {
            color: #138550;
          }
        }
        /* a {
          color: #ffffff;
          &.active {
            color: #e3e3e3;
            text-decoration: underline;
          }
        } */
      }
      /* .joinButton {
        border-color: #ffffff;
        color: #ffffff;
        &:hover {
          background-color: #1cbf73;
        }
      } */
    }
  }
  .lowerNav {
    background-color: #ffffff;
    .lowerNavContainer {
      .navLinksBottom {
        a {
          color: #424242;
          font-weight: 400;
        }
      }
    }
  }
  hr {
    border: none;
    border-top: 1px solid #d5d5d5;
    margin: 0px;
  }
`;

export default Navbar;
