import React from "react";
import { styled } from "@mui/system";
import InfoBox from "../utils/InfoBox";
import { Divider, useMediaQuery } from "@mui/material";
import { theme } from "../theme/theme";

const InfoContainerDiv = styled("div")({
  width: "80%",
  height: "fit-content",
  background: "white",
  position: "absolute",
  top: "100%",
  transform: "translateY(-50%)",
  zIndex: 999,
  borderRadius: "20px",
  padding: "30px 20px",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("mobile")]: {
    flexDirection: "column",
    padding: "20px 20px",
    width: "75%",
  },
});

const InfoContainer = ({ data }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  const geoLocationData = {
    "ip address": data?.ip ?? "",
    location: data?.location ?? "",
    timezone: data?.timeZone ?? "",
    isp: data?.isp ?? "",
  };

  return (
    <InfoContainerDiv>
      {Object.keys(geoLocationData).map((key, idx, arr) => {
        return (
          <>
            <InfoBox infoKey={key} value={geoLocationData[key]} />
            {!isMobile && idx !== arr.length - 1 && (
              <Divider orientation="vertical" sx={{ height: "auto" }} />
            )}
          </>
        );
      })}
    </InfoContainerDiv>
  );
};

export default InfoContainer;
