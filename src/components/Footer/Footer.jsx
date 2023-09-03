import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import LinkedinIcon from "../../assets/icons/linkedin.svg";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import { Button, TextField, Typography } from "@mui/material";
import { Element } from "react-scroll";

const StyledFooter = styled("div")({
  padding: "50px 200px",
  paddingBottom: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  background: `linear-gradient(90deg, ${theme.colors.$primary} 0%, ${theme.colors.$lightPrimary} 75%)`,
  color: theme.colors.$white,
  "@media (max-width: 1100px)": {
    padding: "25px 100px",
  },
  "@media (max-width: 800px)": {
    padding: "25px",
  },
});

const StyledFooterContainer = styled("div")({
  display: "flex",
  gap: "100px",
  paddingBottom: "40px",
  "@media (max-width: 1100px)": {
    gap: "10px",
  },
  "@media (max-width: 800px)": {
    flexDirection: "column-reverse",
  },
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
  "@media (max-width: 1100px)": {
    "& .title": {
      fontSize: "18px",
    },
    "& img": {
      width: "24px",
    },
  },
  "@media (max-width: 800px)": {
    // "& .title": {
    //   fontSize: "12px",
    // },
    // "& img": {
    //   width: "18px",
    // },
    marginTop: "25px",
  },
});

const StyledContactUs = styled("div")({
  flex: 0.5,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  "& .title": {
    fontSize: "24px !important",
  },
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

  "@media (max-width: 1100px)": {
    "& .title": {
      fontSize: "22px !important",
    },
  },
  // "@media (max-width: 800px)": {
  //   "& .title": {
  //     fontSize: "16px !important",
  //   },
  // },
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
    <Element name="contactUs">
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
                style={{
                  display: "flex",
                  gap: "10px",
                  padding: "5px 0",
                }}
              >
                <img
                  src={LinkedinIcon}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/39kgroup/",
                      "_blank"
                    )
                  }
                  alt="LinkedinIcon"
                />
                <img
                  src={WhatsappIcon}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/39kgroup/",
                      "_blank"
                    )
                  }
                  alt="WhatsappIcon"
                />
                <img
                  src={TelegramIcon}
                  onClick={() =>
                    window.open("https://t.me/@danish_39k", "_blank")
                  }
                  alt="TelegramIcon"
                />
                <img
                  src={TwitterIcon}
                  onClick={() =>
                    window.open("https://twitter.com/39k_group", "_blank")
                  }
                />
              </Typography>
            </div>
          </StyledAddressSocials>
          <StyledContactUs>
            <Typography className="title">Contact Us</Typography>
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
            (BVI) Limited, all of which are proprietary trading firms held by
            the same UBOs. There is no other legal relation between the
            entities. 39k Group does not engage in management of any crypto
            assets or fiat currency on behalf of investors. The material
            provided is for information purposes only and does not constitute an
            offer or solicitation for the purchase of any crypto assets or
            financial instruments.
          </div>
          <div className="copyright">39k.group© Copyright 2023</div>
        </StyledTnC>
      </StyledFooter>
    </Element>
  );
};

export default Footer;
