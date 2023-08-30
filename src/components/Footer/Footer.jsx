import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import LinkedinIcon from "../../assets/icons/linkedin.svg";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import { Button, TextField, Typography } from "@mui/material";

const StyledFooter = styled("div")({
  padding: "50px 200px",
  paddingBottom: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
  color: theme.colors.$white,
});

const StyledFooterContainer = styled("div")({
  display: "flex",
  gap: "200px",
  paddingBottom: "40px",
});

const StyledAddressSocials = styled("div")({
  flex: 0.5,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& .title": {
    fontWeight: "600",
    fontSize: "22px",
  },
  "& img": {
    cursor: "pointer",
    width: "28px",
  },
});

const StyledContactUs = styled("div")({
  flex: 0.5,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  "& .inputField": {
    width: "100%",
    color: theme.colors.$white,
  },
  "& label": {
    color: `${theme.colors.$white} !important`,
  },

  "& button": {
    backgroundColor: `${theme.colors.$white} !important`,
    color: `${theme.colors.$primary} !important`,
    borderRadius: "20px",
    padding: "5px 50px",
    margin: "20px 0",
  },
  "& input": {
    color: `${theme.colors.$white} !important`,
  },
  "& .MuiInputBase-root:before": {
    borderColor: `${theme.colors.$white} !important`,
  },
  "& .MuiInputBase-root:after": {
    borderColor: `${theme.colors.$white} !important`,
  },
  "& .MuiInputBase-root:hover:after": {
    borderColor: `${theme.colors.$white} !important`,
  },
  "& .MuiInputBase-root:hover:before": {
    borderColor: `${theme.colors.$white} !important`,
  },
});

const StyledTnC = styled("div")({
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  paddingTop: "20px",
  "& .disclaimer": {
    fontSize: "10px",
    fontWeight: "300",
  },
  "& .copyright": {
    fontSize: "12px",
    fontWeight: "500",
  },
});

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledAddressSocials>
          <div>
            <Typography className="title">ADDRESS</Typography>
            <Typography className="body">
              65, Plus Offices, Sector 44, Gurgaon
            </Typography>
          </div>
          <div>
            <Typography className="title">EMAIL</Typography>
            <Typography className="body">contact@39k.group</Typography>
          </div>
          <div>
            <Typography className="title">Follow Us On</Typography>
            <Typography
              style={{ display: "flex", gap: "15px", padding: "5px 0" }}
            >
              <img src={LinkedinIcon} alt="LinkedinIcon" />
              <img src={WhatsappIcon} alt="WhatsappIcon" />
              <img src={TelegramIcon} alt="TelegramIcon" />
              <img src={TwitterIcon} alt="TwitterIcon" />
            </Typography>
          </div>
        </StyledAddressSocials>
        <StyledContactUs>
          <Typography variant="h4">Contact Us</Typography>
          <TextField
            className="inputField"
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            className="inputField"
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <TextField
            className="inputField"
            id="standard-basic"
            label="Message"
            variant="standard"
          />
          <Button>Send</Button>
        </StyledContactUs>
      </StyledFooterContainer>
      <hr />
      <StyledTnC>
        <div className="disclaimer">
          Disclaimer – 39k Group comprises 39k Partners LLP, White Squire
          Technologies LLP, White Squire Global DMCC and White Squire Global
          (BVI) Limited, all of which are proprietary trading firms held by the
          same UBOs. There is no other legal relation between the entities. 39k
          Group does not engage in management of any crypto assets or fiat
          currency on behalf of investors. The material provided is for
          information purposes only and does not constitute an offer or
          solicitation for the purchase of any crypto assets or financial
          instruments.
        </div>
        <div className="copyright">39k.group© Copyright 2023</div>
      </StyledTnC>
    </StyledFooter>
  );
};

export default Footer;
