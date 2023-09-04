import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Element } from "react-scroll";
import { Box } from "@mui/material";

import alpacafinance from "../../assets/icons/tokens/alpacafinance.svg";
import ariva from "../../assets/icons/tokens/ariva.svg";
import biconomy from "../../assets/icons/tokens/biconomy.svg";
import celolight from "../../assets/icons/tokens/celolight.svg";
import daomaker from "../../assets/icons/tokens/daomaker.svg";
import dodoblack from "../../assets/icons/tokens/dodoblack.svg";
import envision from "../../assets/icons/tokens/envision.svg";
import epnspush from "../../assets/icons/tokens/epnspush.svg";
import galileo from "../../assets/icons/tokens/galileo.svg";
import tron from "../../assets/icons/tokens/tron.svg";
import xdbdigitalbits from "../../assets/icons/tokens/xdbdigitalbits.svg";

import bibox from "../../assets/icons/exchanges/bibox.svg";
import binance from "../../assets/icons/exchanges/binance.svg";
import bitbns from "../../assets/icons/exchanges/bitbns.svg";
import bitfinex from "../../assets/icons/exchanges/bitfinex.svg";
import bitget from "../../assets/icons/exchanges/bitget.svg";
import bitkub from "../../assets/icons/exchanges/bitkub.svg";
import bitmex from "../../assets/icons/exchanges/bitmex.svg";
import brine from "../../assets/icons/exchanges/brine.svg";
import bybit from "../../assets/icons/exchanges/bybit.svg";
import coinbase from "../../assets/icons/exchanges/coinbase.svg";
import coindcx from "../../assets/icons/exchanges/coindcx.svg";
import coinswitch from "../../assets/icons/exchanges/coinswitch.svg";
import crypto from "../../assets/icons/exchanges/crypto.svg";
import cryptofacilities from "../../assets/icons/exchanges/cryptofacilities.svg";
import deribit from "../../assets/icons/exchanges/deribit.svg";
import gateio from "../../assets/icons/exchanges/gateio.svg";
import huobi from "../../assets/icons/exchanges/huobi.svg";
import indodax from "../../assets/icons/exchanges/indodax.svg";
import kucoin from "../../assets/icons/exchanges/kucoin.svg";
import lcx from "../../assets/icons/exchanges/lcx.svg";
import mexcglobal from "../../assets/icons/exchanges/mexcglobal.svg";
import okex from "../../assets/icons/exchanges/okex.svg";
import opnxwhite from "../../assets/icons/exchanges/opnxwhite.svg";
import unocoin from "../../assets/icons/exchanges/unocoin.svg";
import valr from "../../assets/icons/exchanges/valr.svg";
import wazirx from "../../assets/icons/exchanges/wazirx.svg";

const allExchanges = [
  bibox,
  binance,
  bitbns,
  bitfinex,
  bitget,
  bitkub,
  bitmex,
  brine,
  bybit,
  coinbase,
  coindcx,
  coinswitch,
  crypto,
  cryptofacilities,
  deribit,
  gateio,
  huobi,
  indodax,
  kucoin,
  lcx,
  mexcglobal,
  okex,
  opnxwhite,
  unocoin,
  valr,
  wazirx,
];

const allTokens = [
  alpacafinance,
  ariva,
  biconomy,
  celolight,
  daomaker,
  dodoblack,
  envision,
  epnspush,
  galileo,
  tron,
  xdbdigitalbits,
];

const StyledPartners = styled("div")({
  padding: "20px 100px",
  width: "100%",
  "@media (max-width: 1100px)": {
    padding: "15px 20px",
  },
  "@media (max-width: 800px)": {
    padding: "5px 20px",
  },
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
  "@media (max-width: 1100px)": {
    fontSize: "28px",
  },
  "@media (max-width: 800px)": {
    fontSize: "22px",
  },
});

const StyledPartnersContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  margin: "20px 0",
  width: "100%",
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$white} 100%)`,
  border: "1px solid" + theme.colors.$gray,
  borderRadius: "20px",
  padding: "0px 100px",
  height: "600px",
  overflow: "hidden",
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
  "@media (max-width: 1100px)": {
    padding: "0px 50px",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column",
    "& div": {
      padding: "50px 0",
      textAlign: "center",
    },
  },
});

const TokenContainer = styled(Box)({
  background: "gray",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",

  "@media (max-width: 800px)": {
    flexDirection: "row",
    animation: "stripX 30s linear infinite",
  },
});
const ExchangeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  background: "black",
  "@media (max-width: 1100px)": {
    "& img": {
      width: "125px",
    },
  },
  "@media (max-width: 800px)": {
    flexDirection: "row",
    gap: "20px",
    height: "100px",
    animation: "stripX 40s linear infinite",
    "& img": {
      width: "100px",
    },
  },
});
const ExchangeTokenContainer = styled(Box)({
  alignItems: "flex-start",
  display: "flex",
  gap: "100px",
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
          Our growing partnerships connects us to the world 
        </StyledPartnersHeader>
        <StyledPartnersContainer>
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span className="line-1">
              We are for you <br />
            </span>
            <span className="line-2">
              Don't just take our <br /> word for it
            </span>
          </div>
          <ExchangeTokenContainer>
            <ExchangeContainer className="stripAnimationLonger">
              {[...allExchanges, ...allExchanges].map((exchange) => (
                <img src={exchange} alt={"exchange"} width={"150px"} />
              ))}
            </ExchangeContainer>
            <TokenContainer className="stripAnimation">
              {[...allTokens, ...allTokens].map((token) => (
                <img src={token} alt={"token"} width={"200px"} />
              ))}
            </TokenContainer>
          </ExchangeTokenContainer>
        </StyledPartnersContainer>
      </StyledPartners>
    </Element>
  );
};

export default PartnerSection;
