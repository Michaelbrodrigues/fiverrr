import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Stack } from "@mui/material";
import logoDark from "../assets/images/fiverrr-logo-dark.svg";
import logoLight from "../assets/images/fiverrr-logo-light.svg";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const checkScroll = () => {
    window.scrollY > 0 ? setNavbarActive(true) : setNavbarActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [navbarActive]);

  const currentUser = {
    id: 1,
    username: "Nata Slut",
    isSeller: true,
  };

  return (
    <Wrapper className={navbarActive ? "navbarActive" : ""}>
      <div className="upperNav">
        <Container maxWidth="lg" className="upperNavContainer">
          <div className="logo">
            {navbarActive ? (
              <Link to="/">
                <img src={logoDark} alt="Fiverrr Logo" />
              </Link>
            ) : (
              <Link to="/">
                <img src={logoLight} alt="Fiverrr Logo" />
              </Link>
            )}
          </div>
          <div
            className={`navLinks ${navbarActive ? "textDark" : "textLight"}`}
          >
            <Stack direction="row" orientation="vertical" spacing={2}>
              <Button
                variant="text"
                color="inherit"
                component={NavLink}
                to="/add"
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
                English
              </Button>
              {!currentUser?.isSeller && (
                <Button
                  variant="text"
                  color="inherit"
                  component={NavLink}
                  to="/register"
                >
                  Become a Seller
                </Button>
              )}

              <Button
                variant="text"
                color="inherit"
                sx={!navbarActive ? { color: "#FFFFFF" } : ""}
                onClick={() => {}}
              >
                Sign In
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
                  <UserProfile
                    currentUser={currentUser}
                    navbarActive={navbarActive}
                  />
                </div>
              )}
            </Stack>
          </div>
        </Container>
      </div>
      <hr />
      {navbarActive && (
        <div className="lowerNav">
          <Container maxWidth="lg" className="lowerNavContainer">
            <div className="navLinksBottom">
              <Stack
                direction="row"
                orientation="vertical"
                spacing={2}
                sx={{ justifyContent: "space-between" }}
              >
                <Button
                  variant="text"
                  color="inherit"
                  component={NavLink}
                  to="/a"
                >
                  Graphics & Design
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  component={NavLink}
                  to="/b"
                >
                  Digital Marketing
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  component={NavLink}
                  to="/c"
                >
                  Writing & Translation
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  component={NavLink}
                  to="/d"
                >
                  Video & Animation
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  component={NavLink}
                  to="/e"
                >
                  Music & Audio
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  component={NavLink}
                  to="/f"
                >
                  Programming & Tech
                </Button>
              </Stack>
            </div>
          </Container>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  &.navbarActive {
    position: sticky;
    top: 0px;
    .upperNav {
      background-color: #ffffff;
      .navLinks {
        a {
          color: #111111 !important;
          &.active {
            color: #ababab !important;
          }
        }
      }
      .joinButton {
        border-color: #1cbf73 !important;
        color: #1cbf73 !important;
        &:hover {
          border-color: #ffffff !important;
          background-color: #1cbf73 !important;
          color: #ffffff !important;
        }
      }
    }
    .lowerNav {
      background-color: #f8f8f8;
      .lowerNavContainer {
        .navLinksBottom {
          a {
            font-weight: 300;
            &.active {
              color: #49cb8f;
            }
          }
        }
      }
    }
  }
  .upperNav {
    background-color: #138550;
    transition: 0.5s all ease;
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
      .navLinks {
        a {
          color: #ffffff;
          &.active {
            color: #ababab;
          }
        }
      }
      .joinButton {
        border-color: #ffffff;
        color: #ffffff;
        &:hover {
          border-color: #ffffff;
          background-color: #1cbf73;
        }
      }
    }
  }
  .lowerNav {
    background-color: #5fe9a8;
    .lowerNavContainer {
      .navLinksBottom {
        a {
          font-weight: 300;
          &.active {
            color: #ffffff;
          }
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
