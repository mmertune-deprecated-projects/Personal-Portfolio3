import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "./context/UIContext";
import { ThemeProvider } from "@mui/material";
import customTheme from "./materialUI/customTheme";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <BrowserRouter>
          <UIProvider>
            <App />
          </UIProvider>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
