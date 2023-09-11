import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import LinkedinIcon from "../../assets/icons/linkedin.svg";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import { TextField, Typography } from "@mui/material";
import { Element } from "react-scroll";

import Button from "../Button";

import axios from "axios";

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
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState(false);

  const sendForm = async () => {
    const { name, email, message } = formValue;

    const apiKey =
      "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";
    const sendinblueApiUrl = "https://api.sendinblue.com/v3/smtp/email";
    const emailData = {
      sender: { email: "39kgroupwebsite@gmail.com", name: "39K Group" },
      to: [{ email: "bd@39kpartners.com" }],
      subject: "New Inquiry from 39k Group Website",
      textContent: `Dear team,

                    We hope this message finds you well. We are reaching out to inform you that someone has contacted you through the contact form on the website. Below are the details:

                    Name: ${name}
                    Email: ${email}
                    Message: ${message}

                    We recommend responding at your earliest convenience to address any inquiries or comments the individual might have.

                    Warm regards,

                    39k Group

                    Note: This is an automated message. Please do not reply directly to this email.`,
    };

    try {
      await fetch(sendinblueApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(emailData),
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSendingForm = () => {
    if (!Object.values(formValue).every((value) => !!value)) {
      setError(true);
      return;
    }
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 9000);
    sendForm();
  };

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
                    window.open("https://wa.me/+918861243538", "_blank")
                  }
                  alt="WhatsappIcon"
                />
                <img
                  src={TelegramIcon}
                  onClick={() =>
                    window.open("https://t.me/danish_39k", "_blank")
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
              id="name"
              label="Name"
              variant="standard"
              onChange={(e) => {
                setError(false);
                setFormValue((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
            <TextField
              type="email"
              className="inputField"
              id="email"
              label="Email"
              variant="standard"
              onChange={(e) => {
                setError(false);
                setFormValue((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
            <TextField
              className="inputField"
              id="message"
              label="Message"
              variant="standard"
              onChange={(e) => {
                setError(false);
                setFormValue((prev) => ({ ...prev, message: e.target.value }));
              }}
            />
            {error && (
              <span
                style={{
                  fontSize: "12px",
                }}
              >
                Please fill all the fields
              </span>
            )}
            <Button
              handleClick={handleSendingForm}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              label="Submit"
            />
          </StyledContactUs>
        </StyledFooterContainer>
        <hr />
        <StyledTnC>
          <div className="disclaimer">
            Disclaimer - 39k Group comprises 39k Partners LLP, White Squire
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
