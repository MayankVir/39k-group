import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Element } from "react-scroll";

const StyledCareers = styled("div")({
  padding: "20px 100px",
  width: "100%",
  "@media (max-width: 1100px)": {
    padding: "15px 20px",
  },
  "@media (max-width: 800px)": {
    padding: "5px 20px",
  },
});

const StyledCareersHeader = styled("div")({
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  fontSize: "40px",
  fontWeight: "400",
  padding: "40px 0",
  width: "100%",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 1100px)": {
    fontSize: "28px",
  },
  "@media (max-width: 800px)": {
    fontSize: "22px",
  },
});

const StyledCareersContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  margin: "20px 0",
  width: "100%",
  gap: "50px",
  padding: "0px 50px",
  overflow: "hidden",
  textAlign: "justify",

  "& .details": {
    fontSize: "20px",
    color: theme.colors.$primary,
  },

  "@media (max-width: 1100px)": {
    padding: "0px 50px",
    "& .details": {
      fontSize: "18px",
    },
  },
  "@media (max-width: 800px)": {
    padding: "0px 20px",
    flexDirection: "column",
    "& .details": {
      fontSize: "14px",
    },
  },
});

const StyledOpenRoles = styled(Box)({
  color: theme.colors.$primary,
  fontSize: "22px",
  fontWeight: "500",
  cursor: "pointer",
  textTransform: "uppercase",
  background: theme.colors.$primary,
  color: theme.colors.$white,
  border: "2px solid " + theme.colors.$white,
  borderRadius: "10px",
  padding: "10px 20px",
  transition: "all 100ms ease-in",
  "&:hover": {
    background: theme.colors.$white,
    color: theme.colors.$primary,
    border: "2px solid " + theme.colors.$primary,
  },
  "@media (max-width: 1100px)": {
    fontSize: "18px",
  },
  "@media (max-width: 800px)": {
    fontSize: "14px",
  },
});

const StyledReachOut = styled(Box)({
  color: theme.colors.$primary,
  fontSize: "20px",
  marginBottom: " 50px",
  "& .email": {
    color: theme.colors.$lightPrimary,
  },
  "& .email:hover": {
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "underline",
  },
  "@media (max-width: 1100px)": {
    fontSize: "18px",
  },
  "@media (max-width: 800px)": {
    textAlign: "left",
    fontSize: "13px",
  },
});

const CareerSection = () => {
  return (
    <Element name="careers">
      <StyledCareers>
        <StyledCareersHeader>
          Shape Your Future with 39k Group
        </StyledCareersHeader>
        <StyledCareersContainer>
          <Box className="details">
            At 39k, we stand at the forefront of the crypto revolution. Our team
            is a blend of visionaries and innovators. If you're driven by
            crypto's potential, then explore our opportunities and embark on a
            career where every day is a new horizon.
          </Box>
          <StyledOpenRoles
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/39kgroup/jobs/",
                "_blank"
              )
            }
          >
            Open Roles
          </StyledOpenRoles>
          <StyledReachOut>
            Please reach out to us at{" "}
            <a href="mailto:hr@39kpartners.com" className="email">
              hr@39kpartners.com
            </a>
          </StyledReachOut>
        </StyledCareersContainer>
      </StyledCareers>
    </Element>
  );
};

export default CareerSection;
