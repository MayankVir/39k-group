import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import CountUp from "react-countup";

import { useIsInViewport } from "../../hooks/useIsInViewport";

const StyledDataContainer = styled(Box)({
  margin: "10% 4%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "50px",
  "@media (max-width: 1180px)": {
    margin: "8% 2%",
    alignItems: "center",
  },
  "@media (max-width: 425px)": {
    gap: "10px",
  },
});

const StyledDataTagline = styled(Box)({
  padding: "30px 50px",
  fontSize: "24px",
  fontWeight: "500",
  textAlign: "center",
  flex: 0.5,
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  "@media (max-width: 1180px)": {
    padding: "15px 25px",
    fontSize: "16px",
    width: "100%",
    textAlign: "center",
  },
  "@media (max-width: 800px)": {
    fontSize: "16px",
  },
});

const StyledDataContentContainer = styled(Box)({
  display: "flex",
  flex: 0.5,
  flexWrap: "wrap",
  marginTop: "15px",
  gap: "60px",
  "@media (max-width: 1100px)": {
    gap: "45px",
    justifyContent: "center",
    margin: "25px 0",
    flex: 1,
  },

  "@media (max-width: 800px)": {
    width: "100%",
  },
});

const StyledDataContent = styled(Box)({
  fontSize: "50px",
  fontWeight: "600",
  color: theme.colors.$primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "all 200ms ease-in-out",
  "@media (max-width: 1180px)": {
    fontSize: "36px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  "@media (max-width: 524px)": {
    fontSize: "28px",
  },
});

const StyledDataContentDetail = styled(Box)({
  fontSize: "18px",
  color: theme.colors.$lightPrimary,
  fontWeight: "500",
  "@media (max-width: 1100px)": {
    fontSize: "12px",
  },
  "@media (max-width: 800px)": {
    fontSize: "9px",
    textAlign: "center",
  },
});

const DataContentTwoBox = styled(Box)({
  display: "flex",
  gap: "60px",
  "@media (max-width: 665px)": {
    flexDirection: "column",
    width: "130px",
  },
});

const DataSection = () => {
  const ref = useRef();
  const isInView = useIsInViewport(ref);
  const [onceViewed, setOnceViewed] = useState(false);

  return (
    <StyledDataContainer>
      <StyledDataTagline ref={ref}>
        Over the years, 39K has evolved into a dominant market maker, owing to
        our commitment to innovation and excellence
      </StyledDataTagline>
      <StyledDataContentContainer>
        <DataContentTwoBox>
          <StyledDataContent>
            <Box>
              $
              {isInView ? (
                <CountUp
                  end={5}
                  duration={7}
                  onEnd={() => setOnceViewed(true)}
                />
              ) : (
                5
              )}
              B+
            </Box>
            <StyledDataContentDetail>
              Monthly Volume Traded
            </StyledDataContentDetail>
          </StyledDataContent>
          <StyledDataContent>
            <Box>
              $
              {isInView ? (
                <CountUp
                  end={100}
                  duration={3}
                  onEnd={() => setOnceViewed(true)}
                />
              ) : (
                100
              )}
              K+
            </Box>
            <StyledDataContentDetail>
              Daily Transactions{" "}
            </StyledDataContentDetail>
          </StyledDataContent>
        </DataContentTwoBox>
        <DataContentTwoBox>
          <StyledDataContent>
            <Box>
              $
              {isInView ? (
                <CountUp
                  end={200}
                  duration={3}
                  onEnd={() => setOnceViewed(true)}
                />
              ) : (
                200
              )}
              B+
            </Box>
            <StyledDataContentDetail>
              Cumulative Volume Traded
            </StyledDataContentDetail>
          </StyledDataContent>
          <StyledDataContent>
            <Box>
              {isInView ? (
                <CountUp
                  end={400}
                  duration={3}
                  onEnd={() => setOnceViewed(true)}
                />
              ) : (
                400
              )}
              +
            </Box>
            <StyledDataContentDetail>Pairs Traded </StyledDataContentDetail>
          </StyledDataContent>
        </DataContentTwoBox>
      </StyledDataContentContainer>
    </StyledDataContainer>
  );
};

export default DataSection;
