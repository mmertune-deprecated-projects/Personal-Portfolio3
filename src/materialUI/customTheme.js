import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fbfbfb",
    },
    secondary: {
      main: "#5bc2e7",
    },
    tertiary: {
      main: "#E84757",
      contrastText: "#fbfbfb",
    },
  },
  typography: {
    fontFamily: "Futura Custom",
    header: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    subHeader: {
      fontSize: "1.5rem",
      fontWeight: "normal",
    },
    sectionHeader: {
      fontSize: "2rem",
      fontWeight: "normal",
    },
    subSectionHeader: {
      fontFamily: "Roboto Mono",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    body: {
      fontFamily: "Calibre",
      fontSize:"1rem"
    },
    button: {
      fontFamily: "Roboto Mono",
      fontWeight: "bold",
    },
  },

  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //     @font-face{
  //       font-family: "futuraLocal";
  //       src: local("futura") url(${futuraLight}) format("truetype");
  //       font-weight: bold;
  //       font-style: normal;
  //     }`,
  //   },
  // },
});

const customTheme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            theme.palette.mode === "dark"
              ? "linear-gradient(90deg,rgba(7, 32, 65, 1) 0%,rgba(2, 11, 22, 1) 100%)"
              : "linear-gradient(90deg,rgba(7, 32, 65, 1) 0%,rgba(2, 11, 22, 1) 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
  // typography: {
  //   h1: {
  //     fontFamily:"futuraLocal"
  //   },
  // },
});

export default customTheme;
