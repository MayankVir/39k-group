import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import CountUp from "react-countup";

import { useIsInViewport } from "../../hooks/useIsInViewport";

const StyledDataContainer = styled(Box)({
  padding: "100px 50px",
  display: "flex",
  flexWrap: "wrap",
  "@media (max-width: 1100px)": {
    flexDirection: "column",
    padding: "50px 25px",
    alignItems: "center",
  },
  "@media (max-width: 800px)": {
    padding: "25px 10px",
  },
});

const StyledDataTagline = styled(Box)({
  padding: "30px 50px",
  fontSize: "24px",
  fontWeight: "500",
  width: "600px",
  flex: 0.5,
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  "@media (max-width: 1100px)": {
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
  "@media (max-width: 1100px)": {
    justifyContent: "center",
    width: "600px",
    gap: "45px",
    margin: "25px 0",
    flex: 1,
  },

  "@media (max-width: 800px)": {
    width: "100%",
    columnGap: "25px",
  },
});

const StyledDataContent = styled(Box)({
  width: "300px",
  height: "150px",
  fontSize: "40px",
  fontWeight: "600",
  color: theme.colors.$primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "all 200ms ease-in-out",
  "@media (max-width: 1100px)": {
    fontSize: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100px",
    width: "200px",
  },

  "@media (max-width: 524px)": {
    height: "75px",
    width: "150px",
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
        <StyledDataContent>
          <Box>
            $
            {onceViewed === false && isInView ? (
              <CountUp end={5} duration={3} onEnd={() => setOnceViewed(true)} />
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
            {onceViewed === false && isInView ? (
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
          <StyledDataContentDetail>Daily Transactions </StyledDataContentDetail>
        </StyledDataContent>
        <StyledDataContent>
          <Box>
            $
            {onceViewed === false && isInView ? (
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
            {onceViewed === false && isInView ? (
              <CountUp
                end={400}
                duration={3}
                onEnd={() => setOnceViewed(true)}
              />
            ) : (
              400
            )}{" "}
            +
          </Box>
          <StyledDataContentDetail>Pairs Traded </StyledDataContentDetail>
        </StyledDataContent>
      </StyledDataContentContainer>
    </StyledDataContainer>
  );
};

export default DataSection;
