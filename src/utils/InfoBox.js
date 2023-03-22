import React from "react";
import { styled } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import { theme } from "../theme/theme";

const InfoBoxContainer = styled("div")({
  width: "25%",
  height: "auto",
  padding: "1% 4%",
  wordBreak: "break-word",
  minHeight: "70px",
  [theme.breakpoints.down("mobile")]: {
    width: "100%",
    padding: "3% 4%",
  },
});

const InfoBox = ({ infoKey, value }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  return (
    <InfoBoxContainer>
      <Typography
        color="lightGrey"
        align={isMobile ? "center" : "left"}
        className="upperCase"
        sx={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.8px",
          marginBottom: "8px",
        }}
        children={infoKey}
      />
      <Typography
        color="darkGrey"
        align={isMobile ? "center" : "left"}
        sx={{
          fontSize: { mobile: "20px", desktop: "25px" },
          fontWeight: 500,
          lineHeight: "100%",
        }}
        children={value}
      />
    </InfoBoxContainer>
  );
};

export default InfoBox;
