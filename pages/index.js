import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import Container from "../src/components/Container";
import { theme } from "../src/theme";

const TrackerApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container />
    </ThemeProvider>
  );
};

export default TrackerApp;
