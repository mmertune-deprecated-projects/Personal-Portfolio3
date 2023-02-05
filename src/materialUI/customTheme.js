import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary:{
        main:"#5bc2e7"
    }
  },
});

const customTheme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: theme.palette.mode === "dark"
             ? "linear-gradient(90deg,rgba(7, 32, 65, 1) 0%,rgba(2, 11, 22, 1) 100%)"
             : "linear-gradient(90deg,rgba(7, 32, 65, 1) 0%,rgba(2, 11, 22, 1) 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

export default customTheme;
