import React from "react";
import styled from "styled-components";
import useToggle from "../hooks/useToggle";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const UserProfile = ({ currentUser, navbarActive, pathname }) => {
  const { anchorEl, open, handleClick, handleClose } = useToggle();

  return (
    <Box sx={{ px: 1 }}>
      <Button
        id="basic-button"
        onClick={handleClick}
        sx={
          navbarActive || pathname !== "/"
            ? { color: "#424242" }
            : { color: "#FFFFFF" }
        }
      >
        <PersonIcon sx={{ color: "inherit", fontSize: 24, mr: 0.75 }} />
        <span>{currentUser.username}</span>
      </Button>
      <Menu
        sx={{ mt: 1 }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-menu" }}
      >
        <Box sx={{ minWidth: 180 }}>
          <List sx={{ padding: 0 }} className="list">
            {currentUser?.isSeller && (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ padding: "0px 0px 0px 1rem" }}
                    onClick={handleClose}
                  >
                    <ListItemText
                      primary={
                        <NavLink to="/gigs">
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#717171",
                              fontWeight: 300,
                            }}
                          >
                            Gigs
                          </Typography>
                        </NavLink>
                      }
                      sx={{ color: "#717171", fontWeight: 300 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ padding: "0px 0px 0px 1rem" }}
                    onClick={handleClose}
                  >
                    <ListItemText
                      primary={
                        <NavLink to="/add">
                          <Typography
                            variant="body1"
                            sx={{ color: "#717171", fontWeight: 300 }}
                          >
                            Add New Gig
                          </Typography>
                        </NavLink>
                      }
                      sx={{ color: "#717171", fontWeight: 300 }}
                    />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            <ListItem disablePadding>
              <ListItemButton
                sx={{ padding: "0px 0px 0px 1rem" }}
                onClick={handleClose}
              >
                <ListItemText
                  primary={
                    <NavLink to="/orders">
                      <Typography
                        variant="body1"
                        sx={{ color: "#717171", fontWeight: 300 }}
                      >
                        Orders
                      </Typography>
                    </NavLink>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ padding: "0px 0px 0px 1rem" }}
                onClick={handleClose}
              >
                <ListItemText
                  primary={
                    <NavLink to="/messages">
                      <Typography
                        variant="body1"
                        sx={{ color: "#717171", fontWeight: 300 }}
                      >
                        Messages
                      </Typography>
                    </NavLink>
                  }
                  sx={{ color: "#717171", fontWeight: 300 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ padding: "0px 0px 0px 1rem" }}
                onClick={handleClose}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{ color: "#717171", fontWeight: 300 }}
                    >
                      Log Out
                    </Typography>
                  }
                  sx={{ color: "#717171", fontWeight: 300 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Menu>
    </Box>
  );
};

export default UserProfile;
