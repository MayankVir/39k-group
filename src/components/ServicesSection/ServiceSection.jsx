import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import Service1 from "../../assets/icons/service1.svg";
import Service2 from "../../assets/icons/service2.svg";
import Service3 from "../../assets/icons/service3.svg";
import Service4 from "../../assets/icons/service4.svg";

const StyledServices = styled("div")({
  padding: "20px 0",
  width: "100%",
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
});

const StyledServicesHeader = styled("div")({
  color: theme.colors.$white,
  fontSize: "34px",
  fontWeight: "300",
  padding: "40px 0",
  width: "100%",
  textAlign: "center",
});

const StyledServicesOptions = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  rowGap: "75px",
  columnGap: "100px",
  padding: "50px 0",
  flexWrap: "wrap",
});

const StyledServicesOption = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "start",
  color: theme.colors.$white,
  width: "550px",
  "& img": {
    width: "50px",
  },
});

const StyledServicesTitle = styled("div")({
  fontSize: "20px",
  fontWeight: "600",
});

const StyledServicesDetails = styled("div")({
  fontSize: "14px",
  fontWeight: "300",
  padding: "10px 0",
});

const StyledServicesIcon = styled("div")({
  margin: "0 10px",
});

const ServiceSection = () => {
  return (
    <StyledServices>
      <StyledServicesHeader>
        What we can offer to your business
      </StyledServicesHeader>
      <StyledServicesOptions>
        <StyledServicesOption>
          <StyledServicesIcon>
            <img src={Service1} alt="" />
          </StyledServicesIcon>
          <div>
            <StyledServicesTitle>
              Token Project Market Making 
            </StyledServicesTitle>
            <StyledServicesDetails>
              Ensuring 24/7 liquidity for 200+ tokens and 30+ spot and
              derivative crypto exchanges
            </StyledServicesDetails>
          </div>
        </StyledServicesOption>

        <StyledServicesOption>
          <StyledServicesIcon>
            <img src={Service2} alt="" />
          </StyledServicesIcon>
          <div>
            <StyledServicesTitle>
              Token Listing and Distribution Advisory
            </StyledServicesTitle>
            <StyledServicesDetails>
              Assisting tokens by connecting them with our network of exchanges
              and helping with capital raise by timely distribution 
            </StyledServicesDetails>
          </div>
        </StyledServicesOption>

        <StyledServicesOption>
          <StyledServicesIcon>
            <img src={Service3} alt="" />
          </StyledServicesIcon>
          <div>
            <StyledServicesTitle>
              Designated Market Making for Trading Venues
            </StyledServicesTitle>
            <StyledServicesDetails>
              Providing end-to-end liquidity solution for all tokens on an
              exchange with 99.99% uptime
            </StyledServicesDetails>
          </div>
        </StyledServicesOption>

        <StyledServicesOption>
          <StyledServicesIcon>
            <img src={Service4} alt="" />
          </StyledServicesIcon>
          <div>
            <StyledServicesTitle>
              OTC Solutions for Institutional Investors 
            </StyledServicesTitle>
            <StyledServicesDetails>
              Offering competitive bid-ask quotes for large trade orders to
              reduce market impact cost 
            </StyledServicesDetails>
          </div>
        </StyledServicesOption>
      </StyledServicesOptions>
    </StyledServices>
  );
};

export default ServiceSection;
