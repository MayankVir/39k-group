import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import Service1 from "../../assets/icons/service1.svg";
import Service2 from "../../assets/icons/service2.svg";
import Service3 from "../../assets/icons/service3.svg";
import Service4 from "../../assets/icons/service4.svg";
import { Element } from "react-scroll";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { Box } from "@mui/material";

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
  "@media (max-width: 920px)": {
    padding: "20px 0",
    fontSize: "24px",
  },
  "@media (max-width: 450px)": {
    padding: "20px 0",
    fontSize: "18px",
  },
});

const StyledServicesOptions = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  padding: "50px 0",
  flexWrap: "wrap",

  "@media (max-width: 800px)": {
    padding: "20px 0",
  },
});

const StyledServicesOption = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.colors.$white,
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.15)",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  transition: "500ms",
  animation: "animateReverse 300ms ease-in-out forwards",

  width: "600px",
  height: "150px",
  borderRadius: "5px",
  "& img": {
    width: "40px",
  },
  "@media (max-width: 1125px)": {
    justifyContent: "start",
    width: "450px",
    height: "135px",

    "& img": {
      width: "30px",
    },
  },
  "@media (max-width: 920px)": {
    width: "350px",
    height: "130px",

    "& img": {
      width: "20px",
    },
  },

  "&:hover": {
    animation: "animate 300ms ease-in-out forwards",
  },
});

const StyledServicesTitle = styled("div")({
  fontSize: "20px",
  fontWeight: "600",
  "@media (max-width: 1125px)": {
    fontSize: "16px",
  },
  "@media (max-width: 920px)": {
    fontSize: "12px",
  },
});

const StyledServicesDetails = styled("div")({
  fontSize: "14px",
  fontWeight: "300",
  padding: "10px 0",
  "@media (max-width: 1125px)": {
    fontSize: "10px",
  },
  "@media (max-width: 920px)": {
    fontSize: "9px",
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
    if (isInViewport) setServicesInView(true);
    else setServicesInView(false);
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
              <Box
                style={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
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
              </Box>
            </StyledServicesOption>

            <StyledServicesOption>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
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
              </Box>
            </StyledServicesOption>

            <StyledServicesOption>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
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
              </Box>
            </StyledServicesOption>

            <StyledServicesOption>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <StyledServicesIcon>
                  <img src={Service4} alt="" />
                </StyledServicesIcon>
                <div>
                  <StyledServicesTitle>
                    OTC Solutions for Institutional Investors 
                  </StyledServicesTitle>
                  <StyledServicesDetails>
                    Offering competitive bid-ask quotes for large trade orders
                    to reduce market impact cost 
                  </StyledServicesDetails>
                </div>
              </Box>
            </StyledServicesOption>
          </StyledServicesOptions>
        </div>
      </StyledServices>
    </Element>
  );
};

export default ServiceSection;
