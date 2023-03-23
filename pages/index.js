import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import Container from "../src/components/Container";
import { theme } from "../src/theme";

const TrackerApp = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container initialData={data} />
    </ThemeProvider>
  );
};

export default TrackerApp;

export async function getStaticProps() {
  const data = {
    ip: "203.192.251.13",
    location: "State of Karnataka, IN",
    timeZone: "+05:30",
    isp: "ONEOTT INTERTAINMENT LIMITED",
    lat: 12.97194,
    lng: 77.59369,
    city: "Bengaluru",
  };
  return {
    props: {
      data,
    },
  };
}
