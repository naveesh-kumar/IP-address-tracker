import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 475,
      desktop: 1440,
    },
  },
  palette: {
    darkGrey: "hsl(0, 0%, 17%)",
    lightGrey: "hsl(0, 0%, 59%)",
    btnGrey: {
      main: "hsl(0, 0%, 17%)",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    body1: {
      "&.upperCase": {
        textTransform: "uppercase",
      },
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: 10,
          backgroundColor: theme.palette.common.white,
          fontSize: theme.typography.fontSize,
          fontColor: theme.palette.lightGrey,
          ...(ownerState.width && {
            width: ownerState.width,
          }),
          "& .MuiInputBase-input": {
            padding: "15px 20px",
          },
          "& .MuiButtonBase-root": {
            height: "100%",
          },
        }),
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.rightborderradiusonly && {
            borderRadius: "0px 10px 10px 0px !important",
          }),
        }),
      },
    },
  },
});
