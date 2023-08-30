import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const StyledPartners = styled("div")({
  padding: "20px 100px",
  width: "100%",
});

const StyledPartnersHeader = styled("div")({
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  fontSize: "34px",
  fontWeight: "400",
  padding: "40px 0",
  width: "100%",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPartnersContainer = styled("div")({
  margin: "20px 0",
  width: "100%",
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$white} 100%)`,
  border: "1px solid" + theme.colors.$gray,
  borderRadius: "20px",
  padding: "0px 100px",
  "& .line-1": {
    fontSize: "16px",
    color: theme.colors.$gray,
    opacity: 0.8,
  },
  "& .line-2": {
    fontSize: "22px",
    color: theme.colors.$white,
    fontWeight: "500",
    lineHeight: "30px",
  },
});

const PartnerSection = () => {
  return (
    <StyledPartners>
      <StyledPartnersHeader>
        Our growing partnerships connects us to the world 
      </StyledPartnersHeader>
      <StyledPartnersContainer>
        <div
          style={{
            padding: "150px 0",
          }}
        >
          <span className="line-1">
            We are for you <br />
          </span>
          <span className="line-2">
            Don't just take our <br /> word for it
          </span>
        </div>
      </StyledPartnersContainer>
    </StyledPartners>
  );
};

export default PartnerSection;
