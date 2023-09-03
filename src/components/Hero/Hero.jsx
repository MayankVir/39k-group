import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

import BGVideo from "../../assets/videos/bg_video_final.mp4";
import { theme } from "../../theme";
import { Element, Link } from "react-scroll";

const StyledHero = styled(Box)({
  position: "relative",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
});

const StyledHeadlineFirst = styled("div")({
  fontSize: "4.5rem",
  color: theme.colors.$primary,
  textTransform: "uppercase",
  textAlign: "center",

  "@media (max-width: 1100px)": {
    fontSize: "3rem",
  },
  "@media (max-width: 800px)": {
    fontSize: "1.75rem",
  },
});

const StyledHeadlineSecond = styled("div")({
  fontSize: "5.5rem",
  fontWeight: "600",
  textTransform: "uppercase",
  background: theme.colors.$primary,
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, rgba(
    77,
    32,
    245,
    0.63
  ) 100%)`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  lineHeight: "75px",
  textAlign: "center",
  "@media (max-width: 1100px)": {
    fontSize: "4rem",
  },
  "@media (max-width: 800px)": {
    fontSize: "3rem",
    lineHeight: "50px",
  },
});

const StyledHeadline = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "175px",
});

const StyledTagline = styled(Box)({
  fontSize: "17px",
  color: theme.colors.$primary,
  marginTop: "50px",
  padding: "0 20px",
  textAlign: "center",
  "@media (max-width: 800px)": {
    fontSize: "14px",
  },
});

const StyledCTAButton = styled(Box)({
  marginTop: "100px",
  padding: "20px",
  // background: `linear-gradient(75deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 100%)`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  position: "relative",
  transition: "all .2s ease",
  cursor: "pointer",
  "& span": {
    position: "relative",
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: "900",
    letterSpacing: ".1em",
    textTransform: "uppercase",
    verticalAlign: "middle",
  },
  "& svg": {
    transform: "translateX(-5px)",
    transition: "all .3s ease",
  },
});

const StyledVideo = styled("video")({
  position: "absolute",
  zIndex: -1,
  width: "100%",
  height: "100%",
  opacity: 0.2,
  objectFit: "cover",
});

const Hero = () => {
  return (
    <Element name="home">
      <StyledHero>
        <StyledVideo src={BGVideo} muted autoPlay loop />
        <StyledHeadline>
          <StyledHeadlineFirst className="drop-in">
            Empowering
          </StyledHeadlineFirst>

          <StyledHeadlineSecond className="drop-in-2">
            Blockchain Adoption
          </StyledHeadlineSecond>
        </StyledHeadline>
        <StyledTagline className="fadeIn1000ms ">
          39k Group is a high frequency trading firm engaged in digital asset
          market making to enable the adoption of blockchain technology in
          developing economies
        </StyledTagline>
        <Link
          activeClass="active"
          to={"contactUs"}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <StyledCTAButton className="cta  fadeIn1000ms ">
            <span> Get in touch</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1045 15.3313L3.71252 7.9393L4.95477 6.69705L11.1045 12.8468L17.2542 6.69705L18.4964 7.9393L11.1045 15.3313Z"
                fill="white"
              />
            </svg>
          </StyledCTAButton>
        </Link>
      </StyledHero>
    </Element>
  );
};

export default Hero;
