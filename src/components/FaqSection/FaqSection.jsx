import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FAQs } from "./constants";

const StyledFaq = styled("div")({
  padding: "50px 200px",
  width: "100%",
  "@media (max-width: 1100px)": {
    padding: "50px 50px",
  },
  "@media (max-width: 800px)": {
    padding: "50px 25px",
  },
});

const StyledFaqHeader = styled("div")({
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
    fontSize: "34px",
  },
  "@media (max-width: 800px)": {
    fontSize: "24px",
  },
});

const StyledFaqContent = styled("div")({
  padding: "25px 0",
  paddingBottom: "50px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& .Mui-expanded": {
    transform: "scale(1.01)",
  },
  "& .accordion-title": {
    fontSize: "18px",
    color: theme.colors.$primary,
    fontWeight: "500 !important",
  },
  "& .accordion-content": {
    color: theme.colors.$primary,
    fontWeight: "400",
  },
  "& .MuiPaper-root": {
    boxShadow: "none",
    transition: "all 200ms ease-in",
    "&:hover": {
      transform: "scale(1.01)",
    },
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
  const [expanded, setExpanded] = useState();
  return (
    <StyledFaq>
      <StyledFaqHeader>Frequently Asked Questions</StyledFaqHeader>
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
    onChange={() => setExpanded("panel" + idx)}
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
