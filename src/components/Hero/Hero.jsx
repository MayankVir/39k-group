import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

import BGVideo from "../../assets/videos/bg_video.mp4";
import DownArrow from "../../assets/icons/downArrow.svg";
import { theme } from "../../theme";

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
});

const StyledCTAButton = styled(Box)({
  marginTop: "100px",
  padding: "20px",
  background: `linear-gradient(75deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 100%)`,
  borderRadius: "50px",
  color: theme.colors.$white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  cursor: "pointer",
});

const StyledVideo = styled("video")({
  position: "absolute",
  zIndex: -1,
  width: "100%",
  opacity: 0.2,
});

const Hero = () => {
  return (
    <StyledHero>
      <StyledVideo src={BGVideo} muted autoPlay loop />
      <StyledHeadline>
        <StyledHeadlineFirst>Empowering</StyledHeadlineFirst>
        <StyledHeadlineSecond>Blockchain Adoption</StyledHeadlineSecond>
      </StyledHeadline>
      <StyledTagline>
        39k Group is a high frequency trading firm engaged in digital asset
        market making to enable the adoption of blockchain technology in
        developing economies
      </StyledTagline>
      <StyledCTAButton>
        Get in touch
        <img src={DownArrow} alt="down arrow" />
      </StyledCTAButton>
    </StyledHero>
  );
};

export default Hero;
