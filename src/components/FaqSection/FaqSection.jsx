import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Circle from "../../assets/icons/circle.svg";

import { FAQs } from "./constants";

const StyledFaq = styled("div")({
  display: "flex",
  gap: "25px",
  alignItems: "flex-start",
  padding: "100px",
  width: "100%",
  backgroundColor: theme.colors.$gray,
  "@media (max-width: 1100px)": {
    padding: "50px 50px",
  },
  "@media (max-width: 800px)": {
    "& .outer-box": {
      flexDirection: "column",
      gap: "0 !important",
    },
    padding: "50px 25px",
  },
});

const StyledFaqHeader = styled("div")({
  textAlign: "left",
  height: "100%",
  color: theme.colors.$white,
  fontSize: "30px",
  fontWeight: "400",
  padding: "50px",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "15px",

  "& .tagline": {
    fontSize: "14px",
    color: theme.colors.$gray,
  },

  "& .circle-1": {
    position: "absolute",
    top: -30,
    left: -30,
  },
  "& .circle-2": {
    position: "absolute",
    bottom: -70,
    left: 375,
    height: "120px",
  },

  "@media (max-width: 1100px)": {
    fontSize: "20px",
  },
  "@media (max-width: 800px)": {
    width: "100%",
    textAlign: "center",
    gap: "5px",
    padding: "30px",
    fontSize: "18px",
  },
  "@media (max-width: 500px)": {
    fontSize: "16px",

    "& .tagline": {
      fontSize: "10px",
    },
  },
});

const StyledFaqContent = styled("div")({
  backgroundColor: theme.colors.$white,
  padding: "25px",
  paddingBottom: "50px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  // "& .Mui-expanded": {
  //   transform: "scale(1.01)",
  // },
  "& .accordion-title": {
    fontSize: "18px",
    color: theme.colors.$primary,
    fontWeight: "500 !important",
    transition: "all 200ms ease-in",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  "& .accordion-content": {
    color: theme.colors.$primary,
    fontWeight: "400",
    paddingLeft: "10px",
  },
  "& .MuiPaper-root": {
    boxShadow: "none",
  },
  "@media (max-width: 1100px)": {
    "& .accordion-title": {
      fontSize: "14px",
    },
    "& .accordion-content": {
      fontSize: "10px",
    },
  },
  "@media (max-width: 800px)": {
    "& .accordion-title": {
      fontSize: "12px",
    },
    "& .accordion-content": {
      fontSize: "9px",
    },
  },
});

const FaqSection = () => {
  const [expanded, setExpanded] = useState("panel1");
  return (
    <StyledFaq>
      <Box
        className="outer-box"
        style={{
          display: "flex",
          gap: "20px",
          background: `linear-gradient(180deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <StyledFaqHeader>
          <img src={Circle} className="circle-1" alt="circle" />
          <img src={Circle} className="circle-2" alt="circle" />
          Frequently Asked Questions <br />
          <span className="tagline">
            Ask anything you need to know about our products and services.
          </span>
        </StyledFaqHeader>
        <StyledFaqContent>
          {FAQs.map(({ title, body }, idx) => (
            <AccordionComponent
              title={title}
              body={body}
              expanded={expanded}
              setExpanded={setExpanded}
              idx={idx + 1}
            />
          ))}
        </StyledFaqContent>
      </Box>
    </StyledFaq>
  );
};

export default FaqSection;

const AccordionComponent = ({ title, body, expanded, setExpanded, idx }) => (
  <Accordion
    expanded={expanded === "panel" + idx}
    onChange={() =>
      setExpanded((prev) => (prev === "panel" + idx ? null : "panel" + idx))
    }
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className="accordion-title">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography className="accordion-content">{body}</Typography>
    </AccordionDetails>
  </Accordion>
);
