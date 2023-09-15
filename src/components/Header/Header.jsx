import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import logo from "../../assets/icons/logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import CloseIcon from "../../assets/icons/cross.svg";
import styled from "styled-components";
import { Link } from "react-scroll";

import { theme } from "../../theme";

const StyledHeader = styled(Box)({
  display: "flex",
  padding: "15px 50px",

  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 1100px)": {
    padding: "10px 30px",
  },
});
const StyledHeaderOptions = styled(Box)({
  display: "flex",
  gap: "5px",
});
const MenuOptionsContainerFullWidth = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "0",
  right: "0",
  width: "100%",
  height: "100%",
});
const MenuOptionsContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "relative",
});
const MenuOptionsBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  gap: "20px",
  position: "absolute",
  background: "purple",
  width: "35%",
  minWidth: "250px",
  height: "100vh",
  zIndex: 100,
  padding: "20px",
  background: `linear-gradient(135deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
});
const MenuOptions = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  color: theme.colors.$white,
});

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledHeader>
      <img
        src={logo}
        alt=""
        height={"60px"}
        style={{
          marginLeft: "10px",
        }}
      />
      <StyledHeaderOptions className="longMenu">
        {[
          { label: "Home", value: "home" },
          { label: "Services", value: "services" },
          { label: "Partners", value: "partners" },
          { label: "Careers", value: "careers" },
          { label: "Contact Us", value: "contactUs" },
        ].map((option) => (
          <Link
            activeClass="active"
            to={option.value}
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <Typography className="btn from-center">{option.label}</Typography>
          </Link>
        ))}
      </StyledHeaderOptions>
      <MenuOptionsContainerFullWidth
        className="shortMenu"
        style={{
          backgroundColor: isNavOpen ? "#eaeaea99" : "transparent",
        }}
      >
        <MenuOptionsContainer>
          <img
            src={Hamburger}
            alt="menu button"
            height={"50px"}
            width={"50px"}
            onClick={() => setIsNavOpen(true)}
            style={{
              cursor: "pointer",
              margin: "7px 25px",
            }}
          />
          <MenuOptionsBox className={`menu ${isNavOpen && "activeMenu"}`}>
            <img
              src={CloseIcon}
              alt="cross icon"
              height={"50px"}
              width={"50px"}
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => setIsNavOpen(false)}
            />
            <MenuOptions>
              {[
                { label: "Home", value: "home" },
                { label: "Services", value: "services" },
                { label: "Partners", value: "partners" },
                { label: "Careers", value: "careers" },
                { label: "Contact Us", value: "contactUs" },
              ].map((option) => (
                <Link
                  activeClass="active"
                  to={option.value}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  onClick={() => setIsNavOpen(false)}
                >
                  <Typography className="menuBtn from-center-white">
                    {option.label}
                  </Typography>
                </Link>
              ))}
            </MenuOptions>
          </MenuOptionsBox>
        </MenuOptionsContainer>
      </MenuOptionsContainerFullWidth>
    </StyledHeader>
  );
};

export default Header;
