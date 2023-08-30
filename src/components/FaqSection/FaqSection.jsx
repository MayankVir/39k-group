import React from "react";
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
  padding: "20px 200px",
  width: "100%",
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
});

const StyledFaqContent = styled("div")({
  padding: "25px 0",
  paddingBottom: "50px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
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
  },
});

const FaqSection = () => {
  return (
    <StyledFaq>
      <StyledFaqHeader>Frequently Asked Questions</StyledFaqHeader>
      <StyledFaqContent>
        {FAQs.map(({ title, body }) => (
          <AccordionComponent title={title} body={body} />
        ))}
      </StyledFaqContent>
    </StyledFaq>
  );
};

export default FaqSection;

const AccordionComponent = ({ title, body }) => (
  <Accordion>
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
