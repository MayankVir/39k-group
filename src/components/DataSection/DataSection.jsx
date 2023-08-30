import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const StyledDataContainer = styled(Box)({
  padding: "100px 50px",
  display: "flex",
});

const StyledDataTagline = styled(Box)({
  padding: "30px 50px",
  fontSize: "40px",
  fontWeight: "500",
  width: "600px",
  flex: 0.5,
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

const StyledDataContentContainer = styled(Box)({
  display: "flex",
  flex: 0.5,
  flexWrap: "wrap",
  marginTop: "15px",
});

const StyledDataContent = styled(Box)({
  width: "300px",
  height: "150px",
  fontSize: "40px",
  fontWeight: "600",
  color: theme.colors.$primary,
});

const StyledDataContentDetail = styled(Box)({
  fontSize: "18px",
  color: theme.colors.$lightPrimary,
  fontWeight: "500",
});

const DataSection = () => {
  return (
    <StyledDataContainer>
      <StyledDataTagline>
        We have brought some of the BEST results <br /> so far
      </StyledDataTagline>
      <StyledDataContentContainer>
        <StyledDataContent>
          $5B+
          <StyledDataContentDetail>
            Monthly Volume Traded
          </StyledDataContentDetail>
        </StyledDataContent>
        <StyledDataContent>
          $100K+
          <StyledDataContentDetail>Daily Transactions </StyledDataContentDetail>
        </StyledDataContent>
        <StyledDataContent>
          $200B+
          <StyledDataContentDetail>
            Cumulative Volume Traded
          </StyledDataContentDetail>
        </StyledDataContent>
        <StyledDataContent>
          400+
          <StyledDataContentDetail>Pairs Traded </StyledDataContentDetail>
        </StyledDataContent>
      </StyledDataContentContainer>
    </StyledDataContainer>
  );
};

export default DataSection;
