import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Cv from "./Cv";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Cv />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
