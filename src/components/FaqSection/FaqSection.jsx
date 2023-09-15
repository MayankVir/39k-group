import React, { useEffect, useRef, useState } from "react";
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

import { FAQs } from "./constants";
import { useIsInViewport } from "../../hooks/useIsInViewport";

const StyledFaq = styled("div")({
  display: "flex",
  gap: "25px",
  alignItems: "center",
  margin: "75px 0",
  width: "100%",
  background: `linear-gradient(180deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,

  "@media (max-width: 1100px)": {
    paddingLeft: "50px",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    gap: "0 !important",
    padding: "20px",
  },
});

const StyledFaqHeader = styled("div")({
  textAlign: "left",
  height: "100%",
  color: theme.colors.$white,
  fontSize: "34px",
  fontWeight: "400",
  padding: "50px",
  paddingTop: "100px",
  paddingBottom: "100px",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "15px",

  "& .tagline": {
    fontSize: "14px",
    color: theme.colors.$gray,
  },
  "@media (max-width: 1100px)": {
    gap: "10px",
    padding: "25px",
    fontSize: "20px",
    "& .tagline": {
      fontSize: "12px",
    },
  },
  "@media (max-width: 800px)": {
    width: "100%",
    textAlign: "center",
    gap: "5px",
    padding: "30px",
    fontSize: "18px",
    "& .tagline": {
      fontSize: "10px",
    },
  },
});

const StyledFaqContent = styled("div")({
  backgroundColor: theme.colors.$white,
  padding: "50px 25px ",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
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
  const [faqsInView, setFaqsInView] = useState(false);
  const faqsRef = useRef();
  const isInViewport = useIsInViewport(faqsRef);

  useEffect(() => {
    if (isInViewport) setFaqsInView(true);
    else setFaqsInView(false);
  }, [isInViewport]);

  return (
    <StyledFaq ref={faqsRef}>
      <StyledFaqHeader>
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
