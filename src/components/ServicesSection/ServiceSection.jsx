import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import Service1 from "../../assets/icons/service1.svg";
import Service2 from "../../assets/icons/service2.svg";
import Service3 from "../../assets/icons/service3.svg";
import Service4 from "../../assets/icons/service4.svg";
import { Element } from "react-scroll";
import { useIsInViewport } from "../../hooks/useIsInViewport";

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
  "@media (max-width: 1100px)": {
    padding: "35px 0",
    fontSize: "28px",
  },
  "@media (max-width: 800px)": {
    padding: "30px 0",
    fontSize: "22px",
  },
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
  "@media (max-width: 1100px)": {
    rowGap: "50px",
  },
  "@media (max-width: 800px)": {
    padding: "25px 0",
    rowGap: "25px",
  },
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
  "@media (max-width: 1100px)": {
    justifyContent: "start",
    width: "500px",

    "& img": {
      width: "40px",
    },
  },
  "@media (max-width: 800px)": {
    width: "400px",

    "& img": {
      width: "25px",
    },
  },
});

const StyledServicesTitle = styled("div")({
  fontSize: "20px",
  fontWeight: "600",
  "@media (max-width: 1100px)": {
    fontSize: "16px",
  },
  "@media (max-width: 800px)": {
    fontSize: "12px",
  },
});

const StyledServicesDetails = styled("div")({
  fontSize: "14px",
  fontWeight: "300",
  padding: "10px 0",
  "@media (max-width: 1100px)": {
    fontSize: "10px",
  },
  "@media (max-width: 800px)": {
    fontSize: "8px",
  },
});

const StyledServicesIcon = styled("div")({
  margin: "0 10px",
});

const ServiceSection = () => {
  const [servicesInView, setServicesInView] = useState(false);
  const serviceRef = useRef();
  const isInViewport = useIsInViewport(serviceRef);

  useEffect(() => {
    if (servicesInView) return;
    if (isInViewport) setServicesInView(true);
  }, [isInViewport]);

  return (
    <Element name="services">
      <StyledServices>
        <div ref={serviceRef} className={servicesInView && "fadeIn500ms"}>
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
                  Assisting tokens by connecting them with our network of
                  exchanges and helping with capital raise by timely
                  distribution 
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
        </div>
      </StyledServices>
    </Element>
  );
};

export default ServiceSection;
