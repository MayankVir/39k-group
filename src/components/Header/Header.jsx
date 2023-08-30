import React from "react";
import { Box, Typography } from "@mui/material";

import logo from "../../assets/icons/logo.svg";
import styled from "styled-components";
import { theme } from "../../theme";

const StyledHeader = styled(Box)({
  display: "flex",
  padding: "15px 50px",
  height: "8vh",
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledHeaderOptions = styled(Box)({
  display: "flex",
  gap: "5px",
});
const StyledHeaderOption = styled(Typography)({
  padding: "5px 25px",
  color: theme.colors.$primary,
  cursor: "pointer",
  transition: " all 500ms cubic-bezier(0.77, 0, 0.175, 1)",
  "&:hover": {
    // transitionDelay: "200ms",
    background: theme.colors.$lightPrimary,
    color: theme.colors.$white,
    borderRadius: "5px",
  },
  // "&:hover:before": {
  //   width: "100%",
  //   transitionDelay: 0,
  // },
  // "&:hover:after": {
  //   width: "100%",
  //   transitionDelay: "350ms",
  // },
  // "&:before": {
  //   content: "",
  //   position: "absolute",
  //   transition: "inherit",
  //   zIndex: -1,
  //   top: 0,
  //   width: 0,
  //   height: "100%",
  //   right: 0,
  //   border: "1px solid " + theme.colors.$lightPrimary,
  //   borderLeft: 0,
  //   borderRight: 0,
  // },
  // "&:after": {
  //   content: "",
  //   position: "absolute",
  //   transition: "inherit",
  //   zIndex: -1,
  //   top: 0,
  //   width: 0,
  //   height: "100%",
  //   left: 0,
  // },
});

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="" />
      <StyledHeaderOptions>
        {["Home", "Solutions", "Partners", "Contact Us"].map((option) => (
          <StyledHeaderOption>{option}</StyledHeaderOption>
        ))}
      </StyledHeaderOptions>
    </StyledHeader>
  );
};

export default Header;
