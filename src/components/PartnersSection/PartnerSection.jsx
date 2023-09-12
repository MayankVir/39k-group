import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Element } from "react-scroll";
import { Box } from "@mui/material";

import { allExchanges, allTokens } from "./constants";

const StyledPartners = styled("div")({
  padding: "20px 0",
  width: "100%",
  "@media (max-width: 1100px)": {
    padding: "15px 0",
  },
  "@media (max-width: 800px)": {
    padding: "5px 0",
  },
});

const StyledPartnersHeader = styled("div")({
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  fontSize: "34px",
  fontWeight: "400",
  padding: "40px 0",
  paddingBottom: "10px",
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

const StyledPartnersContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "20px 0",
  marginTop: "0px",
  width: "100%",
  overflow: "hidden",
  "& .line-1": {
    fontSize: "16px",
    color: theme.colors.$primary,
    opacity: 0.8,
  },
  "& .line-2": {
    fontSize: "22px",
    color: theme.colors.$primary,
    fontWeight: "500",
    lineHeight: "30px",
    textAlign: "center",
  },
  "@media (max-width: 1100px)": {
    // padding: "0px 50px",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    "& div": {
      textAlign: "center",
    },
  },
});

const TokenContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "50px",

  zIndex: -1,
  gap: "60px",
  animation: "stripX 4150s linear infinite",

  "@media (max-width: 800px)": {
    flexDirection: "row",
  },
});
const ExchangeContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  zIndex: -1,
  animation: "stripX 4000s linear infinite",
  "@media (max-width: 1100px)": {
    "& img": {
      width: "125px",
    },
  },
  "@media (max-width: 800px)": {
    flexDirection: "row",
    gap: "20px",
    height: "100px",
    "& img": {
      width: "100px",
    },
  },
});
const ExchangeTokenContainer = styled(Box)({
  padding: "50px 0",
  gap: "50px",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  background:
    "linear-gradient(to right, rgb(255 255 255) 7%, rgba(21, 21, 46, 0) 25%, rgba(21, 21, 46, 0) 75%, rgb(255 255 255) 95%)",
  "@media (max-width: 1100px)": {
    "& img": {
      width: "125px",
    },
  },
  "@media (max-width: 800px)": {
    gap: "0px",
    flexDirection: "column",
    "& img": {
      width: "100px",
    },
  },
});

const PartnerSection = () => {
  return (
    <Element name="partners">
      <StyledPartners>
        <StyledPartnersHeader>
          Our growing partnerships connect us to the world 
        </StyledPartnersHeader>
        <StyledPartnersContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "50px",
            }}
          >
            <span className="line-1">
              We are for you <br />
            </span>
            <span className="line-2">Don't just take our word for it</span>
          </div>
          <ExchangeTokenContainer>
            <ExchangeContainer>
              {[
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
                ...allExchanges,
              ].map(({ exchange, height, width }) => (
                <img
                  src={exchange}
                  alt={"exchange"}
                  width={width ?? "175px"}
                  height={height ?? "100px"}
                />
              ))}
            </ExchangeContainer>
            <TokenContainer>
              {[
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
                ...allTokens,
              ].map(({ token, width, height }) => (
                <img
                  src={token}
                  alt={"token"}
                  width={width ?? "175px"}
                  height={height ?? "100px"}
                />
              ))}
            </TokenContainer>
          </ExchangeTokenContainer>
        </StyledPartnersContainer>
      </StyledPartners>
    </Element>
  );
};

export default PartnerSection;
