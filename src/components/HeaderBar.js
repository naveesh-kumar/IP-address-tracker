import React, { useState, useRef } from "react";
import { styled } from "@mui/system";
import InfoContainer from "./InfoContainer";
import { Input, Typography, Button, useMediaQuery } from "@mui/material";
import { theme } from "../theme/theme";
import Image from "next/image";
import { debounceClick, handleGeoReq, isValidIP } from "../utils/helperFuncs";

const HeaderContainer = styled("main")({
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  gap: "10%",
  background: `url('/images/pattern-bg-desktop.png') no-repeat`,
  backgroundSize: "cover",
  padding: "30px",
  position: "relative",
  [theme.breakpoints.down("mobile")]: {
    height: "40%",
  },
});

const HeaderBar = ({ data, setData }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  const [ipAddress, setIpAddress] = useState("");
  const timer = useRef(null);

  const handleClick = async () => {
    if (!ipAddress || ipAddress === data?.ip || !isValidIP(ipAddress)) return;
    try {
      let data = await handleGeoReq(ipAddress);
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <HeaderContainer>
      <Typography
        variant="body1"
        color="common.white"
        sx={{ fontWeight: 500, fontSize: "25px" }}
        children="IP Address Tracker"
      />
      <Input
        placeholder="Search for any IP address or domain"
        disableUnderline
        width={isMobile ? "95%" : "30%"}
        onChange={(e) => setIpAddress(e.target.value)}
        endAdornment={
          <Button
            variant="contained"
            size="small"
            rightborderradiusonly="true"
            sx={{ minWidth: "45px" }}
            color="btnGrey"
            onClick={() => debounceClick(handleClick, timer)}
            children={
              <Image
                src={"/icons/icon-arrow.svg"}
                alt=""
                width={10}
                height={10}
              />
            }
          />
        }
      />
      <InfoContainer data={data} />
    </HeaderContainer>
  );
};

export default HeaderBar;
